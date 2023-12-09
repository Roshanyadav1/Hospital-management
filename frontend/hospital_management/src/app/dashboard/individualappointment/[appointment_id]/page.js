'use client'
import { Container, Grid, Card, CardHeader, Avatar, CardContent, Chip, Switch, Button, Input } from '@mui/material';
import { useGetAppointmentInfoQuery } from '@/services/Query';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations
import '@/styles/container.css'
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function DoctorPage() {
  const { appointment_id } = useParams();
  const { data: appointmentInfo, isLoading, isError } = useGetAppointmentInfoQuery(appointment_id);
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isFileChosenError, setIsFileChosenError] = useState(false);

 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

 

  const handleSubmit = () => {
   
    if (selectedFile) {
      setIsSuccessDialogOpen(true);
      setIsFileChosenError(false);
    } else {
      setIsFileChosenError(true); 
    }

  };
  

  const handleDialogClose = () => {
    setIsSuccessDialogOpen(false);
    setSelectedFile(null);

    setIsFileChosenError(false);
  };
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  if (appointment_id === undefined) {
    return <p>Error:</p>;
  }
  if (isLoading) {
    const loaderContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', 
    };

    // Styling for the CircularProgress component
    const loaderStyle = {
      color: 'black',
    };

    return (
      <div style={loaderContainerStyle}>
        <p style={{ color: 'black' }}>Loading...</p>
        <CircularProgress style={loaderStyle} />
      </div>
    );
  }
// add the live loader symbol when the loading hits
  if (isError) {
    return <p>Error: {isError.message}</p>;
  }
  

  return (
    <Container maxWidth='md'>
      <Grid container spacing={2} justifyContent='center'>
        {Array.isArray(appointmentInfo?.data) &&
          appointmentInfo?.data?.map((e, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              sx={{ paddingBottom: '1rem' }}
              component={motion.div}
              variants={fadeInUp}
              initial='hidden'
              animate='visible'
            >
           <Card sx={{ backgroundColor: '#C4D0DC' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#13293D' }} aria-label='recipe'>
            {e?.doctor?.employee?.employee_name.split('')[0]}
          </Avatar>
        }
        title={e?.doctor?.employee?.employee_name}
        subheader={e.appointment_time + '   ' + e.appointment_date}
      />
      <CardContent>
        <Chip label={'Disease Name : ' + e?.disease?.disease_name} sx={{ backgroundColor: '#7F8FA45B' }} />
      </CardContent>
      <CardContent>
        <Chip label={'Patient Name : ' + e?.patient?.patient_name} sx={{ backgroundColor: '#7F8FA45B' }} />
      </CardContent>
      <CardContent>
        <Chip label={'Appointment No. : ' + e?.appointment_number} sx={{ backgroundColor: '#7F8FA45B' }} />
      </CardContent>
      <CardContent>
        <Switch {...label} checked={isSwitchOn} onChange={handleSwitchChange} />
        {isSwitchOn ? (
          <div>
            <Input type="file" onChange={handleFileChange} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Prescription
            </Button>
            {isFileChosenError && <p style={{ color: 'red' }}>Please choose the file.</p>}
          </div>
        ) : (
          <p>Unchecked Message</p>
        )}
      </CardContent>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Prescription Submitted Successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isFileChosenError ? 'Error: Please choose the file before closing.' : ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default DoctorPage;
