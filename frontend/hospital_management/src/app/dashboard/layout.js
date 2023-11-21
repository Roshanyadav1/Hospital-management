'use client'
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ResponsiveAppBar from "@/components/Navbar";
// import Footer from '@/components/Footer';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toolbar } from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MedicationIcon from '@mui/icons-material/Medication';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const drawerWidth = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
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

 
function Layout({children}) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const sidebarChanges = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={false} elevation={0.1}>
        <ResponsiveAppBar sidebarChanges={sidebarChanges} open={open} />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <List>
          {[
             { text: "Dashboard", path: "/dashboard" , icon : <DashboardIcon/> },
            { text: "Career", path: "/dashboard/career" , icon : <TrackChangesIcon/>},
            { text: "Doctor", path: "/dashboard/docter" , icon : <SettingsAccessibilityIcon/>},
            { text: "Disease", path: "/dashboard/disease" , icon : <CoronavirusIcon/>},
            { text: "Add Hospital", path: "/dashboard/abouthospital" , icon : <AddBoxIcon/>},
            { text: "Billing", path: "/dashboard/billing" , icon : <AccountBalanceWalletIcon/>},
            { text: "Analytics", path: "/dashboard/analytics" , icon : <AnalyticsIcon/>},
            { text: "DocterDetail", path: "/dashboard/docterdetail" , icon : <AddReactionIcon/>},
            { text: "Prescription", path: "/dashboard/registerForm" , icon : <MedicationIcon/>},
            { text: "Discharge", path: "/dashboard/discharge" , icon : <PersonRemoveIcon/> },
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                backgroundColor: "#13293d",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#13293d",
                },
              }}
            >
              {/* Wrap the ListItemButton with Link */}
              <Link style={{
                textDecoration:'none'
              }} href={item.path} passHref>
                <ListItemButton
                  component="a" 
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "#fff", 
                    fontWeight: "bold", // Make text bold
                    textDecoration: 'none',
                    "&:hover": {
                      "& .MuiListItemIcon-root":{
                      color:"#000",
                      },
                      backgroundColor: "#fff",
                      color: "#13293d",
                      outline: "none",
                      textDecoration: "none",
                    },
                  }}
                  className={router.pathname === item.path ? "active" : ""}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      backgroundColor: "inherit",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text}  sx={{ opacity: open ? 1 : 0  , outline:'none' ,
                  '&:hover':{
                    outline:'none'
                  }
                }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1}}>
       <Toolbar /> 
          {children}
        {/* <Footer/> */}
       </Box> 
    </Box>
  );
}

export default Layout;
