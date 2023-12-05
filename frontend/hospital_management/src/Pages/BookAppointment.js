// 'use client'

// import { ListItem, Container, Box, Grid, Button,ButtonGroup } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import moment from 'moment';


// function Slots() {
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [remainingSlots, setRemainingSlots] = useState([]);

//   // Function to create time slots array
//   const createTimeSlots = (fromTime, toTime , divideTime) => {
//     const startTime = moment(fromTime, 'hh:mm A');
//     let endTime = moment(toTime, 'hh:mm A');
//     if (endTime.isBefore(startTime)) {
//       endTime = endTime.add(1, 'day');
//     }
//     let arr = [];
//     while (startTime <= endTime) {
//       arr.push(startTime.format('hh:mm A'));
//       startTime.add(divideTime, 'minutes');
//     }
//     return arr;
//   };

//   useEffect(() => {

//     setTimeSlots(createTimeSlots('09:00:AM', '6:00:PM' , 20));
//   }, []);

  
//   const bookAppointment = (slot) => {
    
//     console.log('Booked slot:', slot);
//   };

 
//   const isSlotDisabled = (slot) => {
//     return false;
//   };

  
//   const isBookedSlot = (slot) => {
//         return false; 
//   };

  
//   return (
//     <div>
//       <Container>
//         <Box>
//           {timeSlots.map((item, index) => (
//             <Grid item p={1} display="flex" key={index} xs={6} sm={6} md={4}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   width: '20%',
//                   height: '40px',
//                   borderColor: '#2CD9C5',
//                   borderRadius: '10px',
//                   '&:hover': {
//                     borderColor: '#2CD9C5',
//                     backgroundColor: '#2CD9C5',
//                   },
//                   backgroundColor: isBookedSlot(item) ? '#EDF2F7' : isSlotDisabled(item) ? '#EDF2F7' : null,
//                   cursor: isSlotDisabled(item) ? 'not-allowed' : 'pointer',
//                 }}
//                 onClick={() => bookAppointment(item)}
//                 disabled={isSlotDisabled(item)}
//                 key={index}
//               >
//                 {item}
//                 {timeSlots[index + 1] ? ' - ' + timeSlots[index +1 ]: ''}
//               </Button>
//             </Grid>
//           ))}
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Slots;


// pPHLE BALA TIME SLOTTTTTTTTTTTTTTTTTTTTTT
// function Slots() {
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [remainingSlots, setRemainingSlots] = useState([]);

//   const createTimeSlots = (fromTime, toTime, divideTime) => {
//     const startTime = moment(fromTime, 'hh:mm A');
//     let endTime = moment(toTime, 'hh:mm A');
//     if (endTime.isBefore(startTime)) {
//       endTime = endTime.add(1, 'day');
//     }
//     let arr = [];
//     while (startTime <= endTime) {
//       arr.push({
//         time: startTime.format('hh:mm A'),
//         duration: divideTime, 
//       });
//       startTime.add(divideTime, 'minutes');
//     }
//     return arr;
//   };

//   useEffect(() => {
//     // Generate time slots with 15, 20, and 30-minute durations
//     const slots15Minutes = createTimeSlots('09:00:AM', '6:00:PM', 15);
//     const slots20Minutes = createTimeSlots('09:00:AM', '6:00:PM', 20);
//     const slots30Minutes = createTimeSlots('09:00:AM', '6:00:PM', 30);

//     // Combine all slots into one array
//     const combinedSlots = [...slots15Minutes, ...slots20Minutes, ...slots30Minutes];

//     // Sort the slots by time
//     combinedSlots.sort((a, b) => moment(a.time, 'hh:mm A') - moment(b.time, 'hh:mm A'));

//     setTimeSlots(combinedSlots);
//   }, []);

//   const bookAppointment = (slot) => {
    
//          console.log('Booked slot:', slot);
//        };
    
     
//       const isSlotDisabled = (slot) => {
//         return false;
//       };
    
      
//       const isBookedSlot = (slot) => {
//             return false; 
//       };
    
      
  
//   return (
//     <div>
//       <Container>
//         <Box>
//           {timeSlots.map((slot, index) => (
//             <Grid item p={1} display="flex" key={index} xs={6} sm={6} md={4}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   width: '20%',
//                   height: '40px',
//                   borderColor: '#2CD9C5',
//                   borderRadius: '10px',
//                   '&:hover': {
//                     borderColor: '#2CD9C5',
//                     backgroundColor: '#2CD9C5',
//                   },
//                   backgroundColor: isBookedSlot(slot.time) ? '#EDF2F7' : isSlotDisabled(slot.time) ? '#EDF2F7' : null,
//                   cursor: isSlotDisabled(slot.time) ? 'not-allowed' : 'pointer',
//                 }}
//                 onClick={() => bookAppointment(slot)}
//                 disabled={isSlotDisabled(slot.time)}
//                 key={index}
//               >
//                 {slot.time} - {moment(slot.time, 'hh:mm A').add(slot.duration, 'minutes').format('hh:mm A')}
//                 ({slot.duration} min)
//               </Button>
//             </Grid>
//           ))}
//         </Box>
//       </Container>
//     </div>
//   );
// }
// export default Slots;

// LAST BALA CODE 
// function Slots() {
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [remainingSlots, setRemainingSlots] = useState([]);
//   const [selectedDuration, setSelectedDuration] = useState(15); // Default duration

//   const createTimeSlots = (fromTime, toTime, divideTime) => {
//     const startTime = moment(fromTime, 'hh:mm A');
//     let endTime = moment(toTime, 'hh:mm A');
//     if (endTime.isBefore(startTime)) {
//       endTime = endTime.add(1, 'day');
//     }
//     let arr = [];
//     while (startTime <= endTime) {
//       arr.push({
//         time: startTime.format('hh:mm A'),
//         duration: divideTime, 
//       });
//       startTime.add(divideTime, 'minutes');
//     }
//     return arr;
//   };

//   useEffect(() => {
//     // Generate time slots with 15, 20, and 30-minute durations
//     const slots15Minutes = createTimeSlots('09:00:AM', '6:00:PM', 15);
//     const slots20Minutes = createTimeSlots('09:00:AM', '6:00:PM', 20);
//     const slots30Minutes = createTimeSlots('09:00:AM', '6:00:PM', 30);

//     // Combine all slots into one array
//     const combinedSlots = [...slots15Minutes, ...slots20Minutes, ...slots30Minutes];

//     // Sort the slots by time
//     combinedSlots.sort((a, b) => moment(a.time, 'hh:mm A') - moment(b.time, 'hh:mm A'));

//     setTimeSlots(combinedSlots);
//   }, []);

//   const bookAppointment = (slot) => {
    
//          console.log('Booked slot:', slot);
//        };
    
     
//       const isSlotDisabled = (slot) => {
//         return false;
//       };
    
      
//       const isBookedSlot = (slot) => {
//             return false; 
//       };
    
      
  

//   return (
//     <div>
//       <Container>
//         <Box>
//           <ButtonGroup variant="outlined" color="primary">
//             <Button
//               onClick={() => setSelectedDuration(15)}
//               sx={{ backgroundColor: selectedDuration === 15 ? '#2CD9C5' : null }}
//             >
//               15 mins
//             </Button>
//             <Button
//               onClick={() => setSelectedDuration(20)}
//               sx={{ backgroundColor: selectedDuration === 20 ? '#2CD9C5' : null }}
//             >
//               20 mins
//             </Button>
//             <Button
//               onClick={() => setSelectedDuration(30)}
//               sx={{ backgroundColor: selectedDuration === 30 ? '#2CD9C5' : null }}
//             >
//               30 mins
//             </Button>
//           </ButtonGroup>
//           {timeSlots
//             .filter((slot) => slot.duration === selectedDuration)
//             .map((slot, index) => (
//               <Grid item p={1} display="flex" key={index} xs={6} sm={6} md={4}>
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     width: '30%',
//                     height: '40px',
//                     borderColor: '#2CD9C5',
//                     borderRadius: '10px',
//                     '&:hover': {
//                       borderColor: '#2CD9C5',
//                       backgroundColor: '#2CD9C5',
//                     },
//                     backgroundColor: isBookedSlot(slot.time) ? '#EDF2F7' : isSlotDisabled(slot.time) ? '#EDF2F7' : null,
//                     cursor: isSlotDisabled(slot.time) ? 'not-allowed' : 'pointer',
//                   }}
//                   onClick={() => bookAppointment(slot)}
//                   disabled={isSlotDisabled(slot.time)}
//                   key={index}
//                 >
//                   {slot.time} - {moment(slot.time, 'hh:mm A').add(slot.duration, 'minutes').format('hh:mm A')}
//                   ({slot.duration} min)
//                 </Button>
//               </Grid>
//             ))}
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Slots;




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
                < Button variant="contained" sx={{ padding: 1, width: 200, backgroundColor: "#2CD9C5", borderRadius: "10px" }} >Book Appoinment</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )
}
export default BookAppoinment





