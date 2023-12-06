"use client";

import { Box, IconButton, Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Row = ({ children }) => {
  return (
    <>
      <Box padding={"5px"}>
        <Box></Box>
        {children}
      </Box>
    </>
  );
};

const Col = () => {
  return (
    <>
      <Box
        padding={"15px"}
        backgroundColor={"white"}
        border={"1px solid grey"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"7px"}
      >
        <IconButton>
          <AddBoxIcon sx={{ fontSize: "40px", color: "#9f9f9f" }} />
        </IconButton>
      </Box>
    </>
  );
};

const SectionEditor = () => {
  return (
    <>
      <Box padding={"10px"} backgroundColor={"#cfcfcf"} borderRadius={"7px"}>
        <Row>
          <Grid container justifyContent={"space-evenly"}>
            <Grid item width={"19%"}>
              <Col />
            </Grid>
            <Grid item width={"77%"}>
              <Col />
            </Grid>
          </Grid>
        </Row>
      </Box>
    </>
  );
};

export default SectionEditor;
