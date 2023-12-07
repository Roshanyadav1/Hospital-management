"use client"

// import DataGridTable2 from "@/Pages/DataGridTable"
import FixedContainer from '@/Pages/Container'
import { Grid } from '@mui/material' 
import Cards from '@/Pages/Card'
import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import ShowDidease from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css';
import SteperNav from '@/components/SteperNav'
import Footer  from '@/components/Footer'
// for the patient page , the patient page will be the main page for the patient

function page() {
  return (
    // <div>
    //   <DataGridTable2/>
    // </div>
    <div>
      <SteperNav />
      <SwipeableTextMobileStepper/>
      <Grid container item padding={3} >
        <FixedContainer />
      </Grid>
      <Cards/>
      <ShowDidease/>
      <DoctorCard/>
      // <Footer/>
    </div>
  )

}
export default page

