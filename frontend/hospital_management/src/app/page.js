'use client'

import FixedContainer from '@/Pages/container'
import { Grid } from '@mui/material'
 
import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import ShowDidease from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css'
import Cards from '@/Pages/Card'

function page() {
   return (
      <div>
         <SwipeableTextMobileStepper />
         <Grid container item padding={3}>
            <FixedContainer />
         </Grid>
         <Cards />
         <ShowDidease />
         <DoctorCard />
      </div>
   )
}
export default page
