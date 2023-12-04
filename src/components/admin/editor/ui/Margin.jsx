"use client";

import { Grid, InputAdornment, InputBase, Typography } from "@mui/material";
import { useState } from "react";

const Margin = ({ setMargin }) => {
  const [marTop, setMarTop] = useState("0");
  const [marLeft, setMarLeft] = useState("0");
  const [marRight, setMarRight] = useState("0");
  const [marBottom, setMarBottom] = useState("0");

  const handleAllMargin = (top, left, bottom, right) => {
    setMarTop(top);
    setMarLeft(left);
    setMarBottom(bottom);
    setMarRight(right);
    setMargin([`${top}px`, `${left}px`, `${bottom}px`, `${right}px`]);
  };

  return (
    <>
      <Typography variant="body1" marginBottom={"8px"}>
        Margin
      </Typography>
      <Grid container columnGap={2}>
        <Grid item>
          <InputBase
            style={{
              borderRadius: "5px",
              height: "40px",
              border: "1px solid gray",
              padding: "5px",
              width: "65px",
            }}
            type="text"
            value={marTop}
            onChange={(e) =>
              handleAllMargin(e.target.value, marLeft, marBottom, marRight)
            }
            endAdornment={
              <InputAdornment style={{ padding: "4px" }}>px</InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <InputBase
            style={{
              borderRadius: "5px",
              height: "40px",
              border: "1px solid gray",
              padding: "5px",
              width: "65px",
            }}
            type="text"
            value={marLeft}
            onChange={(e) =>
              handleAllMargin(marTop, e.target.value, marBottom, marRight)
            }
            endAdornment={
              <InputAdornment style={{ padding: "4px" }}>px</InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <InputBase
            style={{
              borderRadius: "5px",
              height: "40px",
              border: "1px solid gray",
              padding: "5px",
              width: "65px",
            }}
            type="text"
            value={marBottom}
            onChange={(e) =>
              handleAllMargin(marTop, marLeft, e.target.value, marRight)
            }
            endAdornment={
              <InputAdornment style={{ padding: "4px" }}>px</InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          <InputBase
            style={{
              borderRadius: "5px",
              height: "40px",
              border: "1px solid gray",
              padding: "5px",
              width: "65px",
            }}
            type="text"
            value={marRight}
            onChange={(e) =>
              handleAllMargin(marTop, marLeft, marBottom, e.target.value)
            }
            endAdornment={
              <InputAdornment style={{ padding: "4px" }}>px</InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Margin;
