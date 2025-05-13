import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Broad from "./pages/Broads/Broad";
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
    <Broad />
    </>
    );
}

export default App;
