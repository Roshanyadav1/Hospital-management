import React from 'react'
function Contact() {
  return (
    <div>
     <h1>Contact us</h1>
    </div>
  )
}

export default Contact



// 'use client'
// import React, { useState } from 'react';
// import { useGetDoctorTimesQuery } from '@/services/Query';

// function YourComponent() {
//   const { data: doctorTimes = [], isLoading, isError, isSuccess } = useGetDoctorTimesQuery();


//   const handleButtonClick = (timeSlot) => {
//     console.log('Clicked on:', timeSlot);
//   };
//   console.log('doctorTimes:', doctorTimes);
//   let times = [
//     {
//       start_time: "10:00:00",
//       end_time: "12:00:00",
//       slots: 5
//     },
//     {
//       start_time: "14:00:00",
//       end_time: "17:00:00",
//       slots: 6
//     },
//     {
//       start_time: "19:00:00",
//       end_time: "22:00:00",
//       slots: 8
//     }
//   ]
    
//   let perPTime = "00:20:00"

//  // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (isError) {
//   //   return <div>Error fetching data</div>;
//   // }
// return (
//   <div>
//     <h2>Doctor Time Slots</h2>
//     <div>
//       {!isError && isSuccess && doctorTimes?.data[0].times?.map((timeSlot, index) => (
//         <div key={index}>
//           <button
//             onClick={() => handleButtonClick(timeSlot)}
//             style={{
//               width: '30%',
//               height: '40px',
//               borderColor: '#2CD9C5',
//               borderRadius: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <p>Start Time: {timeSlot.start_time}</p>
//             <p>End Time: {timeSlot.end_time}</p>
//             <p>Slots: {timeSlot.slots}</p>
//           </button>
//           <hr />
//         </div>
//       ))}
//     </div>

//   </div>
// );
// }

// export default YourComponent;
