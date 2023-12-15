'use client'
import { Grid, CardHeader, Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Profile = () => {
   const ProfileCard = ({ icon, title, content }) => (
      <Card bgcolor={'#fff'} borderRadius={2} boxShadow={3} margin={2}>
         <CardHeader
            avatar={icon}
            title={title}
            sx={{ display: 'flex', alignItems: 'center' }}
         />
         <Divider />
         <CardContent>
            <Typography variant='body2' p={1}>
               {content}
            </Typography>
         </CardContent>
      </Card>
   )

   return (
      <Container maxWidth='lg' p={2}>
         <Grid
            container
            boxShadow={1}
            spacing={2}
         >
            <Grid container item bgcolor={'fff'} display={'flex'} Direction='column'>
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
         <Grid container marginTop={2} spacing={2}>
            <Grid xs={12} sm={6}>
               <ProfileCard
                  icon={<PersonIcon sx={{ marginRight: 1 }} />}
                  title={
                     <Typography gutterBottom variant='h6'>
                        {' '}
                        About
                     </Typography>
                  }
                  content={`Dr ${name} is a renowned Neurosurgeon with over 20 years
                  of experience. Dr ${name} is an adept in all disciplines of Brain
                  and Spine Surgery including Brain tumor surgery among adults, as
                  well as pediatric and Neonatal, endoscopic surgery,
                  microvascular decompression surger...`}
               />
               <br />

               <ProfileCard
                  icon={<SchoolIcon sx={{ marginRight: 1 }} />}
                  title={
                     <Typography gutterBottom variant='h6'>
                        Education
                     </Typography>
                  }
                  content='F.R.C.S.(London), F.R.C.S. (Neurosurgery), CCST (UK), Spine
                   Fellowship (USA), Skull Base& Vascular Fellowship (USA)...'
               />
            </Grid>
            <Grid item xs={12} sm={6} >
               <Typography variant='h3' sx={{ textAlign: 'center' }}>
                  History
               </Typography>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls='panel1a-content'
                     id='panel1a-header'
                  >
                     <Typography variant='h6' >Date - 12/12/2023</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{marginLeft:1}}>
                     <div display='flex'>
                     <Typography>
                       Number of Appointments conducted - 
                     </Typography>
                     <Typography>
                        4 
                     </Typography>
                     </div>
                     <Typography>Patient Details</Typography>
                     <Typography></Typography>
                  </AccordionDetails>
               </Accordion>
            </Grid>
         </Grid>
      </Container>
   )
}

export default Profile
