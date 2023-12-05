import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useUser } from '@auth0/nextjs-auth0/client';
import Logo from '../assets/navbarimages/whiteSga.png';
import Image from 'next/image';
import Link from 'next/link'; 

const drawerWidth = 240;
const navItems = [
  { label: 'Doctor', route: '/showdoctors' },
  { label: 'Specialities', route: '/Specilist' },
  { label: 'Contact Us', route: '/contactus' },
  { label: 'Book Appoinment', route: '/bookappointment' },
  { label: 'View Appoinment', route: '/viewappoinment' },
];

function SteperNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user } = useUser();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
      
      <Divider />
      <List>
        <Button href="/api/auth/login" sx={{ color: '#fff' }}>Login</Button>
        {navItems.map((item) => (

          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.route} passHref>
                <ListItemText primary={item.label}
                primaryTypographyProps={{ variant: 'body2', fontSize: '14px' }}
                 />
              </Link>
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
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <Image width={120} height={40} src={Logo} />
          </div>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             {
               user && (
                 <Button href="/dashboard" sx={{ color: '#fff' }}>
                  Dashboard
                </Button>
              )
            }

            {navItems.map((item) => (
              <Link key={item.label} href={item.route} passHref>
                <Button sx={{ color: '#fff' }}>{item.label}</Button>
              </Link>
            ))}
            {user && (
              <Button sx={{ color: '#fff' }}>{user.name}</Button>
            )}

             {
              !user && (
                <Button href="/api/auth/login" sx={{ color: '#fff' }}>
                  Login
                </Button>

              )
             }
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
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

SteperNav.propTypes = {
  window: PropTypes.func
};

export default SteperNav;