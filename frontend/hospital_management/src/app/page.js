'use client'

import FixedContainer from '@/Pages/container'
import { Grid } from '@mui/material'
import Cards from '@/Pages/card'
import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import ShowDidease from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css'
import SteperNav from '@/components/SteperNav'
import Footer from '@/components/Footer'
import DocUpdate from '@/Pages/DoctorUpdateForm'
// for the patient page , the patient page will be the main page for the patient

function page() {
   return (
      <div>
         <SteperNav />
         <SwipeableTextMobileStepper />
         <Grid container item padding={3}>
            <FixedContainer />
         </Grid>
         <Cards />
         <ShowDidease />
         <DoctorCard />
         <Footer />
         {/* <DocUpdate /> */}
      </div>
   )
}
export default page
