"use client"

import Footer from '@/components/Footer'
import SteperNav from '@/components/SteperNav'
import FixedContainer from '@/components/container'
import { Grid } from '@mui/material'
import Cards from '@/components/card'
import Doctor from '@/components/Doctor'
import PatientPage from '@/components/patientPage'
import DoctorPage from '@/components/DoctorPage.js'
// for the patient page , the patient page will be the main page for the patient


function page() {


  // make a funcation that render the galaxy grafix in svg 

  
  return (
    <div>
      {/* <SteperNav />
      <Grid container item padding={3} >
        <FixedContainer />
      </Grid>
      
      <Doctor/>
      <Footer/> */}
      {/* <PatientPage /> */}
      <DoctorPage />
    </div>
  )
}


export default page

