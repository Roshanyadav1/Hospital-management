// import React from 'react'
// import FetchData from '@/app/data/page'
// import Link from 'next/link'
// import SwipeableTextMobileStepper from '@/components/Steper'
// import { NavigateBeforeRounded } from '@mui/icons-material'
//  import SteperNav from '@/components/SteperNav'
//  import FixedContainer from '@/components/container'
import  MiniDrawer from '@/components/sidebar'

// export default function App () {
//   return (
//       <Component {...pageProps} />
//         this is working
//     </SessionProvider>
//   )
// }
function page({ pageProps }) {

  // console.log("ENV FILES" , process.env)

  return (
    <div>
<MiniDrawer/>
  {/* <SteperNav/> */}
{/* <SwipeableTextMobileStepper/>  */}
{/* <FixedContainer/> */}

 </div> 
  )

  }
export default page

