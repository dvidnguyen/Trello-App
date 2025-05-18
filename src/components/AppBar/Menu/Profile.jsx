import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <Button
        id="menu-profile"
        aria-controls={open ? "menu-pf" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ padding: 0, margin: 0 }}
      >
        <Avatar
          alt="dvid nguyen"
          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/476909489_1175634627599249_4349082577525396696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWGQkz0NHgLc-q1qJk5ihcKM5iqnzfwhsozmKqfN_CG-DzdjovC9zjzYt6E2_Ln06sA5GVZ2QjX0Hm3mKvtkHX&_nc_ohc=4kGKyzK-IJEQ7kNvwHhRuHS&_nc_oc=Adkw0qi6SS7f8bqu7fzNjTqPllrWbVicu1V3F0Z13V1Mh_20NnGTOYKxYemx-IxEVJpIpQ1pbVvBPTtQ-JNSH2Kv&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=LWvBUjCjBESzQjL2DyI7MA&oh=00_AfK-kl0D1q1fZAPHRnGEWOMu0GXokNTpbNMe8DY2cprF9g&oe=682FDD5B"
          sx={{ width: 30, height: 30 }}
        />
      </Button> */}
      <Tooltip title="Account settings">
        <IconButton
          id="menu-profile"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, padding: 1.4, margin: 0, paddingRight: 1.2 }}
          aria-controls={open ? "menu-pf" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            alt="dvid nguyen"
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/476909489_1175634627599249_4349082577525396696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWGQkz0NHgLc-q1qJk5ihcKM5iqnzfwhsozmKqfN_CG-DzdjovC9zjzYt6E2_Ln06sA5GVZ2QjX0Hm3mKvtkHX&_nc_ohc=4kGKyzK-IJEQ7kNvwHhRuHS&_nc_oc=Adkw0qi6SS7f8bqu7fzNjTqPllrWbVicu1V3F0Z13V1Mh_20NnGTOYKxYemx-IxEVJpIpQ1pbVvBPTtQ-JNSH2Kv&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=LWvBUjCjBESzQjL2DyI7MA&oh=00_AfK-kl0D1q1fZAPHRnGEWOMu0GXokNTpbNMe8DY2cprF9g&oe=682FDD5B"
            sx={{ width: 37, height: 37 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-pf"
        MenuListProps={{
          "aria-labelledby": "menu-profile",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
