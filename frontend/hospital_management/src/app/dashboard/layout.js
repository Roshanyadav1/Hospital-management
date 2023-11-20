"use client"

import MiniDrawer from '@/components/sidebar'
import { Box } from "@mui/material";
function layout({children}) {
  return (
    <div>
      <Box sx={{ paddingLeft: 40, marginTop:10 }}> 
        <div>{children}</div>
      </Box>
       <MiniDrawer />
    </div>
  )
}


export default layout
