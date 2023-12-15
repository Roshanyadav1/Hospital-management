'use client'

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
import Logo from '../assets/navbarimages/whiteSga.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useLayoutEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import useLogin from '@/hooks/useLogin'

const drawerWidth = 240
const navItems = [
   { label: 'Doctor', route: '/showdoctors' },
   { label: 'Book Appointment', route: '/doctorpage' },
   { label: 'View Appointment', route: '/viewappoinment' },
]

function SteperNav(props) {
   const { window } = props
   const [mobileOpen, setMobileOpen] = useState(false)
   const {loginWithRedirect , getAccessTokenSilently , loginWithPopup } = useAuth0()
   const { user : loggerUser , getUser } = useLogin() // my backend api

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState)
   }

   // console.log(user , "the auth0 user is ")
   console.log(loggerUser , "the logger user is ")
   let role = ''

 
   useLayoutEffect(() => {
   const getUserMetadata = async () => {
      try {
         // https://hospital-management-six-chi.vercel.app/api/appointment/view/
         console.log("this works")
         
         const accessToken = await getAccessTokenSilently({
            authorizationParams :{
               audience: 'https://dev-wk502078emf2n02u.us.auth0.com/api/v2/',
               scope: 'read:current_user',
               cacheMode: 'off',
            }
         })
         console.log("+++++++++++++++++++++", accessToken)

       
          user && localStorage.setItem('token', accessToken)
         const userDetail = await getUser(accessToken)

         console.log(userDetail , "My database user is : -")


      } catch (error) {
         console.log("something went wrong")
         console.warn(error)
      }
   }
   getUserMetadata()
}, []);
   
   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
         <Divider />
         <List>
            <Button onClick={() => loginWithRedirect()} sx={{ color: '#fff' }}>
               Login
            </Button>
            {navItems.map((item) => (
               <ListItem key={item.label} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <Link href={item.route} passHref>
                        <ListItemText
                           primary={item.label}
                           primaryTypographyProps={{
                              variant: 'body2',
                              fontSize: '14px',
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
               <Link href={'/'} prefetch style={{ display: 'flex', flexGrow: 1 }}>
                  <Image width={120} height={40} src={Logo} />
               </Link>

               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {role !== 'Patient' && role !== 'Doctor' && loggerUser && (
                     <Link href='/dashboard' prefetch>
                        <Button sx={{ color: '#fff' }}>Dashboard</Button>
                     </Link>
                  )}

                  {navItems.map((item) => (
                     <Link key={item.label} href={item.route} prefetch passHref>
                        <Button sx={{ color: '#fff' }}>{item.label}</Button>
                     </Link>
                  ))}
                  {loggerUser && <Button sx={{ color: '#fff' }}>{loggerUser.name}</Button>}

                  {!loggerUser && (
                     <Button
                        onClick={() => loginWithRedirect()}
                        sx={{ color: '#fff' }}
                     >
                        Login
                     </Button>
                  )}
                  {loggerUser && (
                     <Button onClick={()=>loginWithPopup()} sx={{ color: '#fff' }}>
                        Logout
                     </Button>
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
         <Box component='main'>
            <Toolbar />
            <Typography></Typography>
         </Box>
      </div>
   )
}

export default SteperNav
