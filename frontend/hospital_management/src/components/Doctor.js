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
                      
<<<<<<< HEAD
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
=======
                      DrNB (Padiatric Cardiology)
                      <Typography variant="body3" color="text.secondary">
                       paediatric Cardiology
                       
                      </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large"> Learn More</Button>  
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140, width:400, height:400 }}

                     image="https://www.pngitem.com/pimgs/m/194-1943739_indian-doctor-hd-png-download.png"
                     
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. SK Bhandari
                    <Typography variant="body2" color="text.secondary">
                      MBBS , MD , DHC (London 1980 )
                      <Typography variant="body3" color="text.secondary">
                        Paediatrics
                      </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">Learn More</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140 , width:400, height:400 }}

                    image="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Dr. Sunil Athale
                    <Typography variant="body2" color="text.secondary">
                      MD (Medicine), DM (Neurology)
                      <Typography variant="body3" color="text.secondary">
                        Neurology
                      </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">Learn More</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140  , width:400, height:400}}

                     image="https://medlinkstaffing.com/wp-content/uploads/2019/10/iStock-1093329956.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Surbhi Tiwari verma 
                    <Typography variant="body2" color="text.secondary">
                      BDS (MUHS Nasik University)
                      <Typography variant="body3" color="text.secondary">
                     Dental
                    </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">Learn More</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140  , width:400, height:400}}

                    image="https://getwallpapers.com/wallpaper/full/a/d/9/302389.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Sushmita Mukherjee
                    <Typography variant="body2" color="text.secondary">
                      <Typography variant="body3" color="text.secondary">
                        Gynaecology & obstetrics, IVF and ,Laparoscopy
                      </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">Learn More</Button>
                   </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
               <CardMedia
        sx={{ height: 140 , width:400, height:400}}
                    image="https://www.stockvault.net/data/2015/09/01/177580/preview16.jpg"
            //   title="green iguana"
      />
          <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Dr. Ak Jinsiwale
                   <Typography variant="body2" color="text.secondary">
                     MBBS, MS (Ortho), Dip M.V.S
                     <Typography variant="body3" color="text.secondary">
                       Orthopedics
                     </Typography>
                   </Typography>
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="large">Learn More</Button>
                  </CardActions>
       </CardActionArea>
     </Card>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
>>>>>>> 1e0500cb69beacdbbfb9f63444c2076348e3e937
}
