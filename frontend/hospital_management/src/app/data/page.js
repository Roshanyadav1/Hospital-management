'use client'

import React, { useEffect, useState } from 'react';

function FetchData() {
  const[dataa,setDataa]=useState([])
 

  return (
    <div>
    <h1>Fetch Data From API</h1>
    
  </div>
  );
}

export default FetchData;








//   <div>
// <h1>Fetch Data From API</h1>
// {dataa && dataa.length > 0 ? (
//   dataa.map((item) => (
//     <h2 key={item.id}>{item.name}</h2>
//   ))
// ) : (
//   <p>No data available</p>
// )}
// </div>
// );