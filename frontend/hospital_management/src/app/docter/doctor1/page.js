import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SchoolIcon from '@mui/icons-material/School';

function page() {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} x={{ Width: "100%", }}>
          <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', minHeight: 400, width: "100%", margin: "auto" }}>

            <CardMedia
              sx={{
                width: 300,
                height: 'auto',
                minHeight: '250px',
                '@media (min-width:600px)': {
                  minHeight: '300px',
                },
                margin: 3,
              }}
              image="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg"
            //   title="green iguana"
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, color: '#13293d' }}>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Sumit Jain
                <Typography variant="body1" color="text.secondary">
                  Pediatric Cardiology
                </Typography>
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
                Speciality
                <Typography variant="body1" color="text.secondary">
                  Laparoscopic and General Surgery
                </Typography>
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                <SchoolIcon sx={{ marginRight: 1 }} />
                Qualification
                <Typography variant="body1" color="text.secondary">
                  MBBS, MS (General Surgery)
                </Typography>
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
                Experience
                <Typography variant="body1" color="text.secondary">
                  16 years
                </Typography>
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                <LocationOnIcon sx={{ marginRight: 1 }} />
                Location
                <Typography variant="body1" color="text.secondary">
                  CARE CHL Hospitals, Indore
                </Typography>
              </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 15, color: '#13293d' }}>
              <Typography gutterBottom variant="h5" component="div">
                <Button variant="contained" style={{ padding: 20 }} >0731-47744111/4774116</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div sx={{margin:5}} >
        <Typography variant="h5" color="text.secondary">
          General Surgeon In Indore
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
                Bio
                <Typography variant="body1" color="text.secondary">
                Dr. Aalok Somani is currently practising at CARE CHL Hospitals, Indore with experience of 16 years as a General Surgeon. He completed his MBBS from MGM Medical College, Indore in 2001 and completed his MS (General Surgery) from NSCB Medical College, Jabalpur from 2004 to 2005. As a surgeon, he ensures that his patients get timely correct and quality treatment.
                </Typography>
              </Typography>
      </div>


    </div>
  )
}

export default page
