import Box from "@mui/material/Box";
import React from "react";
import Column from "./Column/Column";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SortableContext,horizontalListSortingStrategy } from "@dnd-kit/sortable";

const ListColumns = ({ columns }) => {
  return (
    <>
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: "inherit",
          display: "flex",
          width: "100%",
          height: "100%",
          overflowY: "hidden",
          overflowX: "auto",
          "&::-webkit-scrollbar-thumb-track": { m: 2 },
        }}
      >
        {/* box comlum 1 */}
        {columns?.map((column) => {
          return <Column key={column._id} column={column} />;
        })}
        {/* Way 2 ngan hon khi su li logic gi trong map dung {} con kh thi dung ngoac () */}
        {/* {columns?.map(column => <Column key={column._id} />)} */}
        <Box
          sx={{
            height: "fit-content",
            maxWidth: "200px",
            minWidth: "fit-content",
            mx: "10px",
            borderRadius: "3px",
            backgroundColor: "#ffffff3d",
            p: "1px 3px 1px",
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center",
            }}
          >
            Add New Broad
          </Button>
        </Box>
      </Box>
    </SortableContext>
    </>
  );
};

export default ListColumns;
