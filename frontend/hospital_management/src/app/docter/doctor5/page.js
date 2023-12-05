

'use client'
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

    setTimeSlots(createTimeSlots('09:00  ', '18:00'));
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
              </Button>
            </Grid>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default Slots;
