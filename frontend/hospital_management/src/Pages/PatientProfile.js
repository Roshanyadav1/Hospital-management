'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import PeopleIcon from '@mui/icons-material/People'
import Typography from '@mui/material/Typography'
import { Grid, Container, Box, Skeleton } from '@mui/material'
import dayjs from 'dayjs'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
// import patientLogo from '../assets/patient.png'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useGetAppointmentQuery } from '@/services/Query'
import { useEffect, useRef, useState } from 'react'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { colors } from './../styles/theme'
import { usePatientViewQuery } from '@/services/Query'
import Avatar from '@mui/material/Avatar'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'

import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import Tooltip from '@mui/material/Tooltip'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
   },
   '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
   },
}))

function PatientProfile() {
   // eslint-disable-next-line no-unused-vars
   const { data: appointmentHistory, isError } = useGetAppointmentQuery()
   console.log('object', appointmentHistory)

   const { data: patientInfo, isLoading: infoLoading } = usePatientViewQuery()
   console.log('pi', patientInfo)
   console.log('pname', patientInfo?.data[0].patient_name)

   const requestAbortController = useRef(null)
   const [dateData, setDateData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [highlightedDays, setHighlightedDays] = useState(getSpecificDates())
   const [datesArray] = useState([])

   //for dialog
   const [open, setOpen] = React.useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   var names = appointmentHistory?.data?.map(
      (appointment) => appointment?.appointment_date
   )
   console.log('names', names)
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
                  // eslint-disable-next-line no-undef
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
      const formattedDate = date.format('DD-MM-YYYY')
      const isRandomDisabledDate = datesArray?.includes(formattedDate)

      return isSunday || isRandomDisabledDate
   }

   // const [] = React.useState(dayjs('2022-04-17'))

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

   if (infoLoading) {
      return (
         <Container maxWidth='lg'>
            <Grid container spacing={2} p={2}>
               <Grid item xs={12} md={12} lg={8}>
                  <Card
                     sx={{
                        width: '742px',
                        borderRadius: 2,
                     }}
                  >
                     <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={337}
                        animation='wave'
                     />
                  </Card>
               </Grid>
               <Grid item xs={12} md={4} lg={4}>
                  <Card
                     sx={{
                        width: '100%',
                        // marginLeft: 0.5,
                        borderRadius: 2,
                        height: 337,
                     }}
                  >
                     <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={358}
                        animation='wave'
                     />
                  </Card>
               </Grid>
               <Grid item xs={12} md={8} sm={12} lg={12}>
                  <Card
                     sx={{
                        width: '100%',
                        borderRadius: 2,
                        marginTop: 5,
                     }}
                  >
                     <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={180}
                        animation='wave'
                     />
                  </Card>
               </Grid>
            </Grid>
         </Container>
      )
   } else {
      return (
         <div>
            <Container maxWidth='lg'>
               <Grid container spacing={2} p={2}>
                  <Grid item xs={12} md={12} lg={8}>
                     <Card
                        sx={{
                           position: 'relative',
                           minWidth: 320,
                           minHeight: 335,
                           paddingY: 10,
                           paddingX: 2,
                           borderRadius: 2,
                           boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                        }}
                     >
                        <Grid container>
                           <Grid item xs={4} sm={4}>
                              <Avatar
                                 alt='Patient Avatar'
                                 sx={{ width: 140, height: 140, marginLeft: 3 }}
                              />
                           </Grid>
                           <Grid item xs={12} sm={8}>
                              <Grid container>
                                 <Grid item xs={4} sm={4} marginTop={3}>
                                    <Typography variant='h6' component='h5'>
                                       Name
                                    </Typography>
                                    <Typography variant='h6' component='h5'>
                                       Phone
                                    </Typography>
                                    <Typography variant='h6' component='h5'>
                                       Address
                                    </Typography>
                                    <Typography variant='h6' component='h5'>
                                       Email
                                    </Typography>
                                 </Grid>
                                 <Grid item xs={4} sm={4} marginTop={3}>
                                    <Typography variant='h6' component='h5'>
                                       <div
                                          style={{
                                             maxWidth: '300px',
                                             whiteSpace: 'nowrap',
                                             overflow: 'hidden',
                                             textOverflow: 'ellipsis',
                                          }}
                                       >
                                          {patientInfo?.data[0].patient_name ||
                                             'Loading. . .'}
                                       </div>
                                    </Typography>
                                    {/* <Typography variant='h6' component='h5'>
                                         {patientInfo?.data[0].patient_age
                                                 || 'loading...'}
                                       </Typography> */}
                                    <Typography variant='h6' component='h5'>
                                       <div
                                          style={{
                                             maxWidth: '300px',
                                             whiteSpace: 'nowrap',
                                          }}
                                       >
                                          {patientInfo?.data[0].patient_mobile ||
                                             'Loading . . .'}
                                       </div>
                                    </Typography>
                                    <Typography variant='h6' component='h5'>
                                       <div
                                          style={{
                                             maxWidth: '300px',
                                             whiteSpace: 'nowrap',
                                          }}
                                       >
                                          {patientInfo?.data[0].patient_address ||
                                             'Loading . . .'}
                                       </div>
                                    </Typography>
                                    <Typography variant='h6' component='h5'>
                                       <div
                                          style={{
                                             maxWidth: '300px',
                                             whiteSpace: 'nowrap',
                                          }}
                                       >
                                          {patientInfo?.data[0].patient_email ||
                                             'Loading . . .'}
                                       </div>
                                    </Typography>
                                 </Grid>
                              </Grid>
                           </Grid>
                        </Grid>
                     </Card>
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                     <Box
                        sx={{
                           width: '100%',
                           bgcolor: 'background.paper',
                           borderRadius: 2,
                           boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
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

                  <Grid item xs={12} md={8} sm={12} lg={12}>
                     <div style={{ display: 'flex', marginTop: 20 }}>
                        <PeopleIcon style={{ marginRight: '10px' }} />
                        <Typography variant='h6' color='primary'>
                           Appointment History
                        </Typography>
                     </div>
                     {appointmentsArray.map((appointmentGroup) => {
                        const { date, appointments } = appointmentGroup
                        console.log(`Appointments for ${date}:`)
                        return (
                           <div key={date}>
                              {appointments.map((appointment) => (
                                 <Accordion
                                    key={appointment.appointment_time}
                                    sx={{ borderRadius: 2 }}
                                 >
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                    >
                                       <Typography>Date - {date}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <Grid container>
                                          <Grid item xs={4} sm={4}>
                                             <Typography variant='b1' component='h5'>
                                                Doctor
                                             </Typography>
                                             <Typography variant='body2'>
                                                {appointment.doctor_name}
                                             </Typography>
                                          </Grid>
                                          <Grid item xs={4} sm={4}>
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
                                             {appointment.checked === true ? (
                                                <Chip
                                                   label='Attended'
                                                   size='small'
                                                   sx={{
                                                      color: 'white',
                                                      backgroundColor: '#35CFF4',
                                                   }}
                                                />
                                             ) : (
                                                <Chip
                                                   label='Not Attended'
                                                   size='small'
                                                   disabled
                                                />
                                             )}
                                          </Grid>
                                          <Grid item xs={1} sm={1}>
                                             <Tooltip title='View Prescription'>
                                                <Button
                                                   variant='contained'
                                                   size='small'
                                                   onClick={handleClickOpen}
                                                >
                                                   <RemoveRedEyeIcon />
                                                </Button>
                                             </Tooltip>
                                             <BootstrapDialog
                                                onClose={handleClose}
                                                aria-labelledby='customized-dialog-title'
                                                open={open}
                                             >
                                                <DialogTitle
                                                   sx={{ m: 0, p: 2 }}
                                                   id='customized-dialog-title'
                                                >
                                                  Prescription
                                                </DialogTitle>
                                                <IconButton
                                                   aria-label='close'
                                                   onClick={handleClose}
                                                   sx={{
                                                      position: 'absolute',
                                                      right: 8,
                                                      top: 8,
                                                      color: (theme) =>
                                                         theme.palette.grey[500],
                                                   }}
                                                >
                                                   <CloseIcon />
                                                </IconButton>
                                                <DialogContent dividers>
                                                   <Typography gutterBottom>
                                                      Cras mattis consectetur purus
                                                      sit amet fermentum. Cras justo
                                                      odio, dapibus ac facilisis in,
                                                      egestas eget quam. Morbi leo
                                                      risus, porta ac consectetur ac,
                                                      vestibulum at eros.
                                                   </Typography>
                                                   <Typography gutterBottom>
                                                      Praesent commodo cursus magna,
                                                      vel scelerisque nisl
                                                      consectetur et. Vivamus
                                                      sagittis lacus vel augue
                                                      laoreet rutrum faucibus dolor
                                                      auctor.
                                                   </Typography>
                                                   <Typography gutterBottom>
                                                      Aenean lacinia bibendum nulla
                                                      sed consectetur. Praesent
                                                      commodo cursus magna, vel
                                                      scelerisque nisl consectetur
                                                      et. Donec sed odio dui. Donec
                                                      ullamcorper nulla non metus
                                                      auctor fringilla.
                                                   </Typography>
                                                </DialogContent>
                                                <DialogActions>
                                                   <Button
                                                      autoFocus
                                                      onClick={handleClose}
                                                   >
                                                      Download
                                                   </Button>
                                                </DialogActions>
                                             </BootstrapDialog>
                                          </Grid>
                                       </Grid>
                                    </AccordionDetails>
                                 </Accordion>
                              ))}
                           </div>
                        )
                     })}
                  </Grid>
               </Grid>
            </Container>
         </div>
      )
   }
}
export default PatientProfile
