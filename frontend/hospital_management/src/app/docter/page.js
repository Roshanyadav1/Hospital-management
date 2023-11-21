
import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import { CardActionArea, CardMedia } from "@mui/material";
import Home from "@/app/dashboard/page";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

function Docter() {
  return (
    <div>
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
          </Grid>
    </div>
  )
}

export default Docter
