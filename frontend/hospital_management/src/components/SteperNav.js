
'use client'

// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import CssBaseline from '@mui/material/CssBaseline'
// import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer'
// import IconButton from '@mui/material/IconButton'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
// import MenuIcon from '@mui/icons-material/Menu'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import { useUser } from '@auth0/nextjs-auth0/client'
// import Logo from '../assets/navbarimages/whiteSga.png'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { useLoginUserMutation } from '@/services/Query'
// import doctor from '../assets/doctorr.png'

// const drawerWidth = 240
// const navItems = [
//    { label: 'Doctor', route: '/showdoctors' },
//    { label: 'Book Appointment', route: '/doctorpage' },
//    { label: 'View Appointment', route: '/viewappoinment' },
// ]

// function SteperNav(props) {
//    const { window } = props
//    const [mobileOpen, setMobileOpen] = useState(false)
//    const [userLogin] = useLoginUserMutation();
//    const { user } = useUser()
//    const [isLoading, setIsLoading] = useState(false);
//    const [loggedIn, setLoggedIn] = useState(false);
//    const [showLogout, setShowLogout] = useState(false);
// const handleDrawerToggle = () => {
//    setMobileOpen((prevState) => !prevState)
// }

//    const handleImageClick = () => {
//       setShowLogout(true);
//     };

//     const handleLogoutClick = () => {
//       if (user) {
//         localStorage.clear();
//         let a = document.createElement('a');
//         a.href = '/api/auth/logout';
//         a.click();
//       }
//     };


//    const getNavigationItems = () => {
//       const role = localStorage.getItem('user_role');    
//       switch (role) {
//         case 'Admin':
//         case 'Manager':
//           return (
//             <>
//               <Link href="/dashboard" prefetch>
//                 <Button sx={{ color: '#fff' }}>Dashboard</Button>
//               </Link>
//               {navItems.map((item) => (
//                 <Link key={item.label} href={item.route} prefetch passHref>
//                   <Button sx={{ color: '#fff' }}>{item.label}</Button>
//                 </Link>
//               ))}
//               {user && (

//                //   <Image height={35} width={35}  src={doctor}  style={{marginLeft:1}} onClick={handleImageClick} />
//                <div style={{ textAlign: 'center' }}>
//                <Image
//                  height={35}
//                  width={35}
//                  src={doctor}
//                  style={{ marginLeft: 1, cursor: 'pointer' }}
//                  onClick={handleImageClick}
//                />
//                {showLogout && (
//                  <p style={{ color: '#fff', cursor: 'pointer' }} onClick={handleLogoutClick}>
//                    Logout
//                  </p>
//                )}
//              </div>


//               )}
//             </>
//           );

//         case 'Doctor':
//           return (
//             <>
//               <Link href="/dashboard" prefetch>
//                 <Button sx={{ color: '#fff' }}>Dashboard</Button>
//               </Link>
//               {user && (
//                 <Button
//                   onClick={() => {
//                     localStorage.clear();
//                     let a = document.createElement('a');
//                     a.href = '/api/auth/logout';
//                     a.click();
//                   }}
//                   sx={{ color: '#fff' }}
//                 >
//                   Logout
//                 </Button>
//               )}
//             </>
//           );

//         case 'Patient':
//           return (
//             <>
//               {navItems.map((item) => (
//                 <Link key={item.label} href={item.route} prefetch passHref>
//                   <Button sx={{ color: '#fff' }}>{item.label}</Button>
//                 </Link>
//               ))}
//               {/* {user && (
//                 <Button sx={{ color: '#fff' }}>{user.name || 'User'}</Button>
//               )} */}
//               {user && (
//                 <Button
//                   onClick={() => {
//                     localStorage.clear();
//                     let a = document.createElement('a');
//                     a.href = '/api/auth/logout';
//                     a.click();
//                   }}
//                   sx={{ color: '#fff' }}
//                 >
//                   Logout
//                 </Button>
//               )}
//             </>
//           );

//         default:
//           return (
//             <Link href="/api/auth/login" passHref>
//               <Button sx={{ color: '#fff' }}>Login</Button>
//             </Link>
//           );
//       }
//     };
// useEffect(() => {
//    if (user && !loggedIn) {
//       setIsLoading(true); 
//       const handleSubmit = async () => {
//          try {
//             let res = await userLogin(user.email).unwrap();
//             localStorage.setItem('user_id', res.data.id);
//             localStorage.setItem('access_token', res.data.token.access);
//             localStorage.setItem('user_role', res.data.user_role);
//             localStorage.setItem('refresh_token', res.data.token.refresh);
//             setIsLoading(false); 
//             setLoggedIn(true); 
//          } catch (err) {
//             setIsLoading(false); 
//             console.warn(err);
//          }
//       };
//       handleSubmit();
//    }
// }, [user, loggedIn, userLogin]);

// const drawer = (
//    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
//       <Divider />
//       <List>
//          {/* <Button href='/api/auth/login' sx={{ color: '#fff' }}>
//             Login
//          </Button> */}
//          {navItems.map((item) => (
//             <ListItem key={item.label} disablePadding>
//                <ListItemButton sx={{ textAlign: 'center' }}>
//                   <Link href={item.route} passHref>
//                      <ListItemText
//                         primary={item.label}
//                         primaryTypographyProps={{
//                            variant: 'body2',
//                            fontSize: '12px',
//                         }}
//                      />
//                   </Link>
//                </ListItemButton>
//             </ListItem>
//          ))}
//       </List>
//    </Box>
// )
//    const container = window !== undefined ? () => window().document.body : undefined
//    return (
//       <div>
//          <CssBaseline />
//          <AppBar component='nav'>
//             <Toolbar>
//                <IconButton
//                   color='#fff'
//                   aria-label='open drawer'
//                   edge='start'
//                   onClick={handleDrawerToggle}
//                   sx={{ mr: 2, display: { sm: 'none' } }}
//                >
//                   <MenuIcon />
//                </IconButton>
//                <Link href={'/'} prefetch style={{ display: 'flex', flexGrow: 1 }}>
//                   <Image width={120} height={40} src={Logo} />
//                </Link>

//                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
//                   {getNavigationItems()}
//                </Box>
//             </Toolbar>
//          </AppBar>


//    <nav>
//       <Drawer
//          container={container}
//          variant='temporary'
//          open={mobileOpen}
//          onClose={handleDrawerToggle}
//          ModalProps={{
//             keepMounted: true,
//          }}
//          sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//                boxSizing: 'border-box',
//                width: drawerWidth,
//             },
//          }}
//       >
//          {drawer}
//       </Drawer>
//    </nav>
//    <Box component='main'>
//       <Toolbar />
//       <Typography></Typography>
//    </Box>
// </div>
//    );
// }

// export default SteperNav;


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import patient from '../assets/patient.png'
import Logo from '../assets/navbarimages/whiteSga.png'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import Link from 'next/link'
import doctor from '../assets/doctorr.png'
import { useState, useEffect } from 'react'
import { useLoginUserMutation } from '@/services/Query'

const drawerWidth = 240
const pages = [{ label: 'Doctor', route: '/showdoctors' },
{ label: 'Book Appointment', route: '/doctorpage' },
{ label: 'View Appointment', route: '/viewappoinment' },];

const settings = [];

function ResponsiveAppBar(props) {
   const { window } = props
   const [mobileOpen, setMobileOpen] = useState(false)
   const [userLogin] = useLoginUserMutation();
   const { user } = useUser()
   const [isLoading, setIsLoading] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [showLogout, setShowLogout] = useState(false);
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

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState)
   }
   const getNavigationItems = () => {
      const role = localStorage.getItem('user_role');
      switch (role) {
         case 'Admin':
         case 'Manager':
            return (
               <>
                  <Link href="/dashboard" prefetch>
                     <Button sx={{ color: '#fff' }}>Dashboard</Button>
                  </Link>
                  {pages.map((item) => (
                     <Link key={item.label} href={item.route} prefetch passHref>
                        <Button sx={{ color: '#fff' }}>{item.label}</Button>
                     </Link>
                  ))}
                  {/* {user && (
                     <Button
                     onClick={() => {
                        localStorage.clear();
                        let a = document.createElement('a');
                        a.href = '/api/auth/logout';
                        a.click();
                     }}
                     sx={{ color: '#fff' }}
                  >
                     Logout
                  </Button>

                  )} */}
               </>
            );

         case 'Doctor':
            return (
               <>
                  <Link href="/dashboard" prefetch>
                     <Button sx={{ color: '#fff' }}>Dashboard</Button>
                  </Link>
                  {/* {user && (
                     <Button
                        onClick={() => {
                           localStorage.clear();
                           let a = document.createElement('a');
                           a.href = '/api/auth/logout';
                           a.click();
                        }}
                        sx={{ color: '#fff' }}
                     >
                        Logout
                     </Button>
                  )} */}
               </>
            );

         case 'Patient':
            return (
               <>
                  {pages.map((item) => (
                     <Link key={item.label} href={item.route} prefetch passHref>
                        <Button sx={{ color: '#fff' }}>{item.label}</Button>
                     </Link>
                  ))}
                  {/* {user && (
                      <Button sx={{ color: '#fff' }}>{user.name || 'User'}</Button>
                    )} */}
                  {/* {user && (
                     <Button
                        onClick={() => {
                           localStorage.clear();
                           let a = document.createElement('a');
                           a.href = '/api/auth/logout';
                           a.click();
                        }}
                        sx={{ color: '#fff' }}
                     >
                        Logout
                     </Button>
                  )} */}
               </>
            );

         default:
            return (
               <Link href="/api/auth/login" passHref>
                  <Button sx={{ color: '#fff' }}>Login</Button>
               </Link>
            );
      }
   };

   useEffect(() => {
      if (user && !loggedIn) {
         setIsLoading(true);
         const handleSubmit = async () => {
            try {
               let res = await userLogin(user.email).unwrap();
               localStorage.setItem('user_id', res.data.id);
               localStorage.setItem('access_token', res.data.token.access);
               localStorage.setItem('user_role', res.data.user_role);
               localStorage.setItem('refresh_token', res.data.token.refresh);
               setIsLoading(false);
               setLoggedIn(true);
            } catch (err) {
               setIsLoading(false);
               console.warn(err);
            }
         };
         handleSubmit();
      }
   }, [user, loggedIn, userLogin]);

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
         <Divider />
         <List>
            {/* <Button href='/api/auth/login' sx={{ color: '#fff' }}>
               Login
            </Button> */}
            {pages.map((item) => (
               <ListItem key={item.label} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <Link href={item.route} passHref>
                        <ListItemText
                           primary={item.label}
                           primaryTypographyProps={{
                              variant: 'body2',
                              fontSize: '12px',
                           }}
                        />
                     </Link>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   )
   const container = window !== undefined ? () => window().document.body : undefined
   return (
      <div>
         <CssBaseline />
         <AppBar position="fixed">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                     {/* <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu> */}

                  </Box>
                  <Link href={'/'} prefetch style={{ display: 'flex', flexGrow: 1 }}>
                     <Image width={120} height={40} src={Logo} />
                  </Link>

                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', fontSize: '15px' }}>
                     {/* {pages.map((page) => (
                     <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block', fontSize: '16px' }}
                     >
                        {page}
                     </Button>
                  ))} */}
                     {getNavigationItems()}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                     {/* <Tooltip title="Open settings"> */}
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                           <Avatar alt="" src='/assets/patient.png' />
                        </IconButton>
                     {/* </Tooltip> */}
                     <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                     >
                        {settings.map((setting) => (
                           <MenuItem key={setting} onClick={handleCloseUserMenu}>
                              <Typography textAlign="center">{setting}</Typography>
                           </MenuItem>
                        ))}
                        <MenuItem
                           onClick={() => {
                              localStorage.clear()
                              const a = document.createElement('a')
                              a.href = '/api/auth/logout'
                              a.click()
                           }}
                        >
                           <Typography textAlign='center'>Logout</Typography>
                        </MenuItem>
                     </Menu>
                  </Box>

               </Toolbar>
            </Container>
         </AppBar>

         <nav>
            <Drawer
               container={container}
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
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
         <Box component='main'>
            <Toolbar />
            <Typography></Typography>
         </Box>
      </div >
   );
}
export default ResponsiveAppBar;