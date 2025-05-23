import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);
  // console.log(board)
  const handleDrapEnd = (event) => {
    console.log("hanldeDrap", event);
    const { active, over } = event;
    // khi vi tri thay doi moi excute co duoi
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = oderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = oderedColumns.findIndex((c) => c._id === over.id);
      const dndOderedColumns = arrayMove(oderedColumns, oldIndex, newIndex);
      setOrderColumns(dndOderedColumns);
    }
  };
  return (
    <>
      <DndContext onDragEnd={handleDrapEnd} sensors={sensors}>
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
        </Box>
      </DndContext>
    </>
  );
};

export default BroadContent;
