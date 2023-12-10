"use client";

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerHeader } from "./Header";
import Image from "next/image";
import { Collapse, Grid } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

function SubMenu({ mainTitle, subMenus }) {
  const [subMenu, setSubmenu] = useState(false);

  const handleClick = () => {
    setSubmenu(!subMenu);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={mainTitle} />
        {subMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={subMenu} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: "#efefef" }}
        >
          {subMenus?.map((el) => {
            return (
              <Link
                href={el?.link}
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={el.name} />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

function Sidebar({ drawerWidth, open, setOpen }) {
  const theme = useTheme();

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "black",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Image src={"/logo.png"} alt="Mainlogo" width={160} height={40} />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => setOpen(false)}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </DrawerHeader>
      <Divider />
      <List>
        <SubMenu
          mainTitle={"Defaults"}
          subMenus={[
            {
              name: "Main Header",
              icon: "",
              link: "/admin/default/mainheader",
            },
            {
              name: "Main Footer",
              icon: "",
              link: "/admin/default/mainfooter",
            },
          ]}
        />
        <SubMenu
          mainTitle={"Pages"}
          subMenus={[
            {
              name: "All Pages",
              icon: "",
              link: `/admin/pages/all`,
            },
            {
              name: "Add Page",
              icon: "",
              link: "/admin/pages/add",
            },
          ]}
        />
        {["All mail"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
