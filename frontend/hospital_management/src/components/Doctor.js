'use client'
import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import { CardActionArea, CardMedia } from '@mui/material'
import Home from '@/app/dashboard/page'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { toast } from 'react-toastify'
import {doctorwelcome} from '@/helpers/doctorwelcome'
import { maxWidth } from '@mui/system'
import Image from 'next/image';

export default function Doctor() {
  const glass={
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
            <Grid container spacing={5} style={{ marginTop: '20px' }}>
               {doctorwelcome.map((result, index) => (
                  <Grid item key={index} xs={12} md={4} sm={4}>
                     <Card sx={{ maxWidth: 345 }} style={glass}>
                        <CardActionArea  sx={{textAlign:"center"}}>
                        <Image height={200} width={200} src={result.image} alt="image" />
                           {/* <CardMedia */}
                              {/* // sx={{  width: "15rem", height: "15rem",display:"flex",justifyContent:"center" }} */}
                              {/* // image={result.image} */}
                          {/* //  /> */}
                      
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
                              <Button onClick={showWarningToast} size='large'>
                                 Learn More
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
