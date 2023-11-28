"use client"
              // Backup code to indivisual doctor cards and book appoinment
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LightModeIcon from '@mui/icons-material/LightMode';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import Link from "@mui/material/Link";
import { Container } from '@mui/system';
import { useState } from 'react';
const slots = [
  { id: 1, time: '9:00 AM', slot: 'morning', maxAppointments: 3 },
  { id: 2, time: '12:00 PM', slot: 'afternoon', maxAppointments: 2 },
  { id: 3, time: '4:00 PM', slot: 'afternoon', maxAppointments: 3 },
  { id: 4, time: '6:00 PM', slot: 'evening', maxAppointments: 4 },
];
function DoctorCard() {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const isSlotDisabled = (slot) => {
    const bookedAppointments = appointments.filter((apt) => apt.slot === slot.slot);
    return bookedAppointments.length >= slot.maxAppointments || slot.slot === selectedSlot;
  };

  const morningSlots = slots.filter((slot) => slot.slot === 'morning');
  const afternoonSlots = slots.filter((slot) => slot.slot === 'afternoon');
  const eveningSlots = slots.filter((slot) => slot.slot === 'evening');

  const bookAppointment = (slot) => {
    if (!isSlotDisabled(slot)) {
      setAppointments([...appointments, { slot: slot.slot }]);
      setSelectedSlot('');
    }
  };
  return (
    <Container maxWidth="lg" p={2}>

      <Grid container
        boxShadow={3} bgcolor="white" p={3} borderRadius={2}  >

        <Grid item >
          <Image priority={true} src="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg" height={300} width={300} />
        </Grid>

        <Grid item display="flex" flexDirection="column" justifyContent="center" p={5} padding={5} >
          <>
            <Typography gutterBottom variant="h4" component="div">
              Dr. Sumit Jain
              <Typography variant="body1" color="text.secondary">
                Pediatric Cardiology
              </Typography>
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div"  >
              <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
              Speciality
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              Laparoscopic and General Surgery
            </Typography>

            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <SchoolIcon sx={{ marginRight: 1 }} />
              Qualification
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              MBBS, MS (General Surgery)
            </Typography>


            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
              Experience
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              16 years
            </Typography>


            <Typography display={"flex"} gutterBottom variant="h6" component="div">
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Location
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: 4 }} >
              CARE CHL Hospitals, Indore
            </Typography>
          </>
        </Grid>

        <Grid item display="flex" flexDirection="" justifyContent="start" alignItems='end' >
          <Button variant="contained" style={{ padding: 20 }} >0731-47744111/4774116</Button>
        </Grid>
      </Grid>
      <br />  <br />
      <Grid container Direction='column' display={"flex"} rowSpacing={4} bgcolor={"fff"}>
        {/* 1ST COLUMN */}
        <Grid item xs={6} bgcolor={"#fff"}>
          <Grid bgcolor={"#fff"} borderRadius={3} boxShadow={3} margin={2} p={0.1} >
            <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
              <PersonIcon sx={{ marginRight: 1 }} />
              About
            </Typography>
            <hr />
            <Typography variant='body2' p={1}>
              Dr G.R.Vijay Kumar is a renowned Neurosurgeon with over 20 years of experience. Dr Kumar is an adept in all disciplines of Brain and Spine Surgery including Brain tumor surgery among adults, as well as pediatric and Neonatal, endoscopic surgery, microvascular decompression surger...
            </Typography>
          </Grid>

          <Grid bgcolor={"#fff"} borderRadius={3} boxShadow={3} margin={2} p={0.1} >
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
        <Grid bgcolor={"#fff"} item xs={6}>

          <Typography display={"flex"} gutterBottom variant="h4" margin={2} component="div">
            Schedule Appointment
          </Typography>
            
                       {/* MORNING SLOTTTTTTTTTTTT */}
          <Grid bgcolor={"#fff"} borderRadius={3} boxShadow={3} margin={2} p={0.1} >

            <Box display={"flex"}>
              <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
                <LightModeIcon sx={{ marginRight: 1 }} />
                Morning 
              </Typography>
              <Typography gutterBottom variant="body1" margin={2} marginLeft={35} component="div">
                {morningSlots.length}  Slots
              </Typography>
            </Box>

            <hr />
            <Grid container spacing={2} justifyContent={"center"}>
              {morningSlots.map((slot) => (
                <Grid item display="flex" key={slot.id} xs={6} sm={3}>
                  <Button
                    variant="outlined"
                    style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D", margin: 2 }}
                    onClick={() => bookAppointment(slot)}
                    disabled={isSlotDisabled(slot)}
                  >
                    {slot.time}
                  </Button>
                </Grid>
              ))}
            </Grid>
             {/* <Grid display={"flex"} padding={2} gap={2} justifyContent={"center"}>
              <Grid item display="flex" >
                <Button variant="outlined" style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D" }} >12:00 PM</Button>
              </Grid>
              <Grid item display="flex"  >
                <Button variant="outlined" style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D" }} >9:00 AM</Button>
              </Grid>
              <Grid item display="flex"  >
                <Button variant="outlined" style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D" }} >11:00 PM</Button>
              </Grid>
              <Grid item display="flex"  >
                <Button variant="outlined" style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D" }} >10:00 PM</Button>
              </Grid>
            </Grid> */}
          </Grid>
                              
                              {/* AFTERNOON SLOTTTT */}
          <Grid bgcolor={"#fff"} borderRadius={3} boxShadow={3} margin={2} p={0.1} >
            <Box display={"flex"}>
              <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
                <LightModeIcon sx={{ marginRight: 1 }} />
                Afternoon
              </Typography>
              <Typography gutterBottom variant="body1" margin={2} marginLeft={35} component="div">
                {morningSlots.length} Slots
              </Typography>
            </Box>

            <hr />
            <Grid container spacing={2} justifyContent={"center"}>
              {morningSlots.map((slot) => (
                <Grid item display="flex" key={slot.id} xs={6} sm={3}>
                  <Button
                    variant="outlined"
                    style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D", margin: 2 }}
                    onClick={() => bookAppointment(slot)}
                    disabled={isSlotDisabled(slot)}
                  >
                    {slot.time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
                              {/* EVENING SLOTTTTTTTTTTTTTTTTTT */}
          <Grid bgcolor={"#fff"} borderRadius={3} boxShadow={3} margin={2} p={0.1} >
            <Box display={"flex"}>
              <Typography display={"flex"} gutterBottom variant="h6" margin={2} component="div">
                <LightModeIcon sx={{ marginRight: 1 }} />
                Evening 
              </Typography>
              <Typography gutterBottom variant="body1" margin={2} marginLeft={35} component="div">
                {morningSlots.length} Slots
              </Typography>
            </Box>

            <hr />
            <Grid container spacing={2} justifyContent={"center"}>
              {morningSlots.map((slot) => (
                <Grid item display="flex" key={slot.id} xs={6} sm={3}>
                  <Button
                    variant="outlined"
                    style={{ width: "100px", height: "40px", padding: 2, borderColor: "#13293D", margin: 2 }}
                    onClick={() => bookAppointment(slot)}
                    disabled={isSlotDisabled(slot)}
                  >
                    {slot.time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* ADDD BUTTONNNN */}
          <Grid item display="flex" justifyItems="center" justifyContent="center"  >
            <Button variant="contained" style={{ padding: 10, width: 400 }} >Book Appoinment</Button>
          </Grid>

        </Grid>
      </Grid>
    </Container>

  )
}
export default DoctorCard





