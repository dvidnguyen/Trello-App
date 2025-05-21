import Box from "@mui/material/Box";
import React from "react";
import Column from "./Column/Column";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
const ListColumns = () => {
  return (
    <>
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
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
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
    </>
  );
};

export default ListColumns;
