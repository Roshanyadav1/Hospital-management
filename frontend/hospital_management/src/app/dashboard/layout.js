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
       <MiniDrawer />
      {/* <Navbar /> Display your Navbar */}
      <Box sx={{ paddingLeft: 40 }}> {/* Adjust padding according to your sidebar width */}
        <div>{children}</div> {/* Display current page content */}
        {/* <Footer /> Display your Footer */}
      </Box>
    </>
  )
}
export default layout
