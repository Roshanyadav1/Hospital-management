"use client";
// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
// import  './Navbar.css';
//
// const Container = styled("div")({
//
//
//
// });
//
// const MyBox = styled("div")({
// });
//
// const drawerWidth = 240;
// const navItems = ["Home", "About", "Doctor", "Contact"];
//
// function DrawerAppBar(props) {
// const { window } = props;
// const [mobileOpen, setMobileOpen] = React.useState(false);
//
// const handleDrawerToggle = () => {
// setMobileOpen((prevState) => !prevState);
// };
//
// const drawer = (
// <Box onClick={handleDrawerToggle} sx={{backgroundColor:' #FFFFFF',color:'#c0b598'}}>
{
  /* <Typography variant="h6" sx={{backgroundColor:' #FFFFFF',color:'#c0b598'}}> */
}
{
  /* Vedantu Hospitalllllllllll */
}
{
  /* </Typography> */
}
{
  /* <Divider /> */
}
{
  /* <List> */
}
{
  /* {navItems.map((item) => ( */
}
// <ListItem key={item} disablePadding>
{
  /* <ListItemButton sx={{ textAlign: "centre" }}> */
}
{
  /* <ListItemText primary={item} /> */
}
{
  /* </ListItemButton> */
}
{
  /* </ListItem> */
}
// ))}
{
  /* </List> */
}
{
  /* </Box> */
}
// );
//
// const container =
// window !== undefined ? () => window().document.body : undefined;
//
// return (
// <MyBox>
{
  /* <Box sx={{ display: "flex",  }}> */
}
{
  /* <CssBaseline /> */
}
{
  /* <AppBar component="nav"> */
}
{
  /* <Toolbar> */
}
{
  /* <IconButton */
}
// color="inherit"
// aria-label="open drawer"
// edge="start"
// onClick={handleDrawerToggle}
// sx={{ mr: 2, display: { sm: "none" } }}
// >
{
  /* <MenuIcon /> */
}
{
  /* </IconButton> */
}
{
  /* <Typography */
}
// variant="h6"
// component="div"
// sx={{ flexGrow: 3, display: { xs: "none", sm: "block" } }}
// >
{
  /* Vedantu Hospital */
}
{
  /* </Typography> */
}
{
  /* <Box /> */
}
{
  /* <Box sx={{ display: { xs: "none", sm: "block" } }}> */
}
{
  /* {navItems.map((item) => ( */
}
// <Button key={item} sx={{ color: "#fff" }}>
{
  /* {item} */
}
{
  /* </Button> */
}
// ))}
{
  /* </Box> */
}
{
  /* </Toolbar> */
}
{
  /* </AppBar> */
}
{
  /* <nav className="main-div"> */
}
{
  /* <Drawer */
}
// container={container}
// variant="temporary"
// open={mobileOpen}
// onClose={handleDrawerToggle}
// ModalProps={{
// keepMounted: true, // Better open performance on mobile.
// }}
// sx={{
// display: { xs: "block", sm: "none" },
// "& .MuiDrawer-paper": {
// boxSizing: "border-box",
// width: drawerWidth,
// },
// }}
// >
{
  /* {drawer} */
}
{
  /* </Drawer> */
}
{
  /* </nav> */
}
{
  /* <Box component="main" sx={{ p: 3, backgroundColor:' #FFFFFF' }}> */
}
{
  /* <Toolbar /> */
}
{
  /* <Typography>  */
}
{
  /* </Typography> */
}
{
  /* </Box> */
}
{
  /* </Box> */
}
{
  /* </MyBox> */
}
// );
// }
//
// DrawerAppBar.propTypes = {
// /**
//  * Injected by the documentation to work in an iframe.
//  * You won't need it on your project.
//  */
// window: PropTypes.func,
// };
//
// export default DrawerAppBar;
//

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About", "contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor:'#FFFFFF',
        color:'#13293D'
      }}
      position="static"
      className="appbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VEDANTU HOSPITAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
                color:'inherit'
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
