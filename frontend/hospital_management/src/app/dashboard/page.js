'use client'
import Chart from '@/Pages/Chart'
import Card from '@mui/material/Card'

import { IconButton } from '@mui/material'
import React from 'react'
import doctorImage from '@/assets/doctorIllustration.png'
import Image from 'next/image'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Link from 'next/link'
import ListItem from '@mui/material/ListItem'
import PeopleIcon from '@mui/icons-material/People'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useGetDoctorIdQuery } from '../../services/Query'
import { Container, Grid, Button, Typography, Skeleton } from '@mui/material'

function FetchData() {
   const [value, setValue] = React.useState(dayjs('2022-04-17'))
   const userRole = localStorage.getItem('user_role')
   const doctorId = localStorage.getItem('user_id')
   const {
      data: appointments,
      isError,
      isLoading,
   } = useGetDoctorIdQuery(doctorId, {
      skip: userRole === 'Doctor' ? false : true,
   })
   

   let isAdmin = userRole === 'Admin' || userRole === 'Manager' ? true : false

   if (isLoading) {
      return (
         <Container maxWidth='lg'>
            <Grid mt={3} container spacing={2}>
               {[1, 2, 3, 4, 5].map((elmnt, i) => (
                  <Grid
                     item
                     key={i}
                     xs={12}
                     sm={6}
                     md={4}
                     sx={{ paddingBottom: '1rem' }}
                  >
                     <Card sx={{ backgroundColor: '#C4D0DC' }}>
                        <Skeleton
                           variant='rectangular'
                           width='100%'
                           height={250}
                           animation='wave'
                        />
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      )
      // } else if (isError) {
      //    return <p> No Appointment Here {isError}</p>
   } else {
      return (
         <div>
            {isAdmin ? (
               <Chart />
            ) : userRole === 'Doctor' ? (
              
                 <Box>
                  <Grid container py={3}>
                     <Grid item xs={12} sm={8} >
                        <Grid container>
                           <Grid item xs={12} sm={12}>
                              <Card
                                 sx={{
                                    position: 'relative',
                                    // minWidth: 470,
                                    paddingY: 6,
                                    paddingX: 2,
                                    // marginTop: 2,
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',

                                 }}
                              >
                                 <div>
                                    <Typography variant='h3' color='primary'>
                                       Good morning,
                                    </Typography>
                                    <Typography variant='h3' color='secondary'>{appointments?.data[0]?.doctor?.employee?.employee_name}</Typography>
                                 
                                    <Typography variant='body2' color='primary'>
                                    Your dedication and expertise brighten our<br></br> hospital every day. Wishing you a wonderful day<br></br> of healing and caring for others{' '}
                                    </Typography>
                                 </div>
                                 <Image
                                    src={doctorImage}
                                    alt='Doctor illustration'
                                    height={200}
                                    style={{
                                       position: 'absolute',
                                       right: '0',
                                       top: '0',
                                    }}
                                 />
                              </Card>
                           </Grid>
                           <Grid item xs={12} sm={12} mt={2}>
                              <div style={{ display: 'flex' }}>
                                 <PeopleIcon />
                                 <Typography variant='h6' color='primary'>
                                    Upcomming appointments
                                 </Typography>
                              </div>
                              <Box
                                 sx={{
                                    width: '100%',
                                    //   minWidth: 470,
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                    marginTop: 1,
                                 }}
                              >
                                 {isError ? ("error") :(
                                 <nav aria-label='secondary mailbox folders'>
                                    <List>
                                       {appointments?.data?.map((appointment) => (
                                          <ListItem>
                                             <ListItemText
                                                primary={
                                                   appointment.patient.patient_name
                                                }
                                             />
                                             <ListItemText
                                                primary={
                                                   appointment.disease.disease_name
                                                }
                                             />
                                             <ListItemText
                                                primary={
                                                   appointment?.appointment_time
                                                }
                                             />
                                             
                                             {appointment.checked ? (
                                                <IconButton
                                                   style={{ color: '#35CFF4' }}
                                                >
                                                   <FiberManualRecordIcon />
                                                </IconButton>
                                             ) : (
                                                <IconButton disabled>
                                                   <FiberManualRecordIcon />
                                                </IconButton>
                                             )}
                                             <Link href={`dashboard/individualappointment/${appointment?.appointment_id}`}>
                                             <Button
                                                variant='contained'
                                                size='small'
                                             >
                                                view
                                             </Button>
                                             </Link>
                                             <Divider />
                                          </ListItem>
                                       ))}
                                       
                                    </List>
                                 </nav>)}
                              </Box>
                           </Grid>
                        </Grid>
                     </Grid>

                     <Grid item xs={12} sm={4}>
                     <Grid container>
                           <Grid item xs={12} sm={12} px={2}>
                           <Box
                                 sx={{
                                    width: '100%',
                                    //   minWidth: 470,
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                 }}
                                 // p={1}
                              >
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                           <DemoContainer
                              components={['DateCalendar', 'DateCalendar']}
             
                           >
                              {/* <div style={{ display: 'flex' }}>
                                 <CalendarMonthIcon />
                                 <Typography variant='h6' color='primary'>
                                    Scheduled calender
                                 </Typography>
                              </div> */}
                              <DemoItem>
                              <Typography px={1} variant='h6' color='primary'>
                                    Scheduled calender
                                 </Typography>
                                 <DateCalendar
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                 />
                              </DemoItem>
                           </DemoContainer>
                        </LocalizationProvider>
                        </Box>
                        </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
              </Box>
             
            ) : 
            null}
         </div>
      )
   }
}

export default FetchData
