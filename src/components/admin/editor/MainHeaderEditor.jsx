"use client";

import {
  Box,
  Button,
  IconButton,
  Collapse,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { v4 as uuid } from "uuid";

import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { ExpandLess, ExpandMore, LinkOffOutlined } from "@mui/icons-material";
import MainMenu from "./ui/MainMenu";
import SubMenuModal from "@/components/modals/SubMenuModal";
import { ModalContext } from "@/context/context";

const MainHeader = ({ allPages, allMenus }) => {
  // {
  //   id: "",
  //   menuname: "Home",
  //   link: "http://localhost:3000",
  //   type: 0,
  //   submenus: [
  // {
  //   id: "",
  //   menuname: "About",
  //   link: "http://localhost:3000",
  //   type: 1,
  // }
  //   ]
  // }

  const [menuData, setMenuData] = useState([]);
  const [pageSubMenu, setPageSubmenu] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [allMenuNames, setAllMenuNames] = useState([]);
  const [selectedMenuName, setSelectedMenuName] = useState("");

  // Custom
  const [customLinkMenu, setCustomLinkMenu] = useState(false);
  const [customLinkText, setCustomLinkText] = useState("");
  const [customLink, setCustomLink] = useState("");

  const { onOpen } = useContext(ModalContext);

  const handleAllMenuNames = async () => {
    const allMenuNameRes = await fetch(
      "http://localhost:8000/api/admin/menunames/all",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const allMenuNames = await allMenuNameRes.json();
    console.log(allMenuNames);
    if (allMenuNames?.success) {
      setAllMenuNames(allMenuNames?.data);
    }
  };

  useEffect(() => {
    handleAllMenuNames();
  }, []);

  const handleSelectMenuName = async () => {
    const response = await fetch(
      `http://localhost:8000/api/admin/menus/all/${selectedMenuName}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    if (data?.success) {
      setMenuName(data?.menuName);
      setMenuData(data?.data);
    }
  };

  const handleAddMenu = (menu) => {
    setMenuData([...menuData, menu]);
    setCustomLink("");
    setCustomLinkText("");
  };

  const handleRemoveMenu = (id) => {
    setMenuData(menuData?.filter((el) => el?.id !== id));
  };

  const handleSubMenuRemove = (menuIndex, subMenuId) => {
    menuData[menuIndex].subMenus = menuData[menuIndex].subMenus?.filter(
      (el) => el?.id !== subMenuId
    );
    setMenuData([...menuData]);
  };

  const handleAddSubMenu = (subMenus, menuIndex) => {
    menuData[menuIndex].subMenus = subMenus;
    setMenuData(
      menuData?.map((el, index) =>
        index === menuIndex ? { ...el, subMenus } : el
      )
    );
  };

  const handleUpdateMenuData = (name, link, index) => {
    menuData[index].name = name;
    menuData[index].link = link;
    setMenuData([...menuData]);
  };

  const handleUpdateSubMenu = (name, link, index, subIndex) => {
    menuData[index].subMenus[subIndex].name = name;
    menuData[index].subMenus[subIndex].link = link;
    setMenuData([...menuData]);
  };

  const handleAddSubmit = async () => {
    let data = {
      name: menuName,
      menus: menuData,
    };
    const response = await fetch("http://localhost:8000/api/admin/menus/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    console.log(res);
  };

  const handleUpdateSubmit = async () => {
    let data = {
      name: menuName,
      menus: menuData,
    };
    const response = await fetch(
      `http://localhost:8000/api/admin/menus/edit/${selectedMenuName}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    let res = await response.json();
    console.log(res);
  };

  return (
    <Box>
      <SubMenuModal
        handleSubMenu={(val, menuIndex) => handleAddSubMenu(val, menuIndex)}
      />
      <Typography variant='h4'>All Menus</Typography>
      <Box
        paddingTop={"15px"}
        paddingBottom={"15px"}
        display='flex'
        justifyContent={"start"}
        alignItems={"end"}
      >
        <Box width={"40%"} marginRight={"10px"}>
          <InputLabel>Menu Name</InputLabel>
          <Select
            value={selectedMenuName}
            onChange={(e) => setSelectedMenuName(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size='small'
            sx={{ width: "100%" }}
          >
            {allMenuNames?.map((el) => {
              return (
                <MenuItem key={el?.id} value={el?.id}>
                  {el?.name}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
        <Button variant='contained' onClick={() => handleSelectMenuName()}>
          Select
        </Button>
      </Box>
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
                                ? handleAddMenu({
                                    name: el?.name,
                                    link: el?.endpoint
                                      ? "http://localhost:3000/" + el?.endpoint
                                      : "http://localhost:3000/",
                                    type: 0,
                                    subMenus: [],
                                  })
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
                <TextField
                  value={customLinkText}
                  onChange={(e) => setCustomLinkText(e.target.value)}
                />
              </Box>
              <Box marginBottom={"10px"}>
                <InputLabel>Link</InputLabel>
                <TextField
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                padding={"7px"}
                borderTop={"0.5px solid #d2d2d2"}
              >
                <Button
                  variant='contained'
                  size='small'
                  onClick={() =>
                    handleAddMenu({
                      id: uuid(),
                      name: customLinkText,
                      type: 1,
                      link: customLink,
                      subMenus: [],
                    })
                  }
                >
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
            <Box
              backgroundColor={"#f2f2f2"}
              marginBottom={"10px"}
              padding={"15px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant='h5'>Menus</Typography>
              {selectedMenuName ? (
                <Button
                  variant='contained'
                  onClick={() => handleUpdateSubmit()}
                >
                  Update Menu
                </Button>
              ) : (
                <Button variant='contained' onClick={() => handleAddSubmit()}>
                  Save Menu
                </Button>
              )}
            </Box>
            <Box padding={"20px"}>
              <InputLabel>Menu Name</InputLabel>
              <TextField
                fullWidth
                padding={"5px"}
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
              />
            </Box>
            <Box sx={{ padding: "15px" }}>
              {menuData?.map((el, index) => {
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
                      type={el?.type}
                      url={el?.link}
                      removeMenu={() => handleRemoveMenu(el?.id)}
                      sendUpdate={(name, link) =>
                        handleUpdateMenuData(name, link, index)
                      }
                    />
                    <IconButton
                      onClick={() =>
                        onOpen(
                          {
                            allPages,
                            menuIndex: index,
                            name: el?.name,
                            currSubMenuData: menuData[index].subMenus,
                          },
                          "subMenu"
                        )
                      }
                    >
                      <AddBoxIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    <Box width={"40%"}>
                      {el?.subMenus?.length > 0 ? (
                        el?.subMenus?.map((submenu, subIndex) => {
                          return (
                            <MainMenu
                              width={"100%"}
                              name={submenu?.name}
                              type={submenu?.type}
                              url={
                                submenu?.type === 0 && submenu?.endpoint
                                  ? "http://localhost:3000/" + submenu?.endpoint
                                  : submenu?.type === 1 && submenu?.link
                                  ? submenu?.link
                                  : "http://localhost:3000/"
                              }
                              removeMenu={() =>
                                handleSubMenuRemove(index, submenu?.id)
                              }
                              sendUpdate={(name, link) =>
                                handleUpdateSubMenu(name, link, index, subIndex)
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
