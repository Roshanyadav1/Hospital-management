"use client"

import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios or any other HTTP client is installed

const EmployeeViewPage = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://hospital-management-six-chi.vercel.app/api/employee/view');
    const data = response.data ?? [];
      setEmployeeData(response.data); // Set the fetched data into state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 // Assuming `employeeData` is the object fetched from the API
return (
  <div>
    <h1>Employee Data</h1>
    <button onClick={fetchData}>Fetch Employee Data</button>
    {employeeData && (
      <div>
        {/* Display individual properties of the employee data */}
        <p>
          <strong>Employee ID:</strong> {employeeData.employee_id}
        </p>
        <p>
          <strong>Name:</strong> {employeeData.employee_name}
        </p>
        <p>
          <strong>Email:</strong> {employeeData.employee_email}
        </p>
        {/* Render other properties similarly */}
      </div>
    )}
  </div>
);

  
};

export default EmployeeViewPage;
