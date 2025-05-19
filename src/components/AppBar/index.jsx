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
const AppBar = () => {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: (theme) => theme.trello.navBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap:2,
          overflowX:'auto',
          overflowY:'none'
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "primary.dark" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
            <SvgIcon
              component={trelloIcon}
              inheritViewBox
              fontsize="small"
              sx={{ color: "primary.dark" }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "primary.dark",
              }}
            >
              Trello
            </Typography>
          </Box>

          <Box sx={{display:{xs:'none',md:'flex'},gap:1}}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">
            Create
          </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Search.."
            variant="outlined"
            type="search"
            size="small"
            sx={{minWidth:'130px',fontSize:'1rem',width:'140px'}}
            
          />
          <ModeDarkLight  sx={{minWidth:'130px',fontSize:'1rem',width:'120px'}} />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsIcon sx={{color:'primay.main'}} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help" sx={{ cursor: "pointer" }}>
            <HelpIcon />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
