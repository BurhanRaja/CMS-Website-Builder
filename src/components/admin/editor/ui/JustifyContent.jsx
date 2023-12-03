"use client";

import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

const JustifyContent = ({ name, setName }) => {
  return (
    <Grid
      container
      maxWidth={"100%"}
      xs={6}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginBottom={"20px"}
    >
      <Grid item>
        <Typography variant="body1" marginBottom={"10px"}>
          Justify Content
        </Typography>
      </Grid>
      <Grid item>
        <Grid container border={"1px solid grey"} borderRadius={"5px"}>
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
              <AlignHorizontalLeftIcon />
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
              <AlignHorizontalCenterIcon />
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
              <AlignHorizontalRightIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JustifyContent;
