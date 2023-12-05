'use client'
import { ListItem, Container, Contect } from '@mui/material'
import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react';
function page() {
  const [timeSlots, setTimeSlots] = useState([]);

  const createTimeSlots = (fromTime, toTime) => {
    var startTime = moment(fromTime, 'HH:mm')
    var endTime = moment(toTime, 'HH:mm')
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(new moment(startTime).format('HH:mm'))
      startTime.add(30, 'minutes');
    }
    return arr;
  };
  useEffect(() => {

    setTimeSlots(createTimeSlots('9:00', '6:00'));

    //  let slots = createTimeSlots('9:00','6:00')
    // console.log(slots)
  }, []);

  return (
    <div>
      <Container>
        <Contect>
          {timeSlots.map((item, index) => {
            <ListItem>
              <h4>Time Slots - {item}</h4>
            </ListItem>
          })
          }
        </Contect>
      </Container>
    </div>
  )
}

export default page
