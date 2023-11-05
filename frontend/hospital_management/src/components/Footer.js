// components/Footer.js
import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
// import instaa from '@/assest/instagram.png'

import instaa from  '../assest/instaa.png'
import FB from '@/assest/fb.png';
import Twiter from '../assest/twiter.png'
import linkdn from '@/assest/link.png'
import Image from "next/image";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#13293D",
        color: "#fff",
        padding: 2,
        textAlign: "center",
      }}
    >
     
      <Grid container>
        <Grid item sx={12} sm={4}> SGA APPLICATION
        <Box
              sx={{
                  mb: 2,
                  mt: 1,
                }}
              >
               <Image height={100} width={100} src={instaa} />
              
              </Box>
        </Grid>

        <Grid item sx={12} sm={4}> Social Media
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        </Grid>
        
        <Grid item sx={12} sm={4}> Hospital Details</Grid>
      </Grid>
      
      <hr />
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Website Name
      </Typography>
    </Box>
  );
};

export default Footer;



