import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
const BroadContent = ({board}) => {
  const oderedColumn = mapOrder(board?.columns,board?.columnOrderIds,'_id');
  // console.log(board)
  return (
    <>
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
        <ListColumns columns ={oderedColumn} />
      </Box>
    </>
  );
};

export default BroadContent;
