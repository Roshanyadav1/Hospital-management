import React from 'react';
import { Grid, Typography, Button,Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from "@mui/material/Link";
import { Container } from '@mui/system';

function DoctorCard() {
  return (
    <Container maxWidth="lg" p={2}>
      <Grid container direction='column' Spacing={4} >
      <Grid container 
        boxShadow={3} bgcolor="red" p={3} borderRadius={2}  >

        <Grid item >
          <Image priority={true} src="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg" height={300} width={300} />
        </Grid>

        <Grid item display="flex" flexDirection="column" justifyContent="center" p={5} padding={5} >
          <>
            <Typography gutterBottom variant="h4" component="div">
              Dr. Sumit Jain
              <Typography variant="body1" color="text.secondary">
                Pediatric Cardiology
              </Typography>
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div"  >
              <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
              Speciality
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              Laparoscopic and General Surgery
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <SchoolIcon sx={{ marginRight: 1 }} />
              Qualification
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              MBBS, MS (General Surgery)
            </Typography>


            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
              Experience
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              16 years
            </Typography>


            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Location
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              CARE CHL Hospitals, Indore
            </Typography>
          </>
        </Grid>

        <Grid item display="flex" flexDirection="" justifyContent="start" alignItems='end' >
          <Button variant="contained" style={{ padding: 20 }} >0731-47744111/4774116</Button>
        </Grid>
      </Grid>
          
   
      </Grid>
    </Container>
                                                      
  )
}
export default DoctorCard


    
       
     
