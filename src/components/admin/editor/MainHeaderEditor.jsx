"use client";

import {
  Box,
  Button,
  IconButton,
  Collapse,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import AddBoxIcon from "@mui/icons-material/AddBox";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MainMenu from "./ui/MainMenu";
import SubMenu from "./ui/SubMenu";

const MainHeader = ({ allPages, allMenus }) => {
  // {
  //   id: "",
  //   menuname: "Home",
  //   link: "http://localhost:3000",
  //   customLink: true,
  //   submenus: [
  // {
  //   id: "",
  //   menuname: "About",
  //   link: "http://localhost:3000",
  //   customLink: false,
  // }
  //   ]
  // }

  const [menuData, setMenuData] = useState([]);
  const [pageSubMenu, setPageSubmenu] = useState(false);
  const [customLinkMenu, setCustomLinkMenu] = useState(false);

  const handleAddMenu = (menu) => {
    setMenuData([...menuData, menu]);
  };

  const handleRemoveMenu = (id) => {
    setMenuData(menuData?.filter((el) => el?.id !== id));
  };

  const handleAddSubMenu = (subMenu) => {};

  return (
    <Box>
      <Typography variant='h4'>Main Menu</Typography>
      <Grid container columnGap={2} marginTop='50px'>
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
                {allPages?.data?.map((el) => {
                  const labelId = `checkbox-list-label-${el?.unique}`;
                  return (
                    <ListItem key={el?.unique} disablePadding>
                      <ListItemButton role={undefined} onClick={() => {}} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            value={el}
                            onChange={(e) =>
                              e.target.checked
                                ? handleAddMenu(el)
                                : handleRemoveMenu(el?.id)
                            }
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={el?.name} />
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
              <Box marginBottom={"10px"}>
                <InputLabel>Link Text</InputLabel>
                <TextField />
              </Box>
              <Box marginBottom={"10px"}>
                <InputLabel>Link</InputLabel>
                <TextField />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                padding={"7px"}
                borderTop={"0.5px solid #d2d2d2"}
              >
                <Button variant='contained' size='small'>
                  Add to Menu
                </Button>
              </Box>
            </Collapse>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            border={"1px solid #eeeeee"}
            borderRadius={"6px"}
            minHeight={"600px"}
          >
            <Typography
              backgroundColor={"#f2f2f2"}
              marginBottom={"10px"}
              variant='h5'
              padding={"15px"}
            >
              Main Menu
            </Typography>

            <Box sx={{ padding: "15px" }}>
              {menuData?.map((el) => {
                return (
                  <Box
                    key={el?.id}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                    marginBottom={"30px"}
                  >
                    <MainMenu
                      name={el?.name}
                      type={0}
                      url={"http://localhost:3000/" + el?.endpoint}
                    />
                    <IconButton>
                      <AddBoxIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    {el?.submenus?.length > 0 ? (
                      el?.submenus?.map((submenu) => {
                        return (
                          <SubMenu
                            name={submenu?.name}
                            url={
                              type === 0
                                ? "http://localhost:3000/" + submenu?.endpoint
                                : submenu?.endpoint
                            }
                          />
                        );
                      })
                    ) : (
                      <>
                        <Box width={"40%"}></Box>
                      </>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainHeader;
