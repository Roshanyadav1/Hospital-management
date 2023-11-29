'use client'
import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import { CardActionArea, CardMedia } from '@mui/material'
import Home from '@/app/dashboard/page'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { toast } from 'react-toastify'
import { doctorwelcome } from '@/helpers/doctorwelcome'
import { maxWidth } from '@mui/system'
import Image from 'next/image'

export default function Doctor() {
   const glass = {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.1)', // Adjust the transparency as needed
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
   }
   const showWarningToast = () => {
      toast.warning('Warning Example', { autoClose: false })
   }

   return (
      <div>
         <Container maxWidth='lg'>
            <Typography variant='h3' align='center' style={{ marginTop: '50px' }}>
               Our Doctors
            </Typography>
            <Grid container spacing={4} marginY={4}>
               {doctorwelcome.map((result, index) => (
                  <Grid
                     item
                     key={index}
                     sx={{ minWidth: 260 }}
                     xs={12}
                     md={4}
                     sm={6}
                  >
                     <Card sx={{ maxWidth: 345 }} style={glass}>
                        <CardActionArea>
                           <Image
                              height={250}
                              width={350}
                              src={result.image}
                              alt='image'
                           />

                           <CardContent>
                              <Typography gutterBottom variant='h5' component='div'>
                                 {result.name}
                                 <Typography variant='body2' color='text.secondary'>
                                    {result.specialization}
                                    <Typography
                                       variant='body3'
                                       color='text.secondary'
                                    >
                                       {result.category}
                                    </Typography>
                                 </Typography>
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                        <CardActions>
                           <Button onClick={showWarningToast} size='small'>
                              Book Appointment
                           </Button>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </div>
   )
}
