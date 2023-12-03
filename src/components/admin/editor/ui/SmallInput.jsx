"use client";

import {
  styled,
  InputBase as MuiBaseInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const SmallInput = ({ style, labelName, adormentText, ...props }) => {
  const InputBase = styled(MuiBaseInput)(() => ({
    ...style,
    borderRadius: "5px",
    height: "40px",
  }));

  const [inp, setInp] = useState(false);

  console.log(inp);

  return (
    <>
      <InputLabel>{labelName}</InputLabel>
      <InputBase
        {...props}
        endAdornment={
          <InputAdornment style={{ padding: "4px" }}>
            {adormentText}
          </InputAdornment>
        }
      />
    </>
  );
};

export default SmallInput;
