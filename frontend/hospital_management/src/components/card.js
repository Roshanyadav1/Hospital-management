"use client"
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import Container from '@mui/material/Container';
import { CardActionArea, CardMedia } from '@mui/material';
import Home from '@/app/dashboard/page';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import {welcome} from '@/helpers/welcome'
import Image from 'next/image';


export default function Cards() {
  const glass={
    position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  background: 'rgba( 245, 231, 231, 0.25)', // Adjust the transparency as needed
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  }
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant='h3' align='center' style={{ marginTop: "50px" }}>
          Centre of Excellence
        </Typography>
        <Grid container spacing={5}  style={{ marginTop: "20px" }}>
          {welcome.map((result, index) => (
            <Grid key={index} item xs={12} md={3} sm={4}>
              <Card sx={{ maxWidth: 345 }} style={glass}  >

                <CardActionArea sx={{textAlign:'center'}}>
                  <Image height={100} width={100} src={result.image} alt="image" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                      <Typography variant="body2" color="text.secondary">
                        {result.description}
                      </Typography>
                    </Typography>
                  </CardContent>
                  {/* <CardActions> */}
                    {/* <Button size="small">Share</Button> */}
                    {/* <Button size="small">Learn More</Button> */}
                  {/* </CardActions> */}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}





































