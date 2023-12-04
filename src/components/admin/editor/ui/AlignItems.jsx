"use client";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AlignVerticalTopIcon from "@mui/icons-material/AlignVerticalTop";

const AlignItems = ({ name, setName }) => {
  return (
    <>
      <Typography variant="body1" marginBottom={"10px"}>
        Align Items
      </Typography>
      <Grid container borderRadius={"5px"}>
        <Tooltip title="Start">
          <IconButton
            onClick={() => setName("start")}
            sx={{
              border: "1px solid grey",
              borderRadius: "0px",
              backgroundColor: name === "start" ? "black" : "white",
              color: name === "start" ? "white" : "black",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            <AlignVerticalTopIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Center">
          <IconButton
            onClick={() => setName("center")}
            sx={{
              border: "1px solid grey",
              borderRadius: "0px",
              backgroundColor: name === "center" ? "black" : "white",
              color: name === "center" ? "white" : "black",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            <AlignVerticalCenterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="End">
          <IconButton
            onClick={() => setName("end")}
            sx={{
              border: "1px solid grey",
              borderRadius: "0px",
              backgroundColor: name === "end" ? "black" : "white",
              color: name === "end" ? "white" : "black",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            <AlignVerticalBottomIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );
};

export default AlignItems;
