'use client'
import Chart from '@/Pages/Chart'
import Card from '@mui/material/Card'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'
// import datanotfound from '@/assets/dataNotFound.gif'
import { Avatar, IconButton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import doctorImage from '@/assets/doctorIllustration.png'
import Image from 'next/image'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import PeopleIcon from '@mui/icons-material/People'
import ListItemText from '@mui/material/ListItemText'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useGetDoctorIdQuery } from '../../services/Query'
import { Grid, Button, Typography, Skeleton } from '@mui/material'
import { colors } from '@/styles/theme'
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
import { Chip, Switch, Input, CardHeader, CardContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAddPrescriptionMutation } from '../../services/Query'

import { useLeaveViewQuery } from '../../services/Query'

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
function FetchData() {
   const requestAbortController = useRef(null)
   const userRole = localStorage.getItem('user_role')
   const doctorId = localStorage.getItem('user_id')
   const [dateData, setDateData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [highlightedDays, setHighlightedDays] = useState(getSpecificDates())
   const [isSwitchOn, setIsSwitchOn] = useState(false)
   const [selectedFile, setSelectedFile] = useState(null)
   const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)
   const [isFileChosenError, setIsFileChosenError] = useState(false)
   const [open, setOpen] = useState(false)
   const [datesArray, setDatesArray] = useState([])


   // const [appointmentUpdate] = useAppointmentUpdateMutation()
   const {
      data: appointments,
      isError,
      isLoading: dataloading,
   } = useGetDoctorIdQuery(doctorId, { skip: userRole === 'Doctor' ? false : true })

   const docId = localStorage.getItem("user_id")
   const { data: holidays, isSuccess: isHolidaySuccess } = useLeaveViewQuery(docId)
   const appointment_id = appointments?.data[0]?.appointment_id
   const { data: appointmentInfo } = useGetAppointmentInfoQuery(appointment_id)

   let isAdmin = userRole === 'Admin' || userRole === 'Manager' ? true : false
   // eslint-disable-next-line no-unused-vars
   const dates = appointments?.data?.map(
      (appointment) => appointment?.appointment_date
   )

   var names = appointments?.data?.map(function (item) {
      return item['appointment_date']
   })
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
   }, [ names?.length])
   // for holidays highlight in calender
   useEffect(() => {
      if (holidays?.data && isHolidaySuccess) {
         setDatesArray(holidays?.data?.map(item => item.date));
      }
   }, [holidays?.data, isHolidaySuccess])
   // eslint-disable-next-line react-hooks/exhaustive-deps
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



   // eslint-disable-next-line react-hooks/exhaustive-deps, no-undef
   const fetchHighlightedDays =((date) => {
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
   })



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

   // eslint-disable-next-line no-unused-vars
   const doctorID = appointments?.data[0]?.doctor?.doctor_id


   // console.log(datesArray);

   //    const disabledDates = datesArray;
   //    console.log(disabledDates)

   const shouldDisableDate = (date) => {
      const isSunday = date.day() === 0
      const formattedDate = date.format('YYYY-MM-DD')
      const isRandomDisabledDate = datesArray?.includes(formattedDate)

      return isSunday || isRandomDisabledDate
   }

   ///////////////////////////////////////////////////////


   const label = { inputProps: { 'aria-label': 'Size switch demo' } }
   const [appointmentUpdate] = useAppointmentUpdateMutation()
   const [addPrescription] = useAddPrescriptionMutation();


   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0])
   }
   const handleSubmit = async () => {
      if (selectedFile) {
         const formData = new FormData();
         formData.append('file', selectedFile);

         try {
            const s3Response = await fetch('/api/s3-upload', {
               method: 'POST',
               body: formData,
            });

            if (s3Response.ok) {
               const s3Data = await s3Response.json();
               const imageUrl = s3Data.imageUrl;

               console.log('S3 Image URL:', imageUrl);

               const apiResponse = await addPrescription({
                  prescription_photo: imageUrl,
                  appointment_id: appointmentInfo?.data?.[0]?.appointment_id,
               });

               if (apiResponse.data) {
                  setIsSuccessDialogOpen(true);
                  setIsFileChosenError(false);
               } else {
                  console.error('Failed to post prescription data to API');
               }
            } else {
               console.error('Failed to upload image to S3');
            }
         } catch (error) {
            console.error('Error:', error);
         }
      } else {
         setIsFileChosenError(true);
      }
   };






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


   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   if (dataloading) {
      return (

         <Grid container py={3}>
            <Grid item container xs={12} sm={8}>
               <Grid item xs={12} sm={12}>
                  <Card
                     sx={{

                        borderRadius: 2,

                     }}
                  >
                     <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={230}
                        animation='wave'
                     />
                  </Card>
               </Grid>
               <Grid item xs={12} sm={12} mt={5}>
                  <Card
                     sx={{

                        borderRadius: 2,

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
            <Grid item container xs={12} sm={4}>
               <Card
                  sx={{
                     width: '100%',
                     marginLeft: 2,
                     borderRadius: 2,
                     height: 340,
                  }}
               >
                  <Skeleton
                     variant='rectangular'
                     width='100%'
                     height={340}
                     animation='wave'
                  />
               </Card>
            </Grid>
         </Grid>
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
                                       {/* <Image
                                          src={datanotfound}
                                          alt='data not found'
                                          height={150}
                                          width={150}
                                       /> */}
                                       <Typography variant='h6' color='secondary'>
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
                                                      sx={{ m: 0 }}
                                                      id='customized-dialog-title'
                                                   >
                                                      Appointment Information
                                                   </DialogTitle>
                                                   <IconButton
                                                      aria-label='close'
                                                      onClick={handleClose}
                                                      sx={{
                                                         position: 'absolute',
                                                         right: 0,
                                                         top: 0,
                                                         color: (theme) =>
                                                            theme.palette.grey[500],
                                                      }}
                                                   >
                                                      <CloseIcon />
                                                   </IconButton>
                                                   <DialogContent dividers>
                                                      {Array.isArray(
                                                         appointmentInfo?.data
                                                      ) &&
                                                         appointmentInfo?.data?.map(
                                                            (e, i) => (
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
                     </Grid>
                  </Grid>
               </Box>
            ) : null}
         </div>
      )
   }
}

export default FetchData
