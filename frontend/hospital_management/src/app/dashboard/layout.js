 "use client"
// import MiniDrawer from '@/components/sidebar'
// import AppBar from '@/components/Navbar'
// import { Box } from "@mui/material"
// function layout({children}) {
  
//   return (
//     <div>
//       <Box sx={{ paddingLeft: '11rem', marginTop:10 }}> 
//         <div>{children}</div>
//       </Box>
//        <MiniDrawer />
//     </div>
//   )
// }


// export default layout


import MiniDrawer from '@/components/sidebar'
import AppBar from '@/components/Navbar'
import { Box } from "@mui/material"

function Layout({ children }) {
  return (
    <div>
      <Box
        sx={{
          paddingLeft: '11rem',
          marginTop: 10,
          transition: 'padding-left 0.3s ease',
        }}
      >
        <div>{children}</div>
      </Box>
      <MiniDrawer />
    </div>
  )
}

export default Layout;

