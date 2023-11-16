'use client'

import * as React from 'react'
import PropTypes from 'prop-types'
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
import Link from '@mui/material/Link'
const drawerWidth = 240
const navItems = ['Doctor', 'Specialities', 'Call Us', 'Login', 'Contact Us']
import { mainNavbarItems } from '../data/NavbarItems'
import { NavLink } from 'react-router-dom'
import { color } from '@mui/system'

function SteperNav(props) {
   const { window } = props
   const [mobileOpen, setMobileOpen] = React.useState(false)

   const handleDrawerToggle = () => {
      setMobileOpen(prevState => !prevState)
   }

<<<<<<< HEAD
   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
         <Typography variant='h6' sx={{ my: 2 }}>
            MUI
         </Typography>
         <Divider />
         <List>
            {mainNavbarItems.map(item => (
               <Link href={item.route} key={item.id} underline='none'>
                  <ListItem className='list_item' disableRipple button>
                     <ListItemText sx={mainNavbarItems.text} primary={item.label} />
                  </ListItem>
               </Link>
            ))}
         </List>
=======
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <Button href="/api/auth/login" sx={{ color: '#fff' }}>Login</Button>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="#fff"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SGA
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            <Button href="/api/auth/login" sx={{ color: '#fff' }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
        
        </Typography>
>>>>>>> a3349c09938090900b105aa749a8ab66d94e15dc
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
               <Typography
                  variant='h6'
                  component='div'
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  SGA
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {mainNavbarItems.map(item => (
                     <Button key={item} sx={{ color: '#fff' }}>
                        <Link href={item.route} key={item.id} sx={{ color: '#fff' }}>
                           {item.label}
                        </Link>
                     </Button>
                  ))}
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

SteperNav.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window: PropTypes.func,
}

export default SteperNav
