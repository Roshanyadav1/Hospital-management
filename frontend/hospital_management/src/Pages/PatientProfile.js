'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleIcon from '@mui/icons-material/People'
import Typography from '@mui/material/Typography'
import { Grid, Container,  Box } from '@mui/material'
import dayjs from 'dayjs'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import patientLogo from '../assets/patientlogo2.png'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useGetAppointmentQuery } from '@/services/Query'
import  { useEffect, useRef, useState } from 'react'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { Avatar, IconButton } from '@mui/material'


const colors = {
  
   secondary: '#35CFF4',
   
 };


function PatientProfile() {
   const { data: appointmentHistory, isLoading : loading, isError } = useGetAppointmentQuery()
   console.log('appointmentHistory', appointmentHistory)

   const requestAbortController = useRef(null)
   const [dateData, setDateData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [highlightedDays, setHighlightedDays] = useState(getSpecificDates())
   const [datesArray, setDatesArray] = useState([])

   var names = appointmentHistory?.data?.map(appointment => appointment?.appointment_date);
   console.log("names",names)
   useEffect(() => {
      if (dateData?.length > 0) {
         fetchHighlightedDays(initialValue)
         return () => requestAbortController.current?.abort()
      }
   }, [dateData])
   useEffect(() => {
      if (names?.length > 0) {
         setDateData(names)
      }
      if (dateData?.length > 0) {
         getSpecificDates()
      }
   }, [names?.length])
 // for holidays highlight in calender
   
   function getSpecificDates() {
      return dateData
   }



   function fakeFetch(date, { signal }) {
      return new Promise((resolve, reject) => {
         const timeout = setTimeout(() => {
            const currentMonth = dayjs(date).month()

            const daysToHighlight = getSpecificDates()
               .filter((dateStr) => dayjs(dateStr).month() === currentMonth)
               .map((dateStr) => dayjs(dateStr).date())

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
            {isSelected ? (
               <Avatar
                  key={props.day.toString()}
                  overlap='circular'
                  sx={{ bgcolor: colors.secondary }}
               >
                  <PickersDay
                     {...other}
                     outsideCurrentMonth={outsideCurrentMonth}
                     day={day}
                  />
               </Avatar>
            ) : (
               <PickersDay
                  {...other}
                  outsideCurrentMonth={outsideCurrentMonth}
                  day={day}
               />
            )}
         </>
      )
   }



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
            if (error.name !== 'AbortError') {
               throw error
            }
         })

      requestAbortController.current = controller
   }


// for showing data in current month only
   const handleMonthChange = (date) => {
      if (requestAbortController.current) {
         requestAbortController.current.abort()
      }

      setIsLoading(true)
      setHighlightedDays([])
      fetchHighlightedDays(date)
   }

   
    
   //const doctorID =  appointments?.data[0]?.doctor?.doctor_id

   const shouldDisableDate = (date) => {
      const isSunday = date.day() === 0
      const formattedDate = date.format('YYYY-MM-DD')
      const isRandomDisabledDate = datesArray?.includes(formattedDate)

      return isSunday || isRandomDisabledDate
   }



   
   const [value, setValue] = React.useState(dayjs('2022-04-17'))

   const appointmentsByDate = Array.isArray(appointmentHistory?.data)
      ? appointmentHistory?.data.reduce((acc = [], appointment = []) => {
           const date = appointment.appointment_date
           if (!acc[date]) {
              acc[date] = []
           }
           acc[date].push({
              patient_id: appointment.patient.patient_id,
              patient_name: appointment.patient.patient_name,
              doctor_name: appointment.doctor.employee.employee_name,
              disease_name: appointment.disease.disease_name,
              appointment_time: appointment.appointment_time,
              checked: appointment.checked,
           })
           return acc
        }, {})
      : []

   console.log('appointmentsByDate', appointmentsByDate)

   const appointmentsArray = Object.entries(appointmentsByDate).map(
      ([date, appointments]) => ({
         date,
         appointments,
      })
   )

   return (
      <div>
         <Container maxWidth='xl' >
            <Grid container>
               <Grid item xs={12} sm={8}>
                  <Grid container>
                     <Grid item xs={12} sm={12}>
                        <Card
                           sx={{
                              position: 'relative',
                              minWidth: 450,
                              paddingY: 6,
                              paddingX: 2,
                              marginTop: 7,
                              borderRadius: 2,
                           }}
                        >
                           <Grid container>
                              <Grid item xs={4} sm={4}>
                                 <Image
                                    priority={true}
                                    src={patientLogo}
                                    height={140}
                                    width={140}
                                    style={{ marginLeft: 15 }}
                                 />
                              </Grid>
                              <Grid item xs={8} sm={8}>
                                 <Grid container sx={{ marginLeft: 10 }}>
                                    <Grid item xs={4} sm={4}>
                                       <Typography variant='h6' component='h5'>
                                          Name
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Age
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Gender
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Address
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Blood group
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                       <Typography variant='h6' component='h5'>
                                          {
                                             appointmentHistory?.data[0]?.patient?.patient_name
                                          }
                                       {console.log("pname",appointmentHistory?.data[0]?.patient?.patient_name)}
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          18
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Male
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Harda
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          O+ve
                                       </Typography>
                                    </Grid>
                                 </Grid>
                              </Grid>
                           </Grid>
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={12} mt={2}>
                        <div style={{ display: 'flex', marginBottom: 15 }}>
                           <PeopleIcon />
                           <Typography variant='h6' color='primary'>
                              Appointment History
                           </Typography>
                        </div>
 {appointmentsArray.map(appointmentGroup => {
    const { date, appointments } = appointmentGroup;
    console.log(`Appointments for ${date}:`);
    return (
      <div key={date}>
        {appointments.map(appointment => (
          <Accordion key={appointment.appointment_time} sx={{ borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Date - {date}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={3} sm={3}>
                  <Typography variant='b1' component='h5'>
                    Doctor
                  </Typography>
                  <Typography variant='body2'>
                    {appointment.doctor_name}
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Typography variant='b1' component='h5'>
                    Disease
                  </Typography>
                  <Typography variant='body2'>
                    {appointment.disease_name}
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Typography variant='b1' component='h5'>
                    Status
                  </Typography>
                  {
                    appointment.checked === true ? (
                      <Chip label='Attended' size='small' sx={{ color: 'white', backgroundColor: '#35CFF4' }} />
                    ) : (
                      <Chip label='Not Attended' size='small' disabled />
                    )
                  }
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Button variant='contained' size='small'>
                    View Prescription
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  })}
                     </Grid>
                  </Grid>
               </Grid>

               <Grid item xs={12} sm={4}>
                  <Box
                     sx={{
                        marginLeft: 2,
                        marginTop:7,
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                     }}
                  >
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar
                                       defaultValue={initialValue}
                                       shouldDisableDate={shouldDisableDate}
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
         </Container>
      </div>
   )
}

export default PatientProfile
