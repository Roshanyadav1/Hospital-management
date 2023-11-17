'use client'
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiRadioCircle } from "react-icons/bi";
import ResponsiveAppBar from "./Navbar";
import Footer from './Footer';
// import Analytics from "@/app/pages/analytics/page";
// import Career from "@/app/pages/career/page";
// import AboutHospital from "@/app/pages/abouthospital/page";
// import Appointment from "@/app/pages/appointment/page";
// import Billing from "@/app/pages/billing/page";
// import Dashboardd from "@/app/pages/dashboardd/page";
// import Disease from "@/app/pages/disease/page";
// import DocterDetail from "@/app/pages/docterdetail/page";
// import Prescription from "@/app/pages/prescription/page";
// import Discharge from "@/app/pages/discharge/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Home from "@/app/dashboard/page";
import Docter from "@/app/dashboard/docter/page";
import Career from "@/app/dashboard/career/page";
import Billing from "@/app/dashboard/billing/page"
import AboutHospital from "@/app/dashboard/abouthospital/page";
import Analytics from "@/app/dashboard/analytics/page";
// import Appointment from "@/app/dashboard/@appointment/page";
import Dashboardd from "@/app/dashboard/dashboardd/page";
import Disease from "@/app/dashboard/disease/page";
import DocterDetail from "@/app/dashboard/docterdetail/page";
import Prescription from "@/app/dashboard/prescription/page";
import Discharge from "@/app/dashboard/discharge/page";

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


const StyledLink = styled("a")(({ theme }) => ({
  color: "#fff", // Set the color to white
  textDecoration: "none",
  padding: theme.spacing(1),
  "&:hover": {
    color: "#13293d", 
  },
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
        <DrawerHeader></DrawerHeader>
        <List>
          {[
            { text: "Career", path: "/" },
            { text: "Docter", path: "/dashboard/docter" },
            { text: "Disease", path: "/dashboard/disease" },
            { text: "AboutHospital", path: "/dashboard/abouthospital" },
            { text: "Billing", path: "/dashboard/billing" },
            { text: "Analytics", path: "/dashboard/analytics" },
            { text: "Dashboardd", path: "/dashboard/dashboardd" },
            { text: "DocterDetail", path: "/dashboard/docterdetail" },
            { text: "Prescription", path: "/dashboard/prescription" },
            { text: "Discharge", path: "/dashboard/discharge" },
          ].map((item, index) => (
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
              <Link href={item.path} passHref>
                <ListItemButton
                  component="a" 
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "#fff", 
                    fontWeight: "bold", // Make text bold
                    textDecorationLine: 'none',
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#13293d",
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
        <Grid container item padding={3} >
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
            quisque non tellus. Convallis convallis tellus id interdum velit
            laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
            adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at consectetur
            lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
            faucibus et molestie ac.
          </Typography>
{/* 
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>

          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography> */}
        </Grid>
        {router.pathname === "/" && <Career />}
        {router.pathname === "/dashboard/docter" && <Docter />}
        {router.pathname === "/dashboard/disease" && <Disease />}
        {router.pathname === "/dashboard/abouthospital" && <AboutHospital />}
        {router.pathname === "/dashboard/billing" && <Billing />}
        {router.pathname === "/dashboard/analytics" && <Analytics />}
        {router.pathname === "/dashboard/dashboardd" && <Dashboardd />}
        {router.pathname === "/dashboard/docterdetail" && <DocterDetail />}
        {router.pathname === "/dashboard/prescription" && <Prescription />}
        {router.pathname === "/dashboard/discharge" && <Discharge />}

      <Footer />

      </Box>
    </Box>
      
  );
}

export default MiniDrawer;
