"use client"

import FixedContainer from '@/components/container'
import { Grid } from '@mui/material' 
import Cards from '@/components/card'
import SwipeableTextMobileStepper from '@/components/Steper'
import DoctorCard from '@/components/DoctorsCard'
import ShowDidease from '@/components/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css';


// for the patient page , the patient page will be the main page for the patient

function page() {

  return (
    
    <div>
      <SwipeableTextMobileStepper/>
      <Grid container item padding={3} >
        <FixedContainer />
      </Grid>
      <Cards/>
      <ShowDidease/>
      <DoctorCard/>
    </div>
  )

}
export default page

