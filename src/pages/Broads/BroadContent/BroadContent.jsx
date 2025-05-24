import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
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
const ACTIVE_DRAP_ITEMS_TYPE = {
  COLUMN: "ACTIVE_DRAP_ITEMS_TYPE_COLUMN",
  CARD: "ACTIVE_DRAP_ITEMS_TYPE_CARD",
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
  // require touch and hole 250ms and make drap and drop 5pixel
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  // bo no vao state de keo tha luu vi tri
  // const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  const [oderedColumns, setOrderColumns] = useState([]);
  // cung mot thoi diem chi keo mot phan tu duy nhat card hoac column
  const [activeDrapItemId, setActiveDrapItemId] = useState(null);
  const [activeDrapItemType, setActiveDrapItemType] = useState(null);
  const [activeDrapItemData, setActiveDrapItemData] = useState(null);

  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);
  // console.log(board)
  const handleDrapStart = (event) => {
    console.log("handleDrapStart", event);
    setActiveDrapItemId(event?.active?.id);
    setActiveDrapItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAP_ITEMS_TYPE.CARD
        : ACTIVE_DRAP_ITEMS_TYPE.COLUMN
    );
    setActiveDrapItemData(event?.active?.data?.current);
  };
  const handleDrapEnd = (event) => {
    const { active, over } = event;
    // khi vi tri thay doi moi excute co duoi
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = oderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = oderedColumns.findIndex((c) => c._id === over.id);
      const dndOderedColumns = arrayMove(oderedColumns, oldIndex, newIndex);
      setOrderColumns(dndOderedColumns);
    }
    setActiveDrapItemId(null);
    setActiveDrapItemType(null);
    setActiveDrapItemData(null);
  };
  // console.log("activeDrapItemId", activeDrapItemId);
  // console.log("activeDrapItemType", activeDrapItemType);
  // console.log("activeDrapItemData", activeDrapItemData);
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
        onDragStart={handleDrapStart}
        onDragEnd={handleDrapEnd}
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
            {!activeDrapItemType && null}
            {activeDrapItemType === ACTIVE_DRAP_ITEMS_TYPE.COLUMN && (
              <Column column={activeDrapItemData} />
            )}
            {activeDrapItemType === ACTIVE_DRAP_ITEMS_TYPE.CARD && (
              <Card card={activeDrapItemData} />
            )}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  );
};

export default BroadContent;
