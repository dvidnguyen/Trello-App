import ModeDarkLight from "../ModeSelect/ModeDarkLight";
import Box from "@mui/material/Box";
const AppBar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trello.navBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeDarkLight />
      </Box>
    </>
  );
};

export default AppBar;
