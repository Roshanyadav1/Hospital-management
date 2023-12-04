"use client"

import FixedContainer from '@/components/container'
import { Grid } from '@mui/material' 
import Cards from '@/components/card'
import SwipeableTextMobileStepper from '@/components/Steper'
import DoctorCard from '@/components/DoctorsCard'
import ShowDidease from '@/components/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css';
import SteperNav from '@/components/SteperNav'
import Footer  from '@/components/Footer'

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

