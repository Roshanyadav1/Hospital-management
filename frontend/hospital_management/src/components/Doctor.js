"use client";
import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import { CardActionArea, CardMedia } from "@mui/material";
import Home from "@/app/dashboard/page";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";


export default function Doctor() {
  return (
    <div>
      <Container  maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Our Doctors
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140, width:400, height:400 }}
                 
                    image="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Sumit Jain
                    <Typography variant="body2" color="text.secondary">
                      
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
}
