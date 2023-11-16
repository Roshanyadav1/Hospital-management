"use client"
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import Container from '@mui/material/Container';
import { CardActionArea, CardMedia } from '@mui/material';
import Home from '@/app/dashboard/page';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
export default function Cards() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
        Centre of Excellence
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
                    Centre of Neurosiences
                    <Typography variant="body2" color="text.secondary"> 
                    The Department of Neurology at Care CHL
                    </Typography>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
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
           Centre for Transplant
          <Typography variant="body2" color="text.secondary"> 
          The centre of transparant offers a one-stop..
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
          Centre Care Unit
          <Typography variant="body2" color="text.secondary"> 
          The centre caters to critical patients..
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
          Department of Cardiology
          <Typography variant="body2" color="text.secondary"> 
          Our department of Cardiology hosts experts..
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
          Department of Orthopaedics
          <Typography variant="body2" color="text.secondary"> 
        The Orthopaedics Department of CARE CHL..
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
          Gynaecology and obstetrics
          <Typography variant="body2" color="text.secondary"> 
          The Centreof obstetrics and Gynaecology..
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
        Paediatrics
          <Typography variant="body2" color="text.secondary"> 
          The Department of Paediatrics at CARE CHL
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
          Centre of Neurosiences
          <Typography variant="body2" color="text.secondary"> 
          The Department of Neurology at Care CHL
          </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardActionArea>
  </Card>
</Grid>
        </Grid>
      </Container>
    </div>
  );
}