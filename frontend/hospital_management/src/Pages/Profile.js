'use client'
import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Profile = () => {
   return (
      <Container maxWidth='lg' p={2}>
         <Grid
            container
            maxWidth='lg'
            boxShadow={1}
            spacing={5}
            display='flex'
            Direction='column'
         >
            <Grid item bgcolor={'fff'} display={'flex'} Direction='column'>
               {
                  //   isLoading ? (<>
                  //      <Skeleton
                  //         sx={{ border: '1px solid #e0e0e0' }}
                  //         variant="circular" height={150} width={150} />
                  //   </>) : (<>
                  <Image
                     priority={true}
                     src='https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg'
                     height={140}
                     width={140}
                     style={{ borderRadius: '50%', padding: 10 }}
                  />
                  // </>)
               }
               <Grid
                  item
                  xl={8}
                  // sm={8}
                  // bgcolor={"rebeccapurple"}
                  display='flex'
                  Direction='column'
                  justifyContent='center'
                  margin={0}
                  p={{ xs: 2, sm: 5 }}
                  gap={10}
               >
                  <>
                     <Typography gutterBottom variant='h4' component='div'>
                        Name
                        <Typography variant='body1' color='text.secondary'>
                           EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc
                        </Typography>
                     </Typography>
                  </>
               </Grid>
            </Grid>
         </Grid>
         <Grid container>
            <Grid item xs={12} sm={12} md={6}>
               <Card sx={{ maxWidth: 600, margin:2, }}>
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='div'>
                        Lizard
                     </Typography>
                     <Typography variant='body2' color='text.secondary'>
                        Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size='small'>Share</Button>
                     <Button size='small'>Learn More</Button>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}></Grid>
         </Grid>
      </Container>
   )
}

export default Profile
