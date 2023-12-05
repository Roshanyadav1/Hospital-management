'use client'

import { ListItem, Container, Box, Grid, Button,ButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import moment from 'moment';


function Slots() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [remainingSlots, setRemainingSlots] = useState([]);

  // Function to create time slots array
  const createTimeSlots = (fromTime, toTime , divideTime) => {
    const startTime = moment(fromTime, 'hh:mm A');
    let endTime = moment(toTime, 'hh:mm A');
    if (endTime.isBefore(startTime)) {
      endTime = endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(startTime.format('hh:mm A'));
      startTime.add(divideTime, 'minutes');
    }
    return arr;
  };

  useEffect(() => {

    setTimeSlots(createTimeSlots('09:00:AM', '6:00:PM' , 20));
  }, []);

  
  const bookAppointment = (slot) => {
    
    console.log('Booked slot:', slot);
  };

 
  const isSlotDisabled = (slot) => {
    return false;
  };

  
  const isBookedSlot = (slot) => {
        return false; 
  };

  
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
                {timeSlots[index + 1] ? ' - ' + timeSlots[index +1 ]: ''}
              </Button>
            </Grid>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default Slots;



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
