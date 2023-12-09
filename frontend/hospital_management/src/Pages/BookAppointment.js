
"use client"
import React from 'react';
import { Grid, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LightModeIcon from '@mui/icons-material/LightMode';
import SchoolIcon from '@mui/icons-material/School';
import { useGetDoctorTimesQuery } from '@/services/Query';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import Link from "@mui/material/Link";
import { Container } from '@mui/system';
// import { useState } from 'react';
function BookAppoinment() {
  const { data: doctorTimes = [], isLoading, isError, isSuccess } = useGetDoctorTimesQuery();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    if (doctorTimes && doctorTimes.data && doctorTimes.data[0] && doctorTimes.data[0].times) {
      setTimes(doctorTimes.data[0].times);
    }
  }, [doctorTimes]);

  function formatTime(timeString) {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour24: true });
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentConfirmed(false);
  };

  const handleSlotSelection = (timeSlot) => {
    setSelectedSlot(timeSlot);
  };

  const handleBookAppointment = async () => {
    handleOpenDialog();
    if (selectedSlot) {

      console.log('Appointment booked:', selectedSlot);
    } else {
      console.log('Please select a time slot.');
    }
  };
   
  const handleConfirmAppointment =()=>{
    setAppointmentConfirmed(true);
  }
  
  return (
    <Container maxWidth="lg" p={2}>
      <Grid container maxWidth="lg" boxShadow={1} spacing={5} display="flex" Direction="column">

        <Grid item bgcolor={"fff"} display={"flex"} Direction="column" >
          <Image priority={true} src="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg" height={150} width={150} style={{ borderRadius: "50%" }} />
          <Grid
            item
            xl={8}
            // sm={8} 
            // bgcolor={"rebeccapurple"}
            display="flex"
            Direction="column"
            justifyContent="center"
            margin={0}
            p={{ xs: 2, sm: 5 }}
            gap={10}
          >
            <>
              <Typography gutterBottom variant="h4" component="div" >
                Dr. Anoop Misra
                <Typography variant="body1" color="text.secondary">
                  EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc
                </Typography>
              </Typography>
            </>
          </Grid>


        </Grid>
      </Grid>
      <br /> <br />


      <Grid container Direction='column' display={"flex"} rowSpacing={4}>
        {/* 1ST COLUMN */}
        <Grid item xs={12} sm={6}>
          <Grid bgcolor={"#fff"} borderRadius={2} boxShadow={3} margin={2} p={0.1} >
            <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
              <PersonIcon sx={{ marginRight: 1 }} />
              About
            </Typography>
            <hr />
            <Typography variant='body2' p={1}>
              Dr G.R.Vijay Kumar is a renowned Neurosurgeon with over 20 years of experience. Dr Kumar is an adept in all disciplines of Brain and Spine Surgery including Brain tumor surgery among adults, as well as pediatric and Neonatal, endoscopic surgery, microvascular decompression surger...
            </Typography>
          </Grid>

          <Grid bgcolor={"#fff"} borderRadius={2} boxShadow={3} margin={2} p={0.1} >
            <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
              <SchoolIcon sx={{ marginRight: 1 }} />
              Education
            </Typography>
            <hr />
            <Typography variant='body2' p={1}>
              F.R.C.S.(London), F.R.C.S. (Neurosurgery), CCST (UK), Spine Fellowship (USA), Skull Base& Vascular Fellowship (USA)...
            </Typography>
          </Grid>
        </Grid>

        {/* 2ND COLUMN */}
        <Grid item sm={5} xs={12}>
          
          <Grid bgcolor={"#fff"} borderRadius={2} boxShadow={3} margin={2} p={0.1}>

            <Box display={"flex"} alignItems="center" justifyContent="space-between" sx={{ paddingBottom: 1 }}>
              <Typography gutterBottom variant="h5" margin={2}>
                Appointment Time
              </Typography>
            </Box>
            <hr />

           <Grid container spacing={1} sx={{marginLeft:2}} justifyContent={"center"} alignItems='center'>
          {times.map((timeSlot, index) => ( 
            <Grid item key={index} xs={6} sm={6} md={6}>
              <Button
                variant="outlined"
                onClick={() => handleSlotSelection(timeSlot)}
                sx={{
                  width: '80%',
                  borderColor: selectedSlot === timeSlot ? '#2CD9C5' : '#000',
                  borderRadius: '10px',
                  backgroundColor: selectedSlot === timeSlot ? '#2CD9C5' : '#fff',
                  color: selectedSlot === timeSlot ? '#fff' : '#000',
                  position: 'relative',
                  '&:hover': {
                    borderColor: '#2CD9C5',
                    backgroundColor: '#2CD9C5',
                    color: '#fff',
                  },
                }}
              >
                <Typography variant="body2">
                  {formatTime(timeSlot.start_time)} - {formatTime(timeSlot.end_time)} :
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px', marginTop: '4px' }}>
                  {timeSlot.slots}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box mt={2} marginBottom={1} display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleBookAppointment}>
            Book Appointment
          </Button>
        </Box>
         {/* FIRST  Confirmation Dialog MODAL */}
         <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Appointment Booking</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to book the appointment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button  onClick={handleConfirmAppointment} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        {/* SECOND CONFIRM APPOINTMENT MODAL */}
        <Dialog open={appointmentConfirmed} onClose={handleCloseAppointmentModal}>
          <DialogContent>
            <Typography variant="h5" >
              Your appointment has been confirmed successfully!
            </Typography>
            {appointmentConfirmed && (
              <CheckCircleIcon sx={{ color: 'green', marginLeft: '43%', marginTop: 4, fontSize: "60px" }} />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAppointmentModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

          </Grid>

        </Grid>
      </Grid>
    </Container>

  )
}
export default BookAppoinment





