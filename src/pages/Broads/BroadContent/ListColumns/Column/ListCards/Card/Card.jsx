import AttachFileIcon from "@mui/icons-material/AttachFile";
import GroupIcon from "@mui/icons-material/Group";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Card as MuiCard} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
const Card = () => {
  return <>
     <MuiCard
          sx={{
            cursor: "pointer",
            boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
            overflow: "unset",
          }}
        >
          <CardMedia
            sx={{ height: 140, borderRadius: "2px" }}
            image="https://i.pinimg.com/736x/47/38/62/47386278184ccd2db4628e4c7bc93bb6.jpg"
          />
          <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
            <Typography sx={{ fontSize: "1.4rem" }}>Dvid nguyen</Typography>
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
        </MuiCard>
     <MuiCard
          sx={{
            cursor: "pointer",
            boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
            overflow: "unset",
          }}
        >
          <CardMedia
            sx={{ height: 140, borderRadius: "2px" }}
            image="https://i.pinimg.com/736x/47/38/62/47386278184ccd2db4628e4c7bc93bb6.jpg"
          />
          <CardContent sx={{ p: 1.3, "&:last-child": { p: 1.3 } }}>
            <Typography sx={{ fontSize: "1.4rem" }}>Dvid nguyen</Typography>
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
        </MuiCard>
  </>;
};

export default Card;
