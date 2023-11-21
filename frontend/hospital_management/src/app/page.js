"use client"

import Footer from '@/components/Footer'
import SteperNav from '@/components/SteperNav'
import FixedContainer from '@/components/container'
import { Grid } from '@mui/material'
import Cards from '@/components/card'
import Doctor from '@/components/Doctor'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// for the patient page , the patient page will be the main page for the patient

function page() {

  return (
    
    <div>
       
      <SteperNav />
      <Grid container item padding={3} >
        <FixedContainer />
      </Grid>
      <Cards />
      <div style={{ margin: '2rem' }}>
        <Doctor/>
      </div>
      <Footer/>
    </div>
  )

}
export default page

