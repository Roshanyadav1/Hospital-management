"use client"

import MiniDrawer from '@/components/sidebar'
import { Box } from "@mui/material";

function layout({children}) {
  return (
    <>
      <Box sx={{ paddingLeft: '11rem', marginTop:10 }}> 
        <div>{children}</div>
      </Box>
       <MiniDrawer />
    </>
  )
}


export default layout
