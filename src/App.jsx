import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr/>
      <AccessAlarm />
      <ThreeDRotation />
      <div>Em la dvid nguyen </div>
      <Typography variant="subtitle2" gutterBottom color="text.secondary">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
    </>
  );
}

export default App;
