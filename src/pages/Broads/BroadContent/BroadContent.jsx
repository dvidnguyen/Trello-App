import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteIcon from "@mui/icons-material/Delete";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import AttachFileIcon from "@mui/icons-material/AttachFile";
const BroadContent = () => {
  const HEIGHT_HEADER_COLUMN = "50px";
  const HEIGHT_FOOTER_COLUMN = "56px";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Box
          sx={{
            bgcolor: "inherit",
            display: "flex",
            width: "100%",
            height: "100%",
            overflowY: "hidden",
            overflowX: "auto",
            "&::-webkit-scrollbar-thumb-track": { m: 2 },
          }}
        >
          {/* box comlum 1 */}
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              ml: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.broadContentHeight} - ${theme.spacing(
                  5
                )})`,
            }}
          >
            {/* Box header  */}
            <Box
              sx={{
                height: HEIGHT_HEADER_COLUMN,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1.2rem !important",
                }}
              >
                Column title
              </Typography>

              <Box>
                <KeyboardArrowDownIcon
                  sx={{ color: "text.primary", cursor: "pointer" }}
                  id="column-dropdown"
                  aria-controls={open ? "menu-wp" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="column-dropdown"
                  MenuListProps={{
                    "aria-labelledby": "menu-workspace",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuList sx={{ width: 240, maxWidth: "100%" }}>
                    <MenuItem>
                      <ListItemIcon>
                        <AddCardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Add new card</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCut fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Cut</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCopy fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Copy</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentPaste fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Paste</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Cloud fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            {/* Box list card */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "0 5px",
                m: "0 5px",
                gap: 1.1,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc(${theme.trello.broadContentHeight} 
                    - ${theme.spacing(5)}
                    - ${HEIGHT_HEADER_COLUMN}
                    - ${HEIGHT_FOOTER_COLUMN}
              )`,
                "::-webkit-scrollbar-thumb ": {
                  backgroundColor: "#ced0da",
                },
                "::-webkit-scrollbar-thumb:hover ": {
                  backgroundColor: "#bfcfdf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140, borderRadius: "2px" }}
                  image="https://i.pinimg.com/736x/a3/51/30/a35130edc8113b0b747ed58f84fa3f8c.jpg  "
                />
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography sx={{ fontSize: "1.4rem" }}>
                    Dvid nguyen
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: "0 4px 8px 4px" }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<SpeakerNotesIcon />}>
                    1
                  </Button>
                  <Button size="small" startIcon={<AttachFileIcon />}>
                    01
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
            </Box>
            {/* Box footer */}
            <Box
              sx={{
                height: HEIGHT_FOOTER_COLUMN,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Button
                startIcon={
                  <AddCardIcon sx={{ display: "flex", alignItems: "center" }} />
                }
              >
                Add new card
              </Button>
              <DragHandleIcon sx={{ cursor: "pointer", marginRight: "5px" }} />
            </Box>
          </Box>
          {/* box comlum 2 */}
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              ml: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.broadContentHeight} - ${theme.spacing(
                  5
                )})`,
            }}
          >
            {/* Box header  */}
            <Box
              sx={{
                height: HEIGHT_HEADER_COLUMN,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1.2rem !important",
                }}
              >
                Column title
              </Typography>

              <Box>
                <KeyboardArrowDownIcon
                  sx={{ color: "text.primary", cursor: "pointer" }}
                  id="column-dropdown"
                  aria-controls={open ? "menu-wp" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="column-dropdown"
                  MenuListProps={{
                    "aria-labelledby": "menu-workspace",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuList sx={{ width: 240, maxWidth: "100%" }}>
                    <MenuItem>
                      <ListItemIcon>
                        <AddCardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Add new card</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCut fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Cut</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCopy fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Copy</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentPaste fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Paste</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Delete Clipboard</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Cloud fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            {/* Box list card */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "0 5px",
                m: "0 5px",
                gap: 1.1,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc(${theme.trello.broadContentHeight} 
                    - ${theme.spacing(5)}
                    - ${HEIGHT_HEADER_COLUMN}
                    - ${HEIGHT_FOOTER_COLUMN}
              )`,
                "::-webkit-scrollbar-thumb ": {
                  backgroundColor: "#ced0da",
                },
                "::-webkit-scrollbar-thumb:hover ": {
                  backgroundColor: "#bfcfdf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140, borderRadius: "2px" }}
                  image="https://i.pinimg.com/736x/9d/a9/61/9da9612209412b1187697ae232fee473.jpg"
                />
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography sx={{ fontSize: "1.4rem" }}>
                    Dvid nguyen
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: "0 4px 8px 4px" }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<SpeakerNotesIcon />}>
                    1
                  </Button>
                  <Button size="small" startIcon={<AttachFileIcon />}>
                    01
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 02</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
                  <Typography>Card 02</Typography>
                </CardContent>
              </Card>
            </Box>
            {/* Box footer */}
            <Box
              sx={{
                height: HEIGHT_FOOTER_COLUMN,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Button
                startIcon={
                  <AddCardIcon sx={{ display: "flex", alignItems: "center" }} />
                }
              >
                Add new card
              </Button>
              <DragHandleIcon sx={{ cursor: "pointer", marginRight: "5px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BroadContent;
