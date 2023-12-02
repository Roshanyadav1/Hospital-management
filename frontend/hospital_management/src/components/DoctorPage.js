'use client'
import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import Grid from '@mui/system/Unstable_Grid/Grid'
import Container from '@mui/material/Container'
import { Card, CardContent } from '@mui/material'
import { CardActionArea } from '@mui/material'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography, Button, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useGetSpecialistDoctorMutation } from '@/services/Query'
import { useGetAllDiseasesQuery } from '@/services/Query'
import { useGetAllDoctorsQuery } from '@/services/Query'
import Image from 'next/image'

function DoctorPage() {
   const styles = {
      container: {
         backgroundImage: `url(${'https://e0.pxfuel.com/wallpapers/597/471/desktop-wallpaper-hospital-medical-care.jpg'})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         color: 'white', // Adjust text color based on your background
         padding: '2rem',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
   }

   const [selectedDate, setSelectedDate] = useState(dayjs(new Date())) // Initial date value
   const [selectedDiseases, setSelectedDiseases] = useState([]) // Initial diseases value
   const [selectedDoctor, setSelectedDoctor] = useState([]) // Initial diseases value

   const handleDateChange = date => {
      setSelectedDate(date)
   }

   const handleDiseasesChange = (event, values) => {
      setSelectedDiseases(values)
   }

   const handleDoctorChange = (event, values) => {
      setSelectedDoctor(values)
   }

   const handleSubmit = event => {
      event.preventDefault()

      // Now you can use selectedDate and selectedDiseases in your fetch or any other logic
      console.log('Selected Date:', selectedDate)
      console.log('Selected Diseases:', selectedDiseases)
      console.log('Selected Doctor:', selectedDoctor)
      // Add your fetch or other logic here
   }

   let fill = {
      disease: selectedDate,
      day: selectedDiseases,
      doctor: selectedDoctor,
   }
   const [filterDoctor, { data: docData }] = useGetSpecialistDoctorMutation(fill)

   // filter use
   const { data: getDisease, isLoading } = useGetAllDiseasesQuery()
   const { data: getDoctors, isLoading: isDoctorsLoading } = useGetAllDoctorsQuery()

   if (isLoading||isDoctorsLoading)
   return (
     <div style={{height:"100vh"  , display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Box sx={{ display: 'flex' }}>
         <CircularProgress />
      </Box>
      </div>
   )

   const Typo = {
      fontWeight: 800,
      fontSize: '2.5rem',
   }

   // for filter use
   const diseases = getDisease?.data?.map(disease => disease.disease_name) || []
   const doctors =
      getDoctors?.data?.map(doctor => doctor.employee.employee_name) || []

   return (
      <div>
         <div style={styles.container}>
            <Container maxWidth='lg'>
               <Typography variant='h4' align='center' style={Typo}>
                  Book Your Appointment
               </Typography>
               <form onSubmit={handleSubmit}>
                  <Grid container spacing={5} style={{ marginTop: '1rem' }}>
                     <Grid item xs={12} sm={3} md={3.5}>
                        <Typography variant='body2' sx={{ marginBottom: '6px' }}>
                           Select Disease
                        </Typography>
                        <Autocomplete
                           freeSolo
                           id='tags-outlined'
                           options={diseases}
                           value={selectedDiseases}
                           onChange={handleDiseasesChange}
                           sx={{
                              background: 'white',
                              outline: 'none',
                              borderRadius: '5px',
                           }}
                           disableClearable
                           renderInput={params => (
                              <TextField
                                 {...params}
                                 //  label="Search input"
                                 InputProps={{
                                    ...params.InputProps,
                                    placeholder: 'disease',
                                    type: 'search',
                                 }}
                              />
                           )}
                        />
                     </Grid>

                     <Grid item xs={12} sm={3} md={3.5}>
                        <Typography variant='body2' sx={{ marginBottom: '6px' }}>
                           Select Doctor
                        </Typography>
                        <Autocomplete
                           freeSolo
                           id='tags-outlined'
                           options={doctors}
                           value={selectedDoctor}
                           onChange={handleDoctorChange}
                           sx={{
                              background: 'white',
                              outline: 'none',
                              borderRadius: '5px',
                           }}
                           disableClearable
                           renderInput={params => (
                              <TextField
                                 {...params}
                                 //  label="Search input"
                                 InputProps={{
                                    ...params.InputProps,
                                    placeholder: 'doctor',
                                    type: 'search',
                                 }}
                              />
                           )}
                        />
                     </Grid>
                     <Grid item xs={12} sm={3} md={3.5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DemoItem label='Select Date'>
                              <MobileDatePicker
                                 defaultValue={dayjs(new Date())}
                                 format='DD-MM-YYYY'
                                 views={['year', 'month', 'day']}
                                 value={selectedDate}
                                 onChange={handleDateChange}
                                 sx={{ background: 'white', borderRadius: '5px' }}
                              />
                           </DemoItem>
                        </LocalizationProvider>
                     </Grid>
                     <Grid item xs={12} sm={3} md={1.5}>
                        <Button
                           variant='contained'
                           size='large'
                           type='submit'
                           sx={{ marginTop: '25px', height: '50px' }}
                        >
                           Search
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </Container>
         </div>
         {/* // all doctor view  */}
         <Container maxWidth='xl'>
            <Typography variant='h3' align='center' style={{ marginTop: '50px' }}>
               Doctors
            </Typography>
            <Grid container spacing={6} style={{ marginTop: '20px' }}>
               {getDoctors?.data?.map((result, index) => {
                  let diseases = JSON.parse(result?.disease_specialist || []) || []
                  let days = JSON.parse(result?.day || []) || [] // available days

                  return (
                     <Grid item xs={12} md={3} sm={6} key={index}>
                        {/* here the redirection url is not defined when the page is complete than it work */}
                        {/* <Link style={{textDecoration:'none'}} href=""> */}
                        <Card sx={{ borderRadius: '5px' }}>
                           <CardActionArea sx={{minHeight: 280}}>
                              <CardContent>
                                 <Grid container>
                                    <Grid item>
                                       <Image
                                          height={50}
                                          width={50}
                                          src='https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg'
                                       />
                                    </Grid>
                                    <Grid item sx={{ paddingLeft: 2 }}>
                                       <Typography
                                          variant='body2'
                                          color={'#2CD9C5'}
                                          sx={{ fontWeight: 700 }}
                                       >
                                          Name
                                       </Typography>
                                       <Typography
                                          gutterBottom
                                          variant='h6'
                                          component='div'
                                       >
                                          Dr. {result.employee.employee_name}
                                       </Typography>
                                    </Grid>
                                 </Grid>

                                 <Typography
                                    variant='body2'
                                    color='#2CD9C5'
                                    sx={{ fontWeight: 700 }}
                                 >
                                    Disease Specialist
                                 </Typography>
                                 <div
                                    display='flex'
                                    justifyContent='center'
                                    style={{ marginBottom: 10 }}
                                 >
                                    {diseases?.map(item => {
                                       return (
                                          <Chip
                                             key={item}
                                             size='small'
                                             label={item}
                                             sx={{
                                                marginRight: 1,
                                                marginTop: 1,
                                                backgroundColor: '#2CD9C51A',
                                             }}
                                          />
                                       )
                                    })}
                                 </div>
                                 <Typography
                                    variant='body2'
                                    color='#2CD9C5'
                                    sx={{ fontWeight: 700 }}
                                 >
                                    Available Days
                                 </Typography>
                                 <Grid container>
                                    {days?.map(item => {
                                       return (
                                          <Grid item key={item}>
                                             <Chip
                                                size='small'
                                                label={item}
                                                sx={{
                                                   marginRight: 1,
                                                   marginTop: 1,
                                                   backgroundColor: '#2CD9C51A',
                                                }}
                                             />
                                          </Grid>
                                       )
                                    })}
                                 </Grid>
                              </CardContent>
                           </CardActionArea>
                        </Card>
                        {/* </Link> */}
                     </Grid>
                  )
               })}
            </Grid>
         </Container>
      </div>
   )
}
export default DoctorPage
