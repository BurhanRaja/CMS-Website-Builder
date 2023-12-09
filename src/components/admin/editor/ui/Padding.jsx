"use client";

import { Grid, InputAdornment, InputBase, Typography } from "@mui/material";
import { useState } from "react";

const Padding = ({ padding, setPadding }) => {
  const [padTop, setPadTop] = useState(padding?.length ? padding[0] : "0");
  const [padLeft, setPadLeft] = useState(padding?.length ? padding[1] : "0");
  const [padBottom, setPadBottom] = useState(
    padding?.length ? padding[2] : "0"
  );
  const [padRight, setPadRight] = useState(padding?.length ? padding[3] : "0");

  const handleAllPadding = (top, left, bottom, right) => {
    setPadTop(top);
    setPadLeft(left);
    setPadBottom(bottom);
    setPadRight(right);
    setPadding(`${top}px ${left}px ${bottom}px ${right}px`);
  };

  return (
    <>
      <Typography variant="body1" marginBottom={"3px"} color={"black"}>
        Padding
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
              backgroundColor: "white",
            }}
            type="text"
            value={padTop}
            onChange={(e) =>
              handleAllPadding(e.target.value, padLeft, padBottom, padRight)
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
              backgroundColor: "white",
            }}
            type="text"
            value={padLeft}
            onChange={(e) =>
              handleAllPadding(padTop, e.target.value, padBottom, padRight)
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
              backgroundColor: "white",
            }}
            type="text"
            value={padBottom}
            onChange={(e) =>
              handleAllPadding(padTop, padLeft, e.target.value, padRight)
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
              backgroundColor: "white",
            }}
            type="text"
            value={padRight}
            onChange={(e) =>
              handleAllPadding(padTop, padLeft, padBottom, e.target.value)
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

export default Padding;
