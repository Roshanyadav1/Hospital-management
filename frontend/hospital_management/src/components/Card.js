"use client"

import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import Container from '@mui/material/Container';
import { CardActionArea, CardMedia } from '@mui/material'; 
export default function Cards() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
          Doctors Name
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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