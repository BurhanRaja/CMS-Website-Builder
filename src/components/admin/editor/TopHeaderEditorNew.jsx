"use client";
import { InputLabel, TextField, Box } from "@mui/material";
import { useState } from "react";
import parse from "html-react-parser";

const TopHeaderEditorNew = () => {
  const [topHeaderHTML, setTopHeaderHTML] = useState("");

  return (
    <>
      <Box height={"500px"} padding='20px' backgroundColor='white'>
        {/* <div dangerouslySetInnerHTML={{ __html: topHeaderHTML }}></div> */}
        {parse(topHeaderHTML)}
        <Box marginTop='40px'>
          <InputLabel>Write your HTML</InputLabel>
          <TextField
            sx={{
              width: "100%",
            }}
            hiddenLabel
            id='top-header-html'
            multiline
            rows={10}
            value={topHeaderHTML}
            onChange={(e) => setTopHeaderHTML(e.target.value)}
          />
        </Box>
      </Box>
    </>
  );
};

export default TopHeaderEditorNew;
