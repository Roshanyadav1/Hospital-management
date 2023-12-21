'use client'
import Chart from '@/Pages/Chart'
import Card from '@mui/material/Card'
import Badge from '@mui/material/Badge'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'

import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import { colors, themeOptions } from '@/styles/theme'



function FetchData() {
   const userRole = localStorage.getItem('user_role')
   const doctorId = localStorage.getItem('user_id')
   const { data: appointments, isError, isLoading : dataloading,  } = useGetDoctorIdQuery(doctorId, {skip: userRole === 'Doctor' ? false : true,})
   let isAdmin = userRole === 'Admin' || userRole === 'Manager' ? true : false
   const dates = appointments?.data?.map((appointment) => appointment?.appointment_date);

   const [dateData, setDateData] = useState([])
   
   var names = appointments?.data?.map(function(item) {
      return item['appointment_date'];
   });
   console.log('names', names)
   console.log('dateData', dateData)
   function getSpecificDates() {
    console.log('in this function', dateData)
      // Add your specific dates in the format 'YYYY-MM-DD'
      return dateData
   }

   useEffect(() => {
      if(names?.length > 0 ){
         // setDataMyTest(dates)
         setDateData(names)
      }
      if(dateData?.length > 0){
         getSpecificDates()
      }

   }, [names?.length])
   
   function fakeFetch(date, { signal }) {
      return new Promise((resolve, reject) => {
         const timeout = setTimeout(() => {
            // Instead of generating random dates, use the specific dates from the array
            const daysToHighlight = getSpecificDates().map((dateStr) =>
               dayjs(dateStr).date()
            )
   
            resolve({ daysToHighlight })
         }, 500)
   
         signal.onabort = () => {
            clearTimeout(timeout)
            reject(new DOMException('aborted', 'AbortError'))
         }
      })
   }
   
   const initialValue = dayjs()
   
   function ServerDay(props) {
      const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props
   
      const isSelected =
         !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0
   
      return (
         <>
         {isSelected ? <Avatar
            key={props.day.toString()}
            overlap='circular'
            sx={{ bgcolor: colors.secondary }}
         >
            <PickersDay
               {...other}
               outsideCurrentMonth={outsideCurrentMonth}
               day={day}
            />
         </Avatar> :
         <PickersDay
         {...other}
         outsideCurrentMonth={outsideCurrentMonth}
         day={day}
      />
         }
         </>
      )
   }


   const requestAbortController = React.useRef(null)
   const [isLoading, setIsLoading] = React.useState(false)
   const [highlightedDays, setHighlightedDays] = React.useState(getSpecificDates())


   const fetchHighlightedDays = (date) => {
      const controller = new AbortController()
      fakeFetch(date, {
         signal: controller.signal,
      })
         .then(({ daysToHighlight }) => {
            setHighlightedDays(daysToHighlight)
            setIsLoading(false)
         })
         .catch((error) => {
            // ignore the error if it's caused by `controller.abort`
            if (error.name !== 'AbortError') {
               throw error
            }
         })

      requestAbortController.current = controller
   }

   useEffect(() => {
      if(dateData?.length > 0){
      fetchHighlightedDays(initialValue)
      // abort request on unmount
      return () => requestAbortController.current?.abort()
      }
   }, [dateData])

   const handleMonthChange = (date) => {
      if (requestAbortController.current) {
         // make sure that you are aborting useless requests
         // because it is possible to switch between months pretty quickly
         requestAbortController.current.abort()
      }

      setIsLoading(true)
      setHighlightedDays([])
      fetchHighlightedDays(date)
   }

  


   if (dataloading) {
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
                     <Grid item xs={12} sm={8}>
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
                                    <Typography variant='h3' color='secondary'>
                                       {
                                          appointments?.data[0]?.doctor?.employee
                                             ?.employee_name
                                       }
                                    </Typography>

                                    <Typography variant='body2' color='primary'>
                                       Your dedication and expertise brighten our
                                       <br></br> hospital every day. Wishing you a
                                       wonderful day<br></br> of healing and caring
                                       for others{' '}
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
                                 {isError ? (
                                    'error'
                                 ) : (
                                    <nav aria-label='secondary mailbox folders'>
                                       <List>
                                          {appointments?.data?.map((appointment) => (
                                             <ListItem>
                                                <ListItemText
                                                   primary={
                                                      appointment.patient
                                                         .patient_name
                                                   }
                                                />
                                                <ListItemText
                                                   primary={
                                                      appointment.disease
                                                         .disease_name
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
                                                <Link
                                                   href={`dashboard/individualappointment/${appointment?.appointment_id}`}
                                                >
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
                                    </nav>
                                 )}
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
                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar
                                       defaultValue={initialValue}
                                       loading={isLoading}
                                       onMonthChange={handleMonthChange}
                                       renderLoading={() => <DayCalendarSkeleton />}
                                       slots={{
                                          day: ServerDay,
                                       }}
                                       slotProps={{
                                          day: {
                                             highlightedDays,
                                          },
                                       }}
                                    />
                                 </LocalizationProvider>
                              </Box>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </Box>
            ) : null}
         </div>
      )
   }
}

export default FetchData
