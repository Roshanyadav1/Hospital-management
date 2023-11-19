'use client'
import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import { CardActionArea, CardMedia } from '@mui/material'
import Home from '@/app/dashboard/page'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
export default function Cards() {
   return (
      <div>
         <Container maxWidth='lg'>
            <Typography variant='h2' align='center' style={{ marginTop: '50px' }}>
               Centre of Excellence
            </Typography>
            <Grid container spacing={5} style={{ marginTop: '20px' }}>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/neurosciences-04.png'

                           // title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Centre of Neurosiences
                           <Typography variant='body2' color='text.secondary'>
                              The Department of Neurology at Care CHL
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>

               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/transplants-12.png'

                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Centre for Transplant
                           <Typography variant='body2' color='text.secondary'>
                              The centre of transparant offers a one-stop..
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/icons_critical%20care%20medicine.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Centre Care Unit
                           <Typography variant='body2' color='text.secondary'>
                              The centre caters to critical patients..
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/coe-1.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Department of Cardiology
                           <Typography variant='body2' color='text.secondary'>
                              Our department of Cardiology hosts experts..
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/orthopedics-06.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Department of Orthopaedics
                           <Typography variant='body2' color='text.secondary'>
                              The Orthopaedics Department of CARE CHL..
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/women%20and%20child%20institute-11.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Gynaecology and obstetrics
                           <Typography variant='body2' color='text.secondary'>
                              The Centreof obstetrics and Gynaecology..
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/pediatrics-07.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Paediatrics
                           <Typography variant='body2' color='text.secondary'>
                              The Department of Paediatrics at CARE CHL
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} sm={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardActionArea>
                        <CardMedia
                           sx={{
                              height: 140,
                              width: 100,
                              height: 150,
                              alignItems: 'centre',
                           }}
                           image='https://www.carehospitals.com/indore/assets/images/speciality/surgical%20oncology.png'
                           //   title="green iguana"
                        />
                     </CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Surgical Oncology
                           <Typography variant='body2' color='text.secondary'>
                              Cancer care is complex, prolonged and intense
                           </Typography>
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}
