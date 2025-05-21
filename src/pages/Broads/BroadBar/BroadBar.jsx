import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterListIcon from "@mui/icons-material/FilterList";
import FlashAutoIcon from "@mui/icons-material/FlashAuto";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { capitalizeFirstLetter } from "~/utils/formater";
const Menu_style = {
  color: "white",
  bgcolor: "primary.20",
  paddingX: "3px",
  borderRadius: "5px",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};
const BroadBar = ({ board }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: (theme) => theme.trello.broadBarHeight,
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          overflowY: "none",
          paddingX: 2,
          // borderTop: "1px solid rgb(180, 195, 203)",
          // borderBottom: "1px solid rgb(196, 214, 223)",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            label={board?.title}
            sx={Menu_style}
            icon={<DashboardIcon />}
            clickable
          />
          <Chip
            label={capitalizeFirstLetter(board?.type)}
            sx={Menu_style}
            icon={<VpnLockIcon />}
            clickable
          />
          <Chip
            label="Add to drive"
            sx={Menu_style}
            icon={<AddToDriveIcon />}
            clickable
          />
          <Chip
            label="Add to drive"
            sx={Menu_style}
            icon={<FlashAutoIcon />}
            clickable
          />
          <Chip
            label="Add to drive"
            sx={Menu_style}
            icon={<FilterListIcon />}
            clickable
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<PersonAddAlt1Icon sx={{ color: "white" }} />}
            sx={{
              fontSize: "17px",
              color: "white",
              borderColor: " white ",
              "&:hover ": {
                borderColor: " white ",
              },
            }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={4}
            sx={{
              gap: "4px",
              "& .MuiAvatar-root": {
                width: "34px",
                height: "34px",
                fontSize: 13,
                border: "none",
                color: "white",
                cursor: "pointer",
                "&:first-of-type": { bgcolor: "a430de" },
              },
            }}
          >
            <Tooltip title="nho thien">
              <Avatar
                alt="nho thien"
                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/476501826_1758241198082238_4458126332730646866_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG6siqnvjgzU6hrc0RRXTRdtzsIk72Hue63OwiTvYe57osmU6CZhx345FfOSS02w0FP93rvUnRrwZpC49B2W79S&_nc_ohc=Sa3KN_huIq4Q7kNvwH5RV1w&_nc_oc=AdkVoDu6cmvtZ6Q38IW23p3PcsEGKptx773uSYW71qtMxcUiNH0dsvPtKgkeHksHK54ko6_M3MbJEB-zsYMmBmOR&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=V5137kq_-9McDFnBFZW1fw&oh=00_AfKkU7_EQCZ8aHfAMCL6xSVzbq4vYyT9CjdJmT-VYRPblA&oe=6830C0C7"
              />
            </Tooltip>
            <Tooltip title="dvid nguyen">
              <Avatar
                alt="dvid nguyen"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/476909489_1175634627599249_4349082577525396696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWGQkz0NHgLc-q1qJk5ihcKM5iqnzfwhsozmKqfN_CG-DzdjovC9zjzYt6E2_Ln06sA5GVZ2QjX0Hm3mKvtkHX&_nc_ohc=4kGKyzK-IJEQ7kNvwHhRuHS&_nc_oc=Adkw0qi6SS7f8bqu7fzNjTqPllrWbVicu1V3F0Z13V1Mh_20NnGTOYKxYemx-IxEVJpIpQ1pbVvBPTtQ-JNSH2Kv&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=LWvBUjCjBESzQjL2DyI7MA&oh=00_AfK-kl0D1q1fZAPHRnGEWOMu0GXokNTpbNMe8DY2cprF9g&oe=682FDD5B"
              />
            </Tooltip>
            <Tooltip title="dvid nguyen">
              <Avatar
                alt="dvid nguyen"
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/481308591_1191188809377164_1794767077090532074_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG78me3dQdnWMIYehcpkJacFZ_pOT3zc_4Vn-k5PfNz_vRC3DZDTild7kEqHiQ2v06FEqa1djFJKaj5hHAB3X6S&_nc_ohc=6PfKZctRvaUQ7kNvwGa57Gi&_nc_oc=AdlI43SKbv3FxiKuiOjVzdo0B15wYdTet6IF958EXSF42U6lisq7THfcV_5pNwOF4Fq6lYnXD8O4T-hlYt-ATrVm&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=fSl8hIY6_WjcMKGAUGJG_g&oh=00_AfLEEXa2OyC51tY8KBhlraOy7cRR4vF-TJV8-oygm5hdhw&oe=6830AE3C"
              />
            </Tooltip>
            <Tooltip title="dvid nguyen">
              <Avatar
                alt="dvid nguyen"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/476909489_1175634627599249_4349082577525396696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWGQkz0NHgLc-q1qJk5ihcKM5iqnzfwhsozmKqfN_CG-DzdjovC9zjzYt6E2_Ln06sA5GVZ2QjX0Hm3mKvtkHX&_nc_ohc=4kGKyzK-IJEQ7kNvwHhRuHS&_nc_oc=Adkw0qi6SS7f8bqu7fzNjTqPllrWbVicu1V3F0Z13V1Mh_20NnGTOYKxYemx-IxEVJpIpQ1pbVvBPTtQ-JNSH2Kv&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=LWvBUjCjBESzQjL2DyI7MA&oh=00_AfK-kl0D1q1fZAPHRnGEWOMu0GXokNTpbNMe8DY2cprF9g&oe=682FDD5B"
              />
            </Tooltip>
            <Tooltip title="dvid nguyen">
              <Avatar
                alt="dvid nguyen"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/476909489_1175634627599249_4349082577525396696_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWGQkz0NHgLc-q1qJk5ihcKM5iqnzfwhsozmKqfN_CG-DzdjovC9zjzYt6E2_Ln06sA5GVZ2QjX0Hm3mKvtkHX&_nc_ohc=4kGKyzK-IJEQ7kNvwHhRuHS&_nc_oc=Adkw0qi6SS7f8bqu7fzNjTqPllrWbVicu1V3F0Z13V1Mh_20NnGTOYKxYemx-IxEVJpIpQ1pbVvBPTtQ-JNSH2Kv&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=LWvBUjCjBESzQjL2DyI7MA&oh=00_AfK-kl0D1q1fZAPHRnGEWOMu0GXokNTpbNMe8DY2cprF9g&oe=682FDD5B"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
};

export default BroadBar;
