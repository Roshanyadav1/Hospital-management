"use client"

import { Inter } from 'next/font/google'
import MiniDrawer from '@/components/sidebar'
import Navbar from "@/components/Navbar"; // Import your navbar component
import Footer from "@/components/Footer"
import { Box } from "@mui/material";
import React from 'react'
function layout({children}) {
  return (
    <>
      <Box sx={{ paddingLeft: 40, marginTop:10 }}> 
        <div>{children}</div>
      </Box>
       <MiniDrawer />
    </>
  )
}
export default layout
