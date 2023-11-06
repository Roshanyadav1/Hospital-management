<<<<<<< HEAD
"use client";
import { Button, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/navigation";
import AboutPage from "@/app/about/page";
import F from '@/components/F';
import Body from "@/components/Body";
export default function Home() {

=======
import ResponsiveAppBar from '@/components/Navbar'
import React from 'react'
<<<<<<< Updated upstream
>>>>>>> c315896fc48e8ae000ae220b9401bda7109bbf4d

function page() {
  return (
<<<<<<< HEAD
    <main>
    {/* <Body/> */}
    <F/>
    </main>
  )
}

=======
    <div>
      < ResponsiveAppBar/>
      {/* <DemoPage/> */}
=======
import FetchData from '@/app/data/page'
import Link from 'next/link'
// import Footer from '@/components/Footer'
import MiniDrawer from "@/components/sidebar";
function page() {
  return (
    <div>
  
      {/* <h1>Megha Dhangar</h1>
     <Link href='/data'>Go To Fetching data page</Link> */}
 <MiniDrawer />
>>>>>>> Stashed changes
    </div>
  )
}

export default page

 








>>>>>>> c315896fc48e8ae000ae220b9401bda7109bbf4d
