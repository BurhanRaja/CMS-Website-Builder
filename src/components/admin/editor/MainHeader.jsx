"use client";

import { Box, Collapse, Grid, InputLabel, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const MainHeader = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [pageSubMenu, setPageSubmenu] = useState(false);
  const [customLinkMenu, setCustomLinkMenu] = useState(false);

  return (
    <>
      <Box>
        <header className="header" style={{ paddingTop: "50px" }}>
          <section
            className="container-fluid"
            style={{ marginRight: "0", width: "95%" }}
          >
            <div className="wrapper">
              {" "}
              <a href="#" className="brand">
                <img
                  src="https://techysquad.com/wp-content/uploads/2022/10/logotechy-1.png"
                  alt=""
                />
              </a>
              <button type="button" className="burger" id="burger">
                {" "}
                <span className="burger-line"></span>{" "}
                <span className="burger-line"></span>{" "}
                <span className="burger-line"></span>{" "}
                <span className="burger-line"></span>{" "}
              </button>
              <span className="overlay" id="overlay"></span>
              <nav className="navbar" id="navbar">
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">About</a>
                  </li>
                  <li className="menu-item menu-item-child">
                    {" "}
                    <a href="#" data-toggle="sub-menu">
                      Services <i className="expand"></i>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="#">Web Development Agency</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Branding</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Wordpress Development</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">SEO Services</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Social Media Management</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-child">
                    {" "}
                    <a href="#" data-toggle="sub-menu">
                      Forex Solutions <i className="expand"></i>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="#">Basic</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Standard</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Premium</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Professional</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="#">Products</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      </Box>

      <Grid container columnGap={2} marginTop="200px">
        <Grid item xs={3}>
          <Box
            sx={{
              padding: "5px",
            }}
          >
            <ListItemButton
              onClick={() => setPageSubmenu(!pageSubMenu)}
              sx={{
                backgroundColor: "#eeeeee",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              <ListItemText primary={"Page"} />
              {pageSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={pageSubMenu}
              sx={{
                border: "1px solid #cfcfcf",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxHeight: "400px",
                  overflow: "hidden",
                  overflowY: "scroll",
                  bgcolor: "background.paper",
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;
                  return (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <CommentIcon />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Line item ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
            <ListItemButton
              onClick={() => setCustomLinkMenu(!customLinkMenu)}
              sx={{
                backgroundColor: "#eeeeee",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              <ListItemText primary={"Custom Link"} />
              {customLinkMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={customLinkMenu}
              sx={{
                border: "1px solid #cfcfcf",
                padding: "10px",
              }}
            >
              <InputLabel>Link</InputLabel>
              <TextField size="small" />
            </Collapse>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box border={"1px solid #eeeeee"} borderRadius={"6px"}>
            <Typography
              backgroundColor={"#f2f2f2"}
              marginBottom={"10px"}
              variant="h5"
              padding={"15px"}
            >
              Main Menu
            </Typography>

            <Box sx={{ width: "40%", padding: "15px" }}>
              <ListItemButton
                onClick={() => setCustomLinkMenu(!customLinkMenu)}
                sx={{
                  backgroundColor: "#eeeeee",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              >
                <ListItemText primary={"Custom Link"} />
                {customLinkMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={customLinkMenu}
                sx={{
                  border: "1px solid #cfcfcf",
                  padding: customLinkMenu ? "10px" : "0px",
                }}
              >
                <InputLabel>Link</InputLabel>
                <TextField size="small" />
              </Collapse>
              <ListItemButton
                onClick={() => setCustomLinkMenu(!customLinkMenu)}
                sx={{
                  backgroundColor: "#eeeeee",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  marginLeft: "20px",
                }}
              >
                <ListItemText primary={"Custom Link"} />
                {customLinkMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={customLinkMenu}
                sx={{
                  border: "1px solid #cfcfcf",
                  padding: "10px",
                  marginLeft: "20px",
                }}
              >
                <InputLabel>Link</InputLabel>
                <TextField size="small" />
              </Collapse>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MainHeader;
