import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SchoolIcon from '@mui/icons-material/School';

function Page() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={10} md={8} lg={6} sx={{width:"100%"}} >
        <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', minHeight: 400, width:"100%",margin:"auto" }}>
          <CardMedia
            sx={{ width: 300,  height: 'auto',margin: 3 }}
            image="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg"
          />

          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'top', gap: 2, color: '#13293d' }}>
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
          
        </Card>
      </Grid>
    </Grid>
  );
}

export default Page;
