import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../assets/navbarimages/blueSga.png'
import manager from './../assets/manager.png'
import docter from './../assets/doctorr.png'
import Image from 'next/image'
import { Grid, Link } from '@mui/material'
const settings = [
   { label: 'Profile', route: '/dashboard/profile' },
   { label: 'Account', route: '/dashboard/account' },]

function ResponsiveAppBar({ sidebarChanges }) {
   const [anchorElUser, setAnchorElUser] = React.useState(null)

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseUserMenu = () => {
      setAnchorElUser(null)
   }

   const getUserImage = () => {
      const userRole = localStorage.getItem('user_role');

      switch (userRole) {
         case 'Admin':
         case 'Manager':
            return <Image alt="Admin" height="35" width="35" decoding="async" src={manager} />;
         case 'Doctor':
            return <Image alt="Doctor" height="35" width="35" decoding="async" src={docter} />;
         default:
            return null;
      }
   };

   return (
      <AppBar
         sx={{
            backgroundColor: '#FFFFFF',
            color: '#13293D',
         }}
      >
         <Container maxWidth='xxl'>
            <Toolbar disableGutters>
               <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
               >
                  <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                     <IconButton
                        sx={{ marginRight: '1rem' }}
                        onClick={sidebarChanges}
                     >
                        <MenuIcon />
                     </IconButton>
                     <Image width={120} alt="image" height={40} src={Logo} />
                  </Grid>
                  <Grid item>
                    
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {getUserImage()}
                        </IconButton>
                     
                     <Menu
                        sx={{ mt: '5rem' }}
                        id='menu-appbar'
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
                           <MenuItem key={setting.label}>
                              <Link href={setting.route} prefetch >
                                 <Typography component='a' textAlign='center'>{setting.label}</Typography>
                              </Link>
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
                  </Grid>
               </Grid>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default ResponsiveAppBar
