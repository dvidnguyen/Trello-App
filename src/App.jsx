import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
function SelectMode() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    console.log(event.target.value);
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-mode-dark-light">Age</InputLabel>
      <Select
        labelId="select-mode-dark-light"
        id="mode-dark-light"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center",gap:"7px" }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: "flex", alignItems: "center",gap:"7px" }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: "flex", alignItems: "center",gap:"7px" }}>
            <SettingsSuggestOutlinedIcon fontSize="small" /> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
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
      <SelectMode />
      <hr />
      <ModeToggle />
      <hr />
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
