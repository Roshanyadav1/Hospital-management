import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assest/blueSga.png'
import Link from "next/link";
import Image from "next/image";
import FindDoctor from '@/app/dashboard/finddocter/page';
import Investor from '@/app/dashboard/investor/page'
import AboutUs from '@/app/dashboard/aboutus/page'
import  ContactUs from '@/app/dashboard/contactus/page'
import Blog from '@/app/dashboard/blog/page'
import { useRouter } from "next/navigation";
const pages = [
  { name: "Find a Doctor", path: "/dashboard/finddocter" },
  { name: "Investors", path: "/dashboard/investor" },
  { name: "About us", path: "/dashboard/aboutus" },
  { name: "Blogs", path: "/dashboard/blog" },
  { name: "Contact us", path: "/dashboard/contactus" }
];
const settings = ["Profile", "Account", "Logout"];

function ResponsiveAppBar({ sidebarChanges, open }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router=useRouter()
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
        backgroundColor: "#FFFFFF",
        color: "#13293D",
        margin: "0",
      }}
      position="static"
      className="appbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{marginRight : '2rem'}} onClick={sidebarChanges}>
            <MenuIcon /> 
          </IconButton>
          
          {/* <Link href="/" passHref> */}
            <Image width={160} height={50}  src={Logo} />
          {/* </Link> */}

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
                color: "inherit",
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
                <Link  style={{
                  textDecoration:'none'
                }}
                href={page.path} key={page.path} passHref>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },}}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
      
                }}
              >
                <Link  style={{
                textDecoration:'none'
              }}
                 href={page.path} passHref>
                  <Typography component="a" sx={{ textDecoration: 'none', color: "#13293d" ,outline:"none",fontWeight: "bold",}}>
                    {page.name}
                  </Typography>
                </Link>
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
