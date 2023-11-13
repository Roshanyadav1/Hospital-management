import Footer from '@/components/Footer'
import SteperNav from '@/components/SteperNav'
import FixedContainer from '@/components/container'
import { Grid } from '@mui/material'
 


// for the patient page , the patient page will be the main page for the patient
function page({ pageProps }) {

  return (
    <div>
      <SteperNav />
      <Grid container item padding={3} >
      <FixedContainer />
      </Grid>
      <Footer/>
    </div>
  )
  
}
export default page



