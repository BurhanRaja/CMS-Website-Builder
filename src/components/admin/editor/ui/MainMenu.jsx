"use client";
import { Box, Collapse, Grid, InputLabel, TextField } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import SubMenu from "./SubMenu";

const MainMenu = ({ name, endpoint, type }) => {
  const [mainMenu, setMainMenu] = useState(false);
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState(name);

  useEffect(() => {
    if (endpoint) {
      setLink("http://localhost:3000" + endpoint);
    }
  }, [endpoint]);

  return (
    <>
      <ListItemButton
        onClick={() => setMainMenu(!mainMenu)}
        sx={{
          backgroundColor: "#eeeeee",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <ListItemText primary={type === 1 ? "Custom Link" : name} />
        {mainMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={mainMenu}
        sx={{
          border: "1px solid #cfcfcf",
          padding: mainMenu ? "10px" : "0px",
        }}
      >
        {type === 1 && (
          <>
            <InputLabel>Link Text</InputLabel>
            <TextField
              size="small"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
          </>
        )}
        <InputLabel>Link</InputLabel>
        <TextField
          size="small"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <SubMenu />
      </Collapse>
    </>
  );
};

export default MainMenu;
