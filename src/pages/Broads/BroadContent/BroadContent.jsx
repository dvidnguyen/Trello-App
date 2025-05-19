import React from "react";
import Box from "@mui/material/Box";
const BroadContent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.navBarHeight} - ${theme.trello.broadBarHeight})`,
          display: "flex",
          alignItems: "center",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        }}
      >
        Broad content
      </Box>
    </>
  );
};

export default BroadContent;
