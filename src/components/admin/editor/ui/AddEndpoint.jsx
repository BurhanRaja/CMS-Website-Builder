"use client";
import { Box, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AddEndpoint = ({ endpoint, setEndpoint }) => {
  const [oneEndPoint, setOneEndPoint] = useState("");
  const [twoEndPoint, setTwoEndPoint] = useState("");
  const [threeEndPoint, setThreeEndPoint] = useState("");

  useEffect(() => {
    if (endpoint) {
      setOneEndPoint(endpoint[0]);
      setTwoEndPoint(endpoint[1]);
      setThreeEndPoint(endpoint[2]);
    }
  }, [endpoint]);

  const handleEndpoint = (one, two, three) => {
    if (one) {
      setOneEndPoint(one);
    } else if (one && two) {
      setOneEndPoint(one + "/" + two);
    } else if (one && two && three) {
      setEndpoint(one + "/" + two + "/" + three);
    } else {
      setEndpoint("/");
    }
    setOneEndPoint(one);
    setTwoEndPoint(two);
    setThreeEndPoint(three);
  };

  return (
    <>
      <Typography marginBottom={"5px"}>Add Endpoint</Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"60%"}
      >
        <TextField
          size="medium"
          sx={{
            "& input": {
              padding: "20px",
            },
          }}
          value={oneEndPoint}
          onChange={(e) =>
            handleEndpoint(e.target.value, twoEndPoint, threeEndPoint)
          }
        />
        <Typography variant="h5">/</Typography>
        <TextField
          sx={{
            "& input": {
              padding: "20px",
            },
          }}
          size="medium"
          value={twoEndPoint}
          onChange={(e) =>
            handleEndpoint(oneEndPoint, e.target.value, threeEndPoint)
          }
        />
        <Typography variant="h5">/</Typography>
        <TextField
          sx={{
            "& input": {
              padding: "20px",
            },
          }}
          size="medium"
          value={threeEndPoint}
          onChange={(e) =>
            handleEndpoint(oneEndPoint, twoEndPoint, e.target.value)
          }
        />
      </Box>
    </>
  );
};

export default AddEndpoint;
