 'use client'
// import Chart from '@/Pages/Chart'
// import Card from '@mui/material/Card'
// import Badge from '@mui/material/Badge'
// import { PickersDay } from '@mui/x-date-pickers/PickersDay'
// import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'
// import { Avatar, IconButton } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import doctorImage from '@/assets/doctorIllustration.png'
// import Image from 'next/image'
// import dayjs from 'dayjs'
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import Link from 'next/link'
// import ListItem from '@mui/material/ListItem'
// import PeopleIcon from '@mui/icons-material/People'
// import ListItemText from '@mui/material/ListItemText'
// import Divider from '@mui/material/Divider'
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// import { useGetDoctorIdQuery } from '../../services/Query'
// import { Container, Grid, Button, Typography, Skeleton } from '@mui/material'
// import { colors, themeOptions } from '@/styles/theme'
// function FetchData() {
//    const userRole = localStorage.getItem('user_role')
//    const doctorId = localStorage.getItem('user_id')
//    const { data: appointments, isError, isLoading : dataloading,  } = useGetDoctorIdQuery(doctorId, {skip: userRole === 'Doctor' ? false : true,})
//    let isAdmin = userRole === 'Admin' || userRole === 'Manager' ? true : false
//    const dates = appointments?.data?.map((appointment) => appointment?.appointment_date);

//    const [dateData, setDateData] = useState([])
   
//    var names = appointments?.data?.map(function(item) {
//       return item['appointment_date'];
//    });
//    console.log('names', names)
//    console.log('dateData', dateData)
//    function getSpecificDates() {
//     console.log('in this function', dateData)
//       // Add your specific dates in the format 'YYYY-MM-DD'
//       return dateData
//    }

//    useEffect(() => {
//       if(names?.length > 0 ){
//          // setDataMyTest(dates)
//          setDateData(names)
//       }
//       if(dateData?.length > 0){
//          getSpecificDates()
//       }

//    }, [names?.length])
   
//    function fakeFetch(date, { signal }) {
//       return new Promise((resolve, reject) => {
//          const timeout = setTimeout(() => {
//             // Instead of generating random dates, use the specific dates from the array
//             const daysToHighlight = getSpecificDates().map((dateStr) =>
//                dayjs(dateStr).date()
//             )
   
//             resolve({ daysToHighlight })
//          }, 500)
   
//          signal.onabort = () => {
//             clearTimeout(timeout)
//             reject(new DOMException('aborted', 'AbortError'))
//          }
//       })
//    }
   
//    const initialValue = dayjs()
   
//    function ServerDay(props) {
//       const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props
   
//       const isSelected =
//          !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0
   
//       return (
//          <>
//          {isSelected ? <Avatar
//             key={props.day.toString()}
//             overlap='circular'
//             sx={{ bgcolor: colors.secondary }}
//          >
//             <PickersDay
//                {...other}
//                outsideCurrentMonth={outsideCurrentMonth}
//                day={day}
//             />
//          </Avatar> :
//          <PickersDay
//          {...other}
//          outsideCurrentMonth={outsideCurrentMonth}
//          day={day}
//       />
//          }
//          </>
//       )
//    }


//    const requestAbortController = React.useRef(null)
//    const [isLoading, setIsLoading] = React.useState(false)
//    const [highlightedDays, setHighlightedDays] = React.useState(getSpecificDates())


//    const fetchHighlightedDays = (date) => {
//       const controller = new AbortController()
//       fakeFetch(date, {
//          signal: controller.signal,
//       })
//          .then(({ daysToHighlight }) => {
//             setHighlightedDays(daysToHighlight)
//             setIsLoading(false)
//          })
//          .catch((error) => {
//             if (error.name !== 'AbortError') {
//                throw error
//             }
//          })

//       requestAbortController.current = controller
//    }

//    useEffect(() => {
//       if(dateData?.length > 0){
//       fetchHighlightedDays(initialValue)
//       // abort request on unmount
//       return () => requestAbortController.current?.abort()
//       }
//    }, [dateData])

//    const handleMonthChange = (date) => {
//       if (requestAbortController.current) {
//          requestAbortController.current.abort()
//       }

//       setIsLoading(true)
//       setHighlightedDays([])
//       fetchHighlightedDays(date)
//    }

  


//    if (dataloading) {
//       return (
//          <Container maxWidth='lg'>
//             <Grid mt={3} container spacing={2}>
//                {[].map((elmnt, i) => (
//                   <Grid
//                      item
//                      key={i}
//                      xs={12}
//                      sm={6}
//                      md={4}
//                      sx={{ paddingBottom: '1rem' }}
//                   >
//                      <Card sx={{ backgroundColor: '#C4D0DC' }}>
//                         <Skeleton
//                            variant='rectangular'
//                            width='100%'
//                            height={250}
//                            animation='wave'
//                         />
//                      </Card>
//                   </Grid>
//                ))}
//             </Grid>
//          </Container>
//       )
//       // } else if (isError) {
//       //    return <p> No Appointment Here {isError}</p>
//    } else {
//       return (
//          <div>
//             {isAdmin ? (
//                <Chart />
//             ) : userRole === 'Doctor' ? (
//                <Box>
//                   <Grid container py={3}>
//                      <Grid item xs={12} sm={8}>
//                         <Grid container>
//                            <Grid item xs={12} sm={12}>
//                               <Card
//                                  sx={{
//                                     position: 'relative',
//                                     // minWidth: 470,
//                                     paddingY: 6,
//                                     paddingX: 2,
//                                     // marginTop: 2,
//                                     bgcolor: 'background.paper',
//                                     borderRadius: 2,
//                                     boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//                                  }}
//                               >
//                                  <div>
//                                     <Typography variant='h3' color='primary'>
//                                        Good morning,
//                                     </Typography>
//                                     <Typography variant='h3' color='secondary'>
//                                        {
//                                           appointments?.data[0]?.doctor?.employee
//                                              ?.employee_name
//                                        }
//                                     </Typography>

//                                     <Typography variant='body2' color='primary'>
//                                        Your dedication and expertise brighten our
//                                        <br></br> hospital every day. Wishing you a
//                                        wonderful day<br></br> of healing and caring
//                                        for others{' '}
//                                     </Typography>
//                                  </div>
//                                  <Image
//                                     src={doctorImage}
//                                     alt='Doctor illustration'
//                                     height={200}
//                                     style={{
//                                        position: 'absolute',
//                                        right: '0',
//                                        top: '0',
//                                     }}
//                                  />
//                               </Card>
//                            </Grid>
//                            <Grid item xs={12} sm={12} mt={2}>
//                               <div style={{ display: 'flex' }}>
//                                  <PeopleIcon />
//                                  <Typography variant='h6' color='primary'>
//                                     Upcomming appointments
//                                  </Typography>
//                               </div>
//                               <Box
//                                  sx={{
//                                     width: '100%',
//                                     //   minWidth: 470,
//                                     bgcolor: 'background.paper',
//                                     borderRadius: 2,
//                                     boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//                                     marginTop: 1,
//                                  }}
//                               >
//                                  {isError ? (
//                                     'error'
//                                  ) : (
//                                     <nav aria-label='secondary mailbox folders'>
//                                        <List>
//                                           {appointments?.data?.map((appointment) => (
//                                              // eslint-disable-next-line react/jsx-key
//                                              <ListItem>
//                                                 <ListItemText
//                                                    primary={
//                                                       appointment.patient
//                                                          .patient_name
//                                                    }
//                                                 />
//                                                 <ListItemText
//                                                    primary={
//                                                       appointment.disease
//                                                          .disease_name
//                                                    }
//                                                 />
//                                                 <ListItemText
//                                                    primary={
//                                                       appointment?.appointment_time
//                                                    }
//                                                 />

//                                                 {appointment.checked ? (
//                                                    <IconButton
//                                                       style={{ color: '#35CFF4' }}
//                                                    >
//                                                       <FiberManualRecordIcon />
//                                                    </IconButton>
//                                                 ) : (
//                                                    <IconButton disabled>
//                                                       <FiberManualRecordIcon />
//                                                    </IconButton>
//                                                 )}
//                                                 <Link
//                                                    href={`dashboard/individualappointment/${appointment?.appointment_id}`}
//                                                 >
//                                                    <Button
//                                                       variant='contained'
//                                                       size='small'
//                                                    >
//                                                       view
//                                                    </Button>
//                                                 </Link>
//                                                 <Divider />
//                                              </ListItem>
//                                           ))}
//                                        </List>
//                                     </nav>
//                                  )}
//                               </Box>
//                            </Grid>
//                         </Grid>
//                      </Grid>

//                      <Grid item xs={12} sm={4}>
//                         <Grid container>
//                            <Grid item xs={12} sm={12} px={2}>
//                               <Box
//                                  sx={{
//                                     width: '100%',
//                                     //   minWidth: 470,
//                                     bgcolor: 'background.paper',
//                                     borderRadius: 2,
//                                     boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//                                  }}
//                                  // p={1}
//                               >
//                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DateCalendar
//                                        defaultValue={initialValue}
//                                        loading={isLoading}
//                                        onMonthChange={handleMonthChange}
//                                        renderLoading={() => <DayCalendarSkeleton />}
//                                        slots={{
//                                           day: ServerDay,
//                                        }}
//                                        slotProps={{
//                                           day: {
//                                              highlightedDays,
//                                           },
//                                        }}
//                                     />
//                                  </LocalizationProvider>
//                               </Box>
//                            </Grid>
//                         </Grid>
//                      </Grid>
//                   </Grid>
//                </Box>
//             ) : null}
//          </div>
//       )
//    }
// }

// export default FetchData



// FetchData.js
// import DoctorDash from './../../components/DoctorDashboard';
// import Chart from './../../components/Chart';

// function FetchData() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const userRole = localStorage.getItem('user_role');

//   return (
//     <div>
//       {userRole === 'Doctor' && <DoctorDash/>}
//       {(userRole === 'Admin' || userRole === 'Manager') && <Chart />}
//     </div>
//   );
// }

// export default FetchData;



'use client'
import Chart from '@/Pages/Chart'
import Card from '@mui/material/Card'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'
// import datanotfound from '@/assets/dataNotFound.gif'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import doctorImage from '@/assets/doctorIllustration.png'
import Image from 'next/image'
import dayjs from 'dayjs'
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
import { useGetDoctorIdQuery } from '../../services/Query'
import { Container, Grid, Button, Typography, Skeleton } from '@mui/material'
import { colors, themeOptions } from '@/styles/theme'
import { styled } from '@mui/material/styles'

import '@/styles/container.css'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import { useAppointmentUpdateMutation } from '@/services/Query'
import { toast } from 'react-toastify'
import { useGetAppointmentInfoQuery } from '@/services/Query'
import {useGetEmployeeDetailsQuery} from './../../services/Query'
import { useParams } from 'next/navigation'
import { Chip, Switch, Input, CardHeader, CardContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
   },
   '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
   },
}))

const fadeInUp = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
}

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
}

function FetchData() {
   const userRole = localStorage.getItem('user_role')
   const doctorId = localStorage.getItem('user_id')
   const {
      data: appointments,
      isError,
      isLoading: dataloading,
   } = useGetDoctorIdQuery(doctorId, { skip: userRole === 'Doctor' ? false : true })
   let isAdmin = userRole === 'Admin' || userRole === 'Manager' ? true : false
   const dates = appointments?.data?.map(
      (appointment) => appointment?.appointment_date
   )

   console.log("jhfit", appointments?.data[0]?.appointment_id)

   const [dateData, setDateData] = useState([])

   var names = appointments?.data?.map(function (item) {
      return item['appointment_date']
   })

   function getSpecificDates() {
      return dateData
   }

   useEffect(() => {
      if (names?.length > 0) {
         setDateData(names)
      }
      if (dateData?.length > 0) {
         getSpecificDates()
      }
   }, [names?.length])

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
            if (error.name !== 'AbortError') {
               throw error
            }
         })

      requestAbortController.current = controller
   }

   useEffect(() => {
      if (dateData?.length > 0) {
         fetchHighlightedDays(initialValue)
         return () => requestAbortController.current?.abort()
      }
   }, [dateData])

   const handleMonthChange = (date) => {
      if (requestAbortController.current) {
         requestAbortController.current.abort()
      }

      setIsLoading(true)
      setHighlightedDays([])
      fetchHighlightedDays(date)
   }

   // for changing time format
   function formatTime(timeString) {
      const [hours, minutes] = timeString.split(':')
      return `${hours}:${minutes}`
   }

   const disabledDates = ['2023-12-05', '2023-12-25', '2023-12-30']

   const shouldDisableDate = (date) => {
      const isSunday = date.day() === 0
      const formattedDate = date.format('DD-MM-YYYY')
      const isRandomDisabledDate = disabledDates.includes(formattedDate)

      return isSunday || isRandomDisabledDate
   }

   ///////////////////////////////////////////////////////

   const  appointment_id  = appointments?.data[0]?.appointment_id
   const { data: appointmentInfo } = useGetAppointmentInfoQuery(appointment_id)
   console.log('dfs', appointmentInfo)
   const label = { inputProps: { 'aria-label': 'Size switch demo' } }

   const [isSwitchOn, setIsSwitchOn] = useState(false)
   const [selectedFile, setSelectedFile] = useState(null)
   const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)
   const [isFileChosenError, setIsFileChosenError] = useState(false)

   const [appointmentUpdate] = useAppointmentUpdateMutation()

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0])
   }
   const handleSubmit = async () => {
      if (selectedFile) {
         const formData = new FormData()
         formData.append('file', selectedFile)

         try {
            const response = await fetch('/api/s3-upload', {
               method: 'POST',
               body: formData,
            })

            if (response.ok) {
               setIsSuccessDialogOpen(true)
               setIsFileChosenError(false)
            } else {
               console.error('Failed to upload image')
            }
         } catch (error) {
            console.error('Error uploading image:', error)
         }
      } else {
         setIsFileChosenError(true)
      }
   }

   const handleDialogClose = () => {
      setIsSuccessDialogOpen(false)
      setSelectedFile(null)
      setIsFileChosenError(false)
   }

   const handleSwitchChange = async () => {
      try {
         const obj = {
            id: appointmentInfo?.data[0]?.appointment_id,
            pro: {
               checked: !isSwitchOn,
            },
         }
         await appointmentUpdate(obj)
         toast.success('Status Changed Successfully')
      } catch (error) {
         toast.error(JSON.stringify(error))
      }
      setIsSwitchOn(!isSwitchOn)
   }

   const [open, setOpen] = React.useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
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
                                    <div
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                       }}
                                    >
                                       <Image
                                          src={datanotfound}
                                          alt='data not found'
                                          height={150}
                                          width={150}
                                       />
                                       <Typography variant='b1'>
                                          Data Not found
                                       </Typography>
                                    </div>
                                 ) : (
                                    <nav aria-label='secondary mailbox folders'>
                                       <List>
                                          {appointments?.data?.map((appointment) => (
                                             // eslint-disable-next-line react/jsx-key
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
                                                      formatTime(
                                                         appointment.appointment_time
                                                      ) +
                                                      ' / ' +
                                                      appointment.appointment_date
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
                                                

                                                <Button
                                                   variant='contained'
                                                   size='small'
                                                   onClick={handleClickOpen}
                                                >
                                                   view
                                                </Button>
                                                <BootstrapDialog
                                                   onClose={handleClose}
                                                   aria-labelledby='customized-dialog-title'
                                                   open={open}
                                                >
                                                   <DialogTitle
                                                      sx={{ m: 0, p: 2 }}
                                                      id='customized-dialog-title'
                                                   >
                                                      Modal title
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
                                                      
                                                      {Array.isArray( appointmentInfo?.data  ) && appointmentInfo?.data?.map(  (e, i) => (
                                                               <Grid
                                                                  item
                                                                  key={i}
                                                                  xs={12}
                                                                  sm={12}
                                                                  md={12}
                                                                  lg={12}
                                                                  
                                                                  variants={fadeInUp}
                                                                  initial='hidden'
                                                                  animate='visible'
                                                               >
                                                                  <Card
                                                                     sx={{
                                                                        backgroundColor:
                                                                           '#C4D0DC',
                                                                     }}
                                                                  >
                                                                     <CardHeader
                                                                        avatar={
                                                                           <Avatar
                                                                              sx={{
                                                                                 bgcolor:
                                                                                    '#13293D',
                                                                              }}
                                                                              aria-label='recipe'
                                                                           >
                                                                              {
                                                                                 e?.doctor?.employee?.employee_name.split(
                                                                                    ''
                                                                                 )[0]
                                                                              }
                                                                           </Avatar>
                                                                        }
                                                                        title={
                                                                           e?.doctor
                                                                              ?.employee
                                                                              ?.employee_name
                                                                        }
                                                                        subheader={
                                                                           e.appointment_time +
                                                                           '   ' +
                                                                           e.appointment_date
                                                                        }
                                                                     />
                                                                     <CardContent>
                                                                        <Chip
                                                                           label={
                                                                              'Disease Name : ' +
                                                                              e
                                                                                 ?.disease
                                                                                 ?.disease_name
                                                                           }
                                                                           sx={{
                                                                              backgroundColor:
                                                                                 '#7F8FA45B',
                                                                           }}
                                                                        />
                                                                     </CardContent>
                                                                     <CardContent>
                                                                        <Chip
                                                                           label={
                                                                              'Patient Name : ' +
                                                                              e
                                                                                 ?.patient
                                                                                 ?.patient_name
                                                                           }
                                                                           sx={{
                                                                              backgroundColor:
                                                                                 '#7F8FA45B',
                                                                           }}
                                                                        />
                                                                     </CardContent>
                                                                     <CardContent>
                                                                        <Chip
                                                                           label={
                                                                              'Appointment No. : ' +
                                                                              e?.appointment_number
                                                                           }
                                                                           sx={{
                                                                              backgroundColor:
                                                                                 '#7F8FA45B',
                                                                           }}
                                                                        />
                                                                     </CardContent>
                                                                     <CardContent>
                                                                        <Switch
                                                                           {...label}
                                                                           checked={
                                                                              isSwitchOn
                                                                           }
                                                                           onChange={
                                                                              handleSwitchChange
                                                                           }
                                                                           color='primary'
                                                                           size='small'
                                                                           disabled={
                                                                              isSwitchOn
                                                                           }
                                                                        />
                                                                        {isSwitchOn ? (
                                                                           <div>
                                                                              <Input
                                                                                 type='file'
                                                                                 onChange={
                                                                                    handleFileChange
                                                                                 }
                                                                              />
                                                                              <Button
                                                                                 variant='contained'
                                                                                 color='primary'
                                                                                 onClick={
                                                                                    handleSubmit
                                                                                 }
                                                                              >
                                                                                 Add
                                                                                 Prescription
                                                                              </Button>
                                                                              {isFileChosenError && (
                                                                                 <p
                                                                                    style={{
                                                                                       color: 'red',
                                                                                    }}
                                                                                 >
                                                                                    Please
                                                                                    choose
                                                                                    the
                                                                                    file.
                                                                                 </p>
                                                                              )}
                                                                           </div>
                                                                        ) : (
                                                                           <p>
                                                                              Unchecked
                                                                              Message
                                                                           </p>
                                                                        )}
                                                                     </CardContent>

                                                                     <Dialog
                                                                        open={
                                                                           isSuccessDialogOpen
                                                                        }
                                                                        onClose={
                                                                           handleDialogClose
                                                                        }
                                                                     >
                                                                        <DialogTitle>
                                                                           Prescription
                                                                           Submitted
                                                                           Successfully!
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                           <DialogContentText>
                                                                              {isFileChosenError
                                                                                 ? 'Error: Please choose the file before closing.'
                                                                                 : ''}
                                                                           </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                           <Button
                                                                              onClick={
                                                                                 handleDialogClose
                                                                              }
                                                                              color='primary'
                                                                           >
                                                                              OK
                                                                           </Button>
                                                                        </DialogActions>
                                                                     </Dialog>
                                                                  </Card>
                                                               </Grid>
                                                            )
                                                         )}
                                                   </DialogContent>
                                                   <DialogActions>
                                                      <Button
                                                         autoFocus
                                                         onClick={handleClose}
                                                      >
                                                         Save changes
                                                      </Button>
                                                   </DialogActions>
                                                </BootstrapDialog>
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
                     </Grid>
                  </Grid>
               </Box>
            ) : null}
         </div>
      )
   }
}

export default FetchData
