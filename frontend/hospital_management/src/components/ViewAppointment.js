// 'use client'
// import * as React from 'react'
// import { styled } from '@mui/material/styles'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardMedia from '@mui/material/CardMedia'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Collapse from '@mui/material/Collapse'
// import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import { red } from '@mui/material/colors'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import ShareIcon from '@mui/icons-material/Share'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import MoreVertIcon from '@mui/icons-material/MoreVert'

// import { useGetAppointmentQuery } from '@/services/Query'
// import { Chip, Grid } from '@mui/material'
// //
// export default function RecipeReviewCard() {
//    const { data: appointment, isloading, error } = useGetAppointmentQuery()
//    console.log(appointment?.data)
//    //
//    const [expanded, setExpanded] = React.useState(false)
//    //
//    const handleExpandClick = () => {
//       setExpanded(!expanded)
//    }
//    //
//    if (isloading) {
//       return <p>Loading...</p>
//    }
//    if (error) {
//       return <p>Error: {error.message}</p>
//    } else {
//       return (
//          <div>
//             {Array.isArray(appointment?.data) &&
//                appointment?.data?.map((e, i) => (
//                   <Grid container justifyContent='space-between' alignItems="center">
//                      <Card key={i} sx={{width:700 , marginX: 10 }}>
//                         <CardHeader
//                            avatar={
//                               <Avatar sx={{ bgcolor:'#13293D' }} aria-label='recipe'>
//                                  {e?.doctor?.employee?.employee_name.split('')[0]}
//                               </Avatar>
//                            }
//                            title={e?.doctor?.employee?.employee_name}
//                            subheader={e.appointment_time + '   ' + e.appointment_date}
                           
//                         />
//                         <Chip label={e?.disease?.disease_name} />
//                      </Card>

//                      {/* <Chip label={e?.disease?.disease_name} /> */}
//                   </Grid>
//                ))}
//          </div>
//       )
//    }
// }

'use client'
// import { ListItem, Container, Contect } from '@mui/material'
// import React from 'react'
// import moment from 'moment';
// import { useState, useEffect } from 'react';
// function Slots() {
//   const [timeSlots, setTimeSlots] = useState([]);

//   const createTimeSlots = (fromTime, toTime) => {
//     var startTime = moment(fromTime, 'HH:mm')
//     var endTime = moment(toTime, 'HH:mm')
//     if (endTime.isBefore(startTime)) {
//       endTime.add(1, 'day');
//     }
//     let arr = [];
//     while (startTime <= endTime) {
//       arr.push(new moment(startTime).format('HH:mm'))
//       startTime.add(30, 'minutes');
//     }
//     return arr;
//   };
//   useEffect(() => {

//     setTimeSlots(createTimeSlots('9:00', '6:00'));

//     //  let slots = createTimeSlots('9:00','6:00')
//     // console.log(slots)
//   }, []);

//   return (
//     <div>
//       <Container>
//         <Contect>
//           {timeSlots.map((item, index) => {
//             <ListItem>
//               <h4>Time Slots - {item}</h4>
//             </ListItem>
//           })
//           }
//         </Contect>
//       </Container>
//     </div>
//   )
// }

// export default Slots
import { ListItem, Container, Box, Grid, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Slots() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [remainingSlots, setRemainingSlots] = useState([]);

  // Function to create time slots array
  const createTimeSlots = (fromTime, toTime) => {
    const startTime = moment(fromTime, 'HH:mm');
    let endTime = moment(toTime, 'HH:mm');
    if (endTime.isBefore(startTime)) {
      endTime = endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(startTime.format('HH:mm'));
      startTime.add(30, 'minutes');
    }
    return arr;
  };

  useEffect(() => {
    // Set the time slots array using the createTimeSlots function
    setTimeSlots(createTimeSlots('09:00  ', '18:00'));
  }, []);

  // Function to handle booking an appointment for a specific time slot
  const bookAppointment = (slot) => {
    // Implement the logic for booking the appointment here
    console.log('Booked slot:', slot);
  };

  // Function to check if a slot is disabled (if needed)
  const isSlotDisabled = (slot) => {
    // Implement your logic to check if the slot should be disabled
    // Return true or false based on your conditions
    return false; // Placeholder, change this according to your logic
  };

  // Function to check if a slot is already booked
  const isBookedSlot = (slot) => {
    // Implement your logic to check if the slot is already booked
    // Return true or false based on your conditions
    return false; // Placeholder, change this according to your logic
  };

  // When rendering, map over the timeSlots array to display buttons for each time slot
  return (
    <div>
      <Container>
        <Box>
          {timeSlots.map((item, index) => (
            <Grid item p={1} display="flex" key={index} xs={6} sm={6} md={4}>
              <Button
                variant="outlined"
                sx={{
                  width: '20%',
                  height: '40px',
                  borderColor: '#2CD9C5',
                  borderRadius: '10px',
                  '&:hover': {
                    borderColor: '#2CD9C5',
                    backgroundColor: '#2CD9C5',
                  },
                  backgroundColor: isBookedSlot(item) ? '#EDF2F7' : isSlotDisabled(item) ? '#EDF2F7' : null,
                  cursor: isSlotDisabled(item) ? 'not-allowed' : 'pointer',
                }}
                onClick={() => bookAppointment(item)}
                disabled={isSlotDisabled(item)}
                key={index}
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default Slots;
