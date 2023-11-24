'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
function FetchData() {
  const[dataa,setDataa]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hospital-management-six-chi.vercel.app/api/employee/view');
        const data = response.data ?? [];
        console.log(data)
        setDataa(data?.data || []);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
   <h1>Fetch Data From API</h1>
    {dataa?.map((item) => (
      <div key={item.id}> 
        <h2>Employee Name: {item.employee_name}</h2>
        <h4>Employee Email: {item.employee_email}</h4>
        <h4>Employee Number: {item.employee_number}</h4>
        <h4>Employee Password: {item.employee_password}</h4>
        <h4>Employee Type: {item.employee_type}</h4>
        <h4>Employee Role: {item.employee_role}</h4>
        <h4>Employee Status: {item.employee_status}</h4>
      </div>
    ))}
  </div>
  );
}

// export default FetchData;








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