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
        }}
      >
        Broad content
      </Box>
    </>
  );
};

export default BroadContent;
