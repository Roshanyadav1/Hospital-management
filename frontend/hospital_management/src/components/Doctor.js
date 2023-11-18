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
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Our Doctors
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4} sm={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140 }}

                  //   image="/static/images/cards/contemplative-reptile.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Simran Jain
                    <Typography variant="body2" color="text.secondary">
                      DNB (Paediatrics), MNAMS,
                      DrNB (Padiatric Cardiology)
                      <Typography variant="body3" color="text.secondary">
                       paediatric Cardiology
                       (Interventional)
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
                  sx={{ height: 140 }}

                  //   image="/static/images/cards/contemplative-reptile.jpg"
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
                  sx={{ height: 140 }}

                  //   image="/static/images/cards/contemplative-reptile.jpg"
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
                  sx={{ height: 140 }}

                  //   image="/static/images/cards/contemplative-reptile.jpg"
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
                  sx={{ height: 140 }}

                  //   image="/static/images/cards/contemplative-reptile.jpg"
                  //   title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Sushmita Mukherjee
                    <Typography variant="body2" color="text.secondary">
                      MBBS, DOG, MD, DNB, FICOG
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
        sx={{ height: 140 }}
                 //   image="/static/images/cards/contemplative-reptile.jpg"
            //   title="green iguana"
      />
          <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Dr. Ak Jinsiwale
                   <Typography variant="body2" color="text.secondary">
                     MBBS, MS (Ortho), Dip M.V.S
                     (Sweden), F.S.O.S
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
