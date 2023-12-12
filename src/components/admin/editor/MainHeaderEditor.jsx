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
import { v4 as uuid } from "uuid";

import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MainMenu from "./ui/MainMenu";
import SubMenu from "./ui/SubMenu";
import SubMenuModal from "@/components/modals/SubMenuModal";
import { ModalContext } from "@/context/context";

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

  // Custom
  const [customLinkMenu, setCustomLinkMenu] = useState(false);
  const [customLinkText, setCustomLinkText] = useState("");
  const [customLink, setCustomLink] = useState("");

  const { onOpen } = useContext(ModalContext);

  const handleAddMenu = (menu) => {
    setMenuData([...menuData, menu]);
  };

  const handleRemoveMenu = (id) => {
    setMenuData(menuData?.filter((el) => el?.id !== id));
  };

  const handleAddSubMenu = (subMenu) => {};

  return (
    <Box>
      <SubMenuModal
        handleSubMenu={(val, menuIndex) => handleAddSubMenu(val, menuIndex)}
      />
      <Typography variant="h4">Main Menu</Typography>
      <Grid container columnGap={2} marginTop="50px">
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
                            edge="start"
                            value={el}
                            onChange={(e) =>
                              e.target.checked
                                ? handleAddMenu({
                                    ...el,
                                    type: 0,
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
                  variant="contained"
                  size="small"
                  onClick={() =>
                    handleAddMenu({
                      id: uuid(),
                      name: customLinkText,
                      type: 1,
                      link: customLink,
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
              <Typography variant="h5">Main Menu</Typography>
              <Button variant="contained">Add Menu</Button>
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
                      url={
                        el?.type === 0 && el?.endpoint
                          ? "http://localhost:3000/" + el?.endpoint
                          : el?.type === 1 && el?.link
                          ? el?.link
                          : "http://localhost:3000/"
                      }
                    />
                    <IconButton
                      onClick={() =>
                        onOpen(
                          {
                            allPages,
                            menuIndex: index,
                          },
                          "subMenu"
                        )
                      }
                    >
                      <AddBoxIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    {el?.submenus?.length > 0 ? (
                      el?.submenus?.map((submenu) => {
                        return (
                          <MainMenu
                            name={submenu?.name}
                            type={submenu?.type}
                            url={
                              submenu?.type === 0 && submenu?.endpoint
                                ? "http://localhost:3000/" + submenu?.endpoint
                                : submenu?.type === 1 && submenu?.link
                                ? submenu?.link
                                : "http://localhost:3000/"
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
