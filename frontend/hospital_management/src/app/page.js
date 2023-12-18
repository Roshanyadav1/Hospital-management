'use client'

import FixedContainer from '@/Pages/container'
import { Grid } from '@mui/material'
 
import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import DiseaseCards from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css'
import Cards from '@/Pages/Card'
import DoctorProfile from '@/Pages/DoctorProfile'
import PatientProfile from '@/Pages/PatientProfile'

function page() {
   return (
      <div>
         <SwipeableTextMobileStepper />
         <Grid container item>
            <FixedContainer />
         </Grid>
         <Cards />
         <DiseaseCards />
         <DoctorCard />
         {/* <DoctorProfile /> */}
         {/* <PatientProfile /> */}
      </div>
   )
}
export default page
