import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
const ModeDarkLight = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    console.log(event.target.value);
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-mode-dark-light">Mode </InputLabel>
      <Select
        labelId="select-mode-dark-light"
        id="mode-dark-light"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsSuggestOutlinedIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeDarkLight;
