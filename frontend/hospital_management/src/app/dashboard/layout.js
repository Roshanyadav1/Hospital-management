"use client"

import MiniDrawer from '@/components/sidebar'
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
