'use client'

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiRadioCircle } from "react-icons/bi";
import ResponsiveAppBar from "./Navbar";
import HomePage from "@/app/pages/home/page";
import About from "@/app/pages/about/page";
import Analytics from "@/app/pages/analytics/page";
import Career from "@/app/pages/career/page";
import Blog from "@/app/pages/blog/page";
import Help from "@/app/pages/help/page";
import History from "@/app/pages/history/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Home from "@/app/dashboard/page";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // overflowX: "hidden",
  // backgroundColor: "#13293D", 
  // color:"white",
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

const AppBar = styled (MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const sidebarChanges = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={false} elevation={8}>
        <ResponsiveAppBar sidebarChanges={sidebarChanges} open={open} />
      </AppBar>
      <Drawer variant="permanent" open={open}>
    <List>
          {[
            { text: "HomePage", path: "/" },
            { text: "About", path: "/pages/about" },
            { text: "Blog", path: "/pages/blog" },
            { text: "Career", path: "/pages/career" },
            { text: "Analytics", path: "/pages/analytics" },
            { text: "History", path: "/pages/history" },
            { text: "Help", path: "/pages/help" },
          ].map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                color: "white",
              }}
            >
              {/* Wrap the ListItemButton with Link */}
              <Link href={item.path} passHref>
                <ListItemButton
                  component="a" // Set ListItemButton as a link
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    outline: "none",
                    borderBottom:'none',
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  className={router.pathname === item.path ? "active" : ""}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <BiRadioCircle />
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {router.pathname === "/" && <HomePage />}
        {router.pathname === "/pages/about" && <About />}
        {router.pathname === "/pages/blog" && <Blog />}
        {router.pathname === "/pages/career" && <Career />}
        {router.pathname === "/pages/analytics" && <Analytics />}
        {router.pathname === "/pages/history" && <History />}
        {router.pathname === "/pages/help" && <Help />}
      </Box>
    </Box>
  );
}

export default MiniDrawer;
