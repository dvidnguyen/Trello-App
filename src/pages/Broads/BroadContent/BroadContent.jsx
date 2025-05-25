import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
import { cloneDeep } from "lodash";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
const ACTIVE_DRAG_ITEMS_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEMS_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEMS_TYPE_CARD",
};
const BroadContent = ({ board }) => {
  // require the mouse to move 10pixels before activating
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  // require the mouse to move 10pixels before activating by click mouse
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  // require touch and hole 250ms and make drag and drop 5pixel
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  // bo no vao state de keo tha luu vi tri
  // const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  const [oderedColumns, setOrderedColumns] = useState([]);
  // cung mot thoi diem chi keo mot phan tu duy nhat card hoac column
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [oldColumnwhenDraggingCard,setOldColumnwhenDraggingCard] = useState(null);
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const findColumnByCardId = (cardId) => {
    return oderedColumns.find((column) =>
      column?.cards?.map((card) => card._id)?.includes(cardId)
    );
  };
  const handleDragStart = (event) => {
    console.log("handleDragStart", event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEMS_TYPE.CARD
        : ACTIVE_DRAG_ITEMS_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
    // lấy lại giá trị column cũ bằng state để đưa xuống cho end xử lí kéo thả 
    if(event?.active?.data?.current?.columnId){
      setOldColumnwhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  };
  const handleDragOver = (event) => {
    // Khong lam gi neu ma keo column
    if (ACTIVE_DRAG_ITEMS_TYPE.COLUMN === activeDragItemType) return;
    // Neu keo tha card thi tiep tuc
    const { active, over } = event;
    if (!active || !over) return;
    // activeDraggingId card dang giu va keo
    const {
      id: activeDraggingId,
      data: { current: activeDraggingData },
    } = active;
    // overCard la 2 cach tuong tac toi card dang keo
    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDraggingId);
    const overColumn = findColumnByCardId(overCardId);
    // console.log("activeColumn",activeColumn)
    // console.log("overColumn",overColumn)
    // Neu khong ton tai 1 trong 2 column return luon
    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      // Tim index ma OverCard trong Column dich den (Noi co Active Card co the duoc drop )
      setOrderedColumns((preColumns) => {
        const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId);
        //  console.log("overCardIndex",overCardIndex)
        let newCardIndex;
        const isBelowOverItems =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItems ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.card?.length + 1;
        // Clone mang orderedColumnState cu ra cai moi de xu li data roi return -> cap nhat lai orderedColumnState
        const nextColumns = cloneDeep(preColumns);

        const nextActiveColumn = nextColumns?.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns?.find(
          (column) => column._id === overColumn._id
        );
        // ** column past
        if (nextActiveColumn) {
          // xoá card ở cái column active ( cũng có thể hiểu là column cũ đi, cái lúc mà kéo card ra column khác )
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingId
          );
          // Cap nhat lai mang cardOrderIds cho chuan
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        // ** column recent
        if (nextOverColumn) {
          // kiem tra coi card dang keo co co overcolumn , neu co thi xoa no truocw
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingId
          );
          // them card dang keo vao overColumn theo vi tri index moi
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDragItemData
          );
          // Cap nhat lai mang cardOrderIds cho chuan
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
    }
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over) return;
    // xu li keo tha card
    if (ACTIVE_DRAG_ITEMS_TYPE.CARD === activeDragItemType) {
      const {
        id: activeDraggingId,
        data: { current: activeDraggingData },
      } = active;
      // overCard la 2 cach tuong tac toi card dang keo
      const { id: overCardId } = over;
      // tim 2 card moi theo cardID 
      const activeColumn = findColumnByCardId(activeDraggingId);
      const overColumn = findColumnByCardId(overCardId);

      // Neu khong ton tai 1 trong 2 column return luon
      if (!activeColumn || !overColumn) return;

      //keo tha card khac column
      if (oldColumnwhenDraggingCard._id !== overColumn._id){
         setOrderedColumns((preColumns) => {
        const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId);
        //  console.log("overCardIndex",overCardIndex)
        let newCardIndex;
        const isBelowOverItems =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItems ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.card?.length + 1;
        // Clone mang orderedColumnState cu ra cai moi de xu li data roi return -> cap nhat lai orderedColumnState
        const nextColumns = cloneDeep(preColumns);

        const nextActiveColumn = nextColumns?.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns?.find(
          (column) => column._id === overColumn._id
        );
        // ** column past
        if (nextActiveColumn) {
          // xoá card ở cái column active ( cũng có thể hiểu là column cũ đi, cái lúc mà kéo card ra column khác )
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingId
          );
          // Cap nhat lai mang cardOrderIds cho chuan
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        // ** column recent
        if (nextOverColumn) {
          // kiem tra coi card dang keo co co overcolumn , neu co thi xoa no truocw
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingId
          );
          // them card dang keo vao overColumn theo vi tri index moi
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDragItemData
          );
          // Cap nhat lai mang cardOrderIds cho chuan
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
      
      }
      //keo tha card khac column (oldColumnwhenDraggingCard)
      else
      {
         // vi tri column  cũ từ thằng (oldColumnwhenDraggingCard)
        const oldCardIndex = oldColumnwhenDraggingCard?.cards?.findIndex((c) => c._id === activeDragItemId);
        // vi tri column moi
        const newCardIndex = overColumn?.cards?.findIndex((c) => c._id === overCardId);
        //sap xep lai mang card trong cùng 1 column, arraymove của dndkit xử lí logic tương tự với kéo column tronh
        // broadcontent
        const dndOderedCards = arrayMove(oldColumnwhenDraggingCard?.cards, oldCardIndex, newCardIndex);
        setOrderedColumns(preColumns => {
          const nextColumns = cloneDeep(preColumns);
          // tìm column mà thẻ đang được kéo 
          const targetColumn = nextColumns.find(column=>column._id === overColumn._id )
          // cập nhật lại card và oderedCardId
          targetColumn.cards = dndOderedCards
          targetColumn.cardOrderIds = dndOderedCards.map(card =>card._id)
          console.log('targetColumn',targetColumn)
          console.log('dndOderedCards',dndOderedCards)
          return nextColumns
        });
      }
    }
    // xu li keo tha column
    if (ACTIVE_DRAG_ITEMS_TYPE.COLUMN === activeDragItemType) {
      if (active.id !== over.id) {
        // vi tri column cu
        const oldColumnIndex = oderedColumns.findIndex((c) => c._id === active.id);
        // vi tri column moi
        const newColumnIndex = oderedColumns.findIndex((c) => c._id === over.id);
        // dung dnd kit de sap xep lai Column ban dau bang arrayMove
        const dndOderedColumns = arrayMove(oderedColumns, oldColumnIndex, newColumnIndex);
        setOrderedColumns(dndOderedColumns);
      }
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnwhenDraggingCard(null);
  };
  // console.log("activeDragItemId", activeDragItemId);
  // console.log("activeDragItemType", activeDragItemType);
  // console.log("activeDragItemData", activeDragItemData);
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        // cillision detect algorithm
        collisionDetection={closestCorners}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: (theme) => theme.trello.broadContentHeight,
            display: "flex",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
            p: "10px 0",
          }}
        >
          <ListColumns columns={oderedColumns} />
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeDragItemType && null}
            {activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
            {activeDragItemType === ACTIVE_DRAG_ITEMS_TYPE.CARD && (
              <Card card={activeDragItemData} />
            )}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  );
};

export default BroadContent;
