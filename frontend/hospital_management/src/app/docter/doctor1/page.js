import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from "@mui/material/Link";
import { Container } from '@mui/system';

function DoctorCard() {
  return (
    <Container maxWidth={'lg'}>
      <Grid  container spacing={4} boxShadow={3} bgcolor="white" p={3} borderRadius={2}>

        <Grid item >
          <Image priority={true} src="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg" height={300} width={300} />
        </Grid>

        <Grid item display="flex" flexDirection="column" justifyContent="center" p={5} padding={5} >
          <>
            <Typography   gutterBottom variant="h4" component="div">
              Dr. Sumit Jain
              <Typography variant="body1" color="text.secondary">
                Pediatric Cardiology
              </Typography>
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div"  >
              <AccessTimeFilledIcon  sx={{ marginRight: 1 }}/>
              Speciality
              </Typography>
              <Typography variant="body1"color="text.secondary" sx={{marginLeft:4}} >
                Laparoscopic and General Surgery
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <SchoolIcon sx={{ marginRight: 1 }} />
              Qualification
              </Typography>
              <Typography variant="body1" color="text.secondary"sx={{marginLeft:4}} >
                MBBS, MS (General Surgery)
              </Typography>
            

            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
              Experience
              </Typography>
              <Typography variant="body1" color="text.secondary"sx={{marginLeft:4}} >
                16 years
              </Typography>
            

            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Location
              </Typography>
              <Typography variant="body1" color="text.secondary"sx={{marginLeft:4}} >
                CARE CHL Hospitals, Indore
              </Typography>
          </>
        </Grid>

        <Grid item display="flex" flexDirection="" justifyContent="start" alignItems='end' >
          <Button variant="contained" style={{ padding: 20 }} >0731-47744111/4774116</Button>
        </Grid>
      </Grid>

          {/* <Grid sx={{ margin: 4 ,display:"flex" ,flexDirection:"row"}}>
          <Link style={{textDecoration:'none'}} href="/docter/doctor1"  >
            <Typography variant="body1" color="#13293D" sx={{ padding: 1}}>
            <HomeIcon sx={{ marginRight: 1 }} />
             Doctors
            </Typography>
            </Link>

          <Typography variant="body1" color="text.secondary">
             | Sumit Jain
              </Typography>
          </Grid> */}

      <Grid sx={{ margin: 5 }} >
        <Typography variant="h5" color="text.secondary">
          General Surgeon In Indore
        </Typography>
               <br/>
        <Typography gutterBottom variant="h6" component="div" fontSize={25}>
          Bio
          </Typography>
      
          <Typography variant="body1" color="text.secondary" >
            Dr. Aalok Somani is currently practising at CARE CHL Hospitals, Indore with experience of 16 years as a General Surgeon. He completed his MBBS from MGM Medical College, Indore in 2001 and completed his MS (General Surgery) from NSCB Medical College, Jabalpur from 2004 to 2005. As a surgeon, he ensures that his patients get timely correct and quality treatment.
        </Typography>
      </Grid>
  
          
      <Grid sx={{ margin: 5 }} >
        <Typography gutterBottom variant="h6" component="div" fontSize={25}>
        Fields of Experience
          </Typography>
      
          <Link style={{
                textDecoration:'none'
              }} href="/docter/doctor1" passHref>
            <Typography variant="body1" color="#13293D" sx={{ padding: 1,outline:"none" }}>
              Centre for Neurosciences
            </Typography>
          </Link>

              <Link style={{
                textDecoration:'none'
              }} href="/docter/doctor1" > 
            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
              Centre for Transplant
            </Typography>
            </Link>

              <Link style={{
                textDecoration:'none'
              }} href="/docter/doctor1" >
            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
              Critical Care Unit
            </Typography>
            </Link>

             <Link style={{
                textDecoration:'none'
              }} href="/docter/doctor1"  >
            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
              Department of Cardiology
            </Typography>
            </Link>

              <Link style={{
                textDecoration:'none'
              }} href="/docter/doctor1">
            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
              Department of Orthopedics
            </Typography>
            </Link>
      </Grid>

      <Grid sx={{ margin: 5 }} >
        <Typography gutterBottom variant="h6" component="div" fontSize={26}>
        Education
          </Typography>
            <Typography variant="body1" color="#13293D" sx={{ padding: 1,outline:"none" }}>
            MBBS 1995-2000 (MGM, Indore)
            </Typography>

            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
             Internship 2002-2001 (MYH, Indore)
            </Typography>
          
            <Typography variant="body1" color="#13293D" sx={{
              padding: 1
            }}>
              MS (Surgery) 2002-2005 (NSCB Medical College, Jabalpur)
            </Typography>
            
      </Grid>
      <Grid sx={{ margin: 5 }} >
        <Typography gutterBottom variant="h6" component="div" fontSize={26}>
        Languages Known
          </Typography>
            <Typography variant="body1" color="#13293D" sx={{ padding: 1,outline:"none" }} >
            Hindi & English
            </Typography>
      </Grid>
      <Grid sx={{ margin: 5 }} >
        <Typography gutterBottom variant="h6" component="div" fontSize={26}>
        Past Positions
          </Typography>
            <Typography variant="body1" color="#13293D" sx={{ padding: 1,outline:"none" }} >
            Sr. Registrar Bombay Hospital, Indore
            </Typography>
            <Typography variant="body1" color="#13293D" sx={{ padding: 1,outline:"none" }} >
            Assistant Professor SAIMS, Indore
            </Typography>
      </Grid>
         
         <Grid  item display="flex" justifyContent="center" alignItems='center'>
         <Typography gutterBottom variant="body1" component="div" fontSize={26}>
         Still Have a Question?
          </Typography>
         </Grid>

         <Typography variant="body1" color="#13293D" sx={{ padding: 1,alignItems:"center",textAlign:"center"}} >
          If you cannot find answers to your queries, please fill out the enquiry form or call the number below. We will contact you shortly.
          If you cannot find answers to your queries, please fill out the enquiry form or call the number below. We will contact you shortly.
          If you cannot find answers to your queries, please fill out the enquiry form or call the number below. We will contact you shortly.
            </Typography>

         <Grid item display="flex" flexDirection="" justifyContent="center" alignItems='center' margin={3} >
          <Button variant="contained" style={{ padding: 10 }} >0731-47744111/4774116</Button>
        </Grid>
    </Container>
  )
}
export default DoctorCard
