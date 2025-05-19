import ModeDarkLight from "../ModeSelect/ModeDarkLight";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/icons-material/Apps";
import { ReactComponent as trelloIcon } from "~/assets/trello.svg";
import WorkSpace from "./Menu/WorkSpace";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Profile from "./Menu/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const AppBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trello.navBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: 2,
          gap: 2,
          overflowX: "auto",
          overflowY: "none",
          bgcolor: (theme) =>theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "white" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SvgIcon
              component={trelloIcon}
              inheritViewBox
              fontsize="small"
              sx={{ color: "white" }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Trello
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <WorkSpace />
            <Recent />
            <Starred />
            <Templates />
            <Button
              variant="outlined"
              startIcon={<LibraryAddIcon />}
              sx={{ color: "white" }}
            >
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Search.."
            variant="outlined"
            type="text"
            size="small"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize="small"
                  onClick={() => setSearchValue("")}
                  sx={{
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                />
              ),
            }}
            sx={{
              minWidth: "130px",
              maxWidth: "180px",
              "& label": { color: "white" },
              "& input ": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <ModeDarkLight
            sx={{
              minWidth: "130px",
              fontSize: "1rem",
              width: "120px",
              "& label": { color: "white" },
              "& input ": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsIcon sx={{ color: "white" }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help" sx={{ color: "white" }}>
            <HelpIcon />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
