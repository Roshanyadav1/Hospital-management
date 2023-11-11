"use client"
import { useAuth0 } from "@auth0/auth0-react";
import SteperNav from "@/components/SteperNav";
import FixedContainer from "@/components/container";
// import React from 'react'
// import FetchData from '@/app/data/page'
// import Link from 'next/link'
// import SwipeableTextMobileStepper from '@/components/Steper'
// import { NavigateBeforeRounded } from '@mui/icons-material'
//  import SteperNav from '@/components/SteperNav'
//  import FixedContainer from '@/components/container'
import  MiniDrawer from '@/components/sidebar'

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <div>
    <MiniDrawer/>
        </div>
    <main>
      <h1>this is home</h1>
      <header className="App-header">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </main>
    </>
  )
}

// function page() {

//   return (
//     <div>
//       <SteperNav />
//       <FixedContainer />
//     </div>
//   );
// }
// export default page;
