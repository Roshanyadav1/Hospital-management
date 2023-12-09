
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Container } from '@mui/system';
import { useGetDoctorTimesQuery } from '@/services/Query';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function BookAppointment() {
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

  console.log(doctorTimes);
  return (
    <Container maxWidth="lg" p={2}>
      <Grid bgcolor="#fff" borderRadius={2} boxShadow={3} margin={2} p={0.1}>
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: 1 }}>
          <Typography gutterBottom variant="h5" margin={2}>
            Appointment Time
          </Typography>
        </Box>
        <hr />

        <Grid container spacing={1} justifyContent="center" alignItems='center'>
          {times.map((timeSlot, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
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
    </Container>
  );
}

export default BookAppointment;

