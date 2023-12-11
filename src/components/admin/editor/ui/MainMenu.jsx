"use client";
import {
  Box,
  Collapse,
  Grid,
  InputLabel,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import SubMenu from "./SubMenu";

const MainMenu = ({ name, url, type }) => {
  const [mainMenu, setMainMenu] = useState(false);
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState(name);

  useEffect(() => {
    if (url) {
      setLink(url);
    }
  }, [url]);

  return (
    <Box width='50%'>
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
              size='small'
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
          </>
        )}
        <Box paddingBottom={"10px"}>
          <InputLabel>Link</InputLabel>
          <TextField value={link} onChange={(e) => setLink(e.target.value)} />
        </Box>
        <Divider />
        <Box paddingTop={"10px"}>
          <Button variant='filled'>Delete</Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MainMenu;
