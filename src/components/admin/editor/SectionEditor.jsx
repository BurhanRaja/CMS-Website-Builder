"use client";

import { Box, IconButton, Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";

const Row = ({ children }) => {
  return (
    <>
      <Box padding={"5px"} position={"relative"}>
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
  const [rows, setRows] = useState([]);

  //   update col - setRows({...rows, cols: cols.map((el) => el.id == id { content = "Update" } return el )})
  // Swap col - setRows({...rows, cols: })

  let rowsProps = {
    id: "uuid",
    count: 1,
    cols: [
      {
        content: "",
        id: "uuid",
        count: 1,
        width: "",
      },
    ],
  };

  return (
    <>
      <Box padding={"10px"} backgroundColor={"#cfcfcf"} borderRadius={"7px"}>
        <Row>
          <Box>{/* Dropdown */}</Box>
          <Grid container justifyContent={"space-evenly"}>
            <Grid item width={"19%"}>
              <Col />
            </Grid>
            <Grid item width={"77%"}>
              <Col />
            </Grid>
          </Grid>
        </Row>
        {/* Button to Add a new row */}
      </Box>
    </>
  );
};

export default SectionEditor;
