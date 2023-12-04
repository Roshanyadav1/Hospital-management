"use client"

import FixedContainer from '@/app/Pages/container'
import { Grid } from '@mui/material' 
import Cards from '@/app/Pages/card'
import SwipeableTextMobileStepper from '@/app/Pages/Steper'
import DoctorCard from '@/app/Pages/DoctorsCard'
import ShowDidease from '@/app/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css';
import SteperNav from '@/components/SteperNav'
import Footer  from '@/components/Footer'
// for the patient page , the patient page will be the main page for the patient

function page() {
  return (
    <div>
      <SteperNav />
      <SwipeableTextMobileStepper/>
      <Grid container item padding={3} >
        <FixedContainer />
      </Grid>
      <Cards/>
      <ShowDidease/>
      <DoctorCard/>
      <Footer/>
    </div>
  )

}
export default page

