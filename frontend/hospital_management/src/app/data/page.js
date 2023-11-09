'use client'

import React, { useEffect, useState } from 'react';
//import axios from 'axios'; 

function FetchData() {
  const[dataa,setDataa]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
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
        <h1>Employee Name: {item.employee_name}</h1>
        <h2>Employee Salary: {item.employee_salary}</h2>
        <h2>Employee Age: {item.employee_age}</h2>
      </div>
    ))}
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