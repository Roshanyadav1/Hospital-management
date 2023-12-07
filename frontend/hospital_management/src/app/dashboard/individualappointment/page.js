
'use client'
// import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { useGetAppointmentQuery } from '@/services/Query'
import { Box, Chip, CircularProgress, Container, Grid } from '@mui/material'
function RecipeReviewCard() {
   const { data: appointment, isLoading, isError } = useGetAppointmentQuery()
   console.log(appointment?.data)
   if (isLoading) {
      return (
         <div
            style={{
               height: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Box sx={{ display: 'flex' }}>
               <CircularProgress />
            </Box>
         </div>
      )
   } else if (isError) {
      return <p>Error: {isError}</p>
   } else {
      return (
         <Container maxWidth='sm'>
            <Grid container spacing={1}>
               {Array.isArray(appointment?.data) &&
                  appointment?.data?.map((e, i) => (
                     <Grid
                        item
                        key={i}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{ paddingBottom: '1rem' }}
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                     >
                        <Card sx={{ backgroundColor: '#C4D0DC' }}>
                           <CardHeader
                              avatar={
                                 <Avatar
                                    sx={{ bgcolor: '#13293D' }}
                                    aria-label='recipe'
                                 >
                                    {e?.doctor?.employee?.employee_name.split('')[0]}
                                 </Avatar>
                              }
                              title={e?.doctor?.employee?.employee_name}
                              subheader={
                                 e.appointment_time + '   ' + e.appointment_date
                              }
                           />
                           <CardContent>
                              <Chip
                                 label={e?.disease?.disease_name}
                                 sx={{ backgroundColor: '#7F8FA45B' }}
                              />
                           </CardContent>
                        </Card>
                     </Grid>
                  ))}
            </Grid>
         </Container>
      )
   }
}
export default RecipeReviewCard

// this is the code(page) which will open when we click on the view button as the route so adjust this code in such a way that the details shown after clicking the view will be of that particular doctor only, don't show all appointments of all doctors



