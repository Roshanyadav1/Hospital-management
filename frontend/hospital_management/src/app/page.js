'use client'

import FixedContainer from '@/Pages/container'
import { Grid } from '@mui/material'
import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import DiseaseCards from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css'
import Cards from '@/Pages/Card'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function page() {
   let userRole = localStorage.getItem('user_role')
// eslint-disable-next-line react-hooks/rules-of-hooks
const route =  useRouter();
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=> {
if(userRole !== undefined){
   route.push("/dashboard") 
}
},[route, userRole])
   return (
      <div>
         <SwipeableTextMobileStepper />
         <Grid container item>
            <FixedContainer />
         </Grid>
         <Cards />
         <DiseaseCards />
         <DoctorCard />
      </div>
   )
}
export default page
