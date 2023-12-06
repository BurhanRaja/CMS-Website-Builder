"use client";

import {
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const FlexDirection = ({ direction, setDirection }) => {
  return (
    <>
      <Typography variant="body1" marginBottom={"10px"}>
        Flex Direction
      </Typography>
      <Select
        size="small"
        defaultValue={"row"}
        sx={{
          padding: "3px",
          width: "80%",
          color: "black",
        }}
      >
        <MenuItem value={"row"}>Row</MenuItem>
        <MenuItem value={"row-reverse"}>Row Reverse</MenuItem>
        <MenuItem value={"column"}>Column</MenuItem>
        <MenuItem value={"column-reverse"}>Column Reverse</MenuItem>
      </Select>
    </>
  );
};

export default FlexDirection;
