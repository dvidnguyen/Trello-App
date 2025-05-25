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
  const [oderedColumns, setOrderColumns] = useState([]);
  // cung mot thoi diem chi keo mot phan tu duy nhat card hoac column
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
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
      setOrderColumns((preColumn) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );
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
        const nextColumns = cloneDeep(preColumn);

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
    if (ACTIVE_DRAG_ITEMS_TYPE.CARD === activeDragItemType) {
      console.log("call handle drag end but it is not action ");
    }
    const { active, over } = event;
    // khi vi tri thay doi moi excute co duoi
    if (!active || !over) return;
    if (active.id !== over.id) {
      const oldIndex = oderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = oderedColumns.findIndex((c) => c._id === over.id);
      const dndOderedColumns = arrayMove(oderedColumns, oldIndex, newIndex);
      setOrderColumns(dndOderedColumns);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
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
