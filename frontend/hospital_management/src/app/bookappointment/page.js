"use client"


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
function BookAppoinment() {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const isSlotDisabled = (slot) => {
    const bookedAppointments = appointments.filter((apt) => apt.slot === slot.slot);
    return bookedAppointments.length >= slot.maxAppointments || slot.slot === selectedSlot;
  };

  const timeSlots = [
    { id: '09:00 AM' },
    { id: '09:20 AM' },
    { id: '9:40 AM' },
    { id: '10:00 AM' },
    { id: '10:20 AM' },
    { id: '01:40 AM' },
    { id: '11:00 AM' },
    { id: '03:20 AM' },
    { id: '05:40 AM' },
  ];
  const bookAppointment = (slot) => {
    if (!isSlotDisabled(slot)) {
      setAppointments([...appointments, { slot: slot.slot }]);
      setSelectedSlot('');
    }
  };
  const remainingSlots = timeSlots.filter((slot) => !isSlotDisabled(slot));
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
              <Typography gutterBottom variant="body2" margin={2} sx={{ border: "1px solid #13293D", borderRadius: "10px", padding: "1px" }}>
                {remainingSlots.length} Slots
              </Typography>
            </Box>
            <hr />
            <Grid container spacing={0} justifyContent={"center"}>
              {remainingSlots.map((slot) => (
                <Grid item p={1} display="flex" key={slot.id} xs={6} sm={6} md={4} >
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "40px",
                      borderColor: "#2CD9C5",
                      borderRadius: "10px",
                      '&:hover': {
                        borderColor: "#2CD9C5",
                        backgroundColor: "#2CD9C5",
                      },
                      backgroundColor: isSlotDisabled(slot) ? "#EDF2F7" : null,
                      cursor: isSlotDisabled(slot) ? "not-allowed" : "pointer",
                    }}
                    onClick={() => bookAppointment(slot)}
                    disabled={isSlotDisabled(slot)}
                  >
                    {slot.id}
                  </Button>
                </Grid>
              ))}
              <Grid item display="flex" justifyItems="center" marginBottom={2} justifyContent="center"  >
                <Button variant="contained" sx={{ padding: 1, width: 200, backgroundColor: "#2CD9C5", borderRadius: "10px" }} >Book Appoinment</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )
}
export default BookAppoinment





