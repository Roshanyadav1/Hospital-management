"use client"
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useUser } from '@auth0/nextjs-auth0/client'
import Logo from '../assest/whiteSga.png'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'
const drawerWidth = 240

const navItems = ["Doctor" , "Specialities" , "Book Appointment" , "View Appointment"]

const StyledLink = styled(Link)(() => ({
   color: 'white',
   padding: '0.6rem',
   textDecoration: 'none',
}))

function SteperNav(props) {
   const { window } = props
   const [mobileOpen, setMobileOpen] = React.useState(false)

   const { user } = useUser()

   const handleDrawerToggle = () => {
      setMobileOpen(prevState => !prevState)
   }

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
         {/* <Typography variant="body2" sx={{ my: 2 }}>
        MUI
      </Typography> */}
         <Divider />
         <List>
            <Button href='/api/auth/login' sx={{ color: '#fff' }}>
               Login
            </Button>
            {navItems.map(item => (
               <ListItem key={item.label} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <ListItemText
                        primary={<Typography variant='h5'>{item.label}</Typography>}
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   )

   const container = window !== undefined ? () => window().document.body : undefined
   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar component='nav'>
            <Toolbar>
               <IconButton
                  color='#fff'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <div style={{ display: 'flex', flexGrow: 1 }}>
                  <Image width={120} height={40} src={Logo} />
               </div>

               <Box
                  sx={{
                     display: { xs: 'none', sm: 'block' },
                     outline: 'none',
                     textDecoration: 'none',
                  }}
               >
                  {/* // if user available give link to go to dashboard  */}

                  {!user && (
                     <StyledLink href='/dashboard' sx={{ color: '#fff' }}>
                        Dashboard
                     </StyledLink>
                  )}

                  {navItems.map(item => (
                     <StyledLink href={''} key={item} sx={{ color: '#fff' }}>
                        {item}
                     </StyledLink>
                  ))}
                  {user && (
                     <>
                        <Button sx={{ color: '#fff' }}>{user.name}</Button>
                     </>
                  )}
                  {!user && (
                     <StyledLink href='/api/auth/login' sx={{ color: '#fff' }}>
                        Login
                     </StyledLink>
                  )}
               </Box>
            </Toolbar>
         </AppBar>
         <nav>
            <Drawer
               container={container}
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </nav>
         <Box component='main' sx={{ p: 3 }}>
            <Toolbar />
            <Typography></Typography>
         </Box>
      </Box>
   )
}


export default SteperNav

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from '@mui/icons-material/Menu';
// import Logo from '../assest/blueSga.png'
// import Link from "next/link";
// import Image from "next/image";
// import FindDoctor from '@/app/dashboard/finddocter/page';
// import Investor from '@/app/dashboard/investor/page'
// import AboutUs from '@/app/dashboard/aboutus/page'
// import  ContactUs from '@/app/dashboard/contactus/page'
// import Blog from '@/app/dashboard/blog/page'
// import { useRouter } from "next/navigation";
// const pages = [
//   { name: "Find a Doctor", path: "/dashboard/finddocter" },
//   { name: "Investors", path: "/dashboard/investor" },
//   { name: "About us", path: "/dashboard/aboutus" },
//   { name: "Blogs", path: "/dashboard/blog" },
//   { name: "Contact us", path: "/dashboard/contactus" }
// ];
// const settings = ["Profile", "Account", "Logout"];

// function ResponsiveAppBar({ sidebarChanges, open }) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const router=useRouter()
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       sx={{
//         backgroundColor: "#13293D",
//         color: "#fff",
//         margin: "0",
//       }}
//       position="static"
//       className="appbar"
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <IconButton sx={{marginRight : '2rem'}} onClick={sidebarChanges}>
//             <MenuIcon />
//           </IconButton>

//           {/* <Link href="/" passHref> */}
//             <Image width={160} height={50}  src={Logo} />
//           {/* </Link> */}

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "center",
//                 color: "inherit",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <Link  style={{
//                   textDecoration:'none'
//                 }}
//                 href={page.path} key={page.path} passHref>
//                   <MenuItem onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </MenuItem>
//                 </Link>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },}}>
//             {pages.map((page) => (
//               <Button
//                 key={page.path}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: "inherit",
//                   display: "block",

//                 }}
//               >
//                 <Link  style={{
//                 textDecoration:'none'
//               }}
//                  href={page.path} passHref>
//                   <Typography component="a" sx={{ textDecoration: 'none', color: "#13293d" ,outline:"none",fontWeight: "bold",}}>
//                     {page.name}
//                   </Typography>
//                 </Link>
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;
