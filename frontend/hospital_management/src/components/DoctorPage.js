"use client"
import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Container from '@mui/material/Container';
import { Typography, Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetSpecialistDoctorQuery } from '@/services/Query';






function DoctorPage() {
  


  const styles = {
    container: {
      backgroundImage: `url(${"https://t4.ftcdn.net/jpg/06/23/97/77/240_F_623977732_Qr9vyosS3vSzQoIWAzwfYQYrV8LpPHPM.jpg"})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Adjust text color based on your background
      height: '60vh', // Adjust the height as needed
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const diseases = ['diabetes', 'thyroid', 'dengue', 'malaria',]

  //const [stringArray, setStringArray] = useState(['diabetes', 'thyroid', 'malaria']);

  const [selectedDate, setSelectedDate] = useState(dayjs('2023-11-17')); // Initial date value
  const [selectedDiseases, setSelectedDiseases] = useState([]); // Initial diseases value


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDiseasesChange = (event, values) => {
    setSelectedDiseases(values);
    
  };


  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Now you can use selectedDate and selectedDiseases in your fetch or any other logic
    console.log('Selected Date:', selectedDate);
    console.log('Selected Diseases:', selectedDiseases);

    // Add your fetch or other logic here
  };
  
let fill = {
    disease : selectedDate,
    day:selectedDiseases,
  }
const {data :  docData} =useGetSpecialistDoctorQuery(fill)

  const Typo = {
    fontWeight: 800,
    fontSize:"2.5rem",
  }


console.log(docData , "asd")
  return (
    <div>
    <div style={styles.container} >
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={Typo}>
          Book Your Appointment
        </Typography>
        <form   onSubmit={handleSubmit}>
          <Grid container spacing={5} style={{ marginTop: "1rem" }}>
            <Grid item xs={12} sm={3} md={5} >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="Select Date">
                  <MobileDatePicker 
                  defaultValue={dayjs('2023-11-17')}
                  value={selectedDate}
                  onChange={handleDateChange}
                    sx={{ background: 'white',  borderRadius: '5px', }}
                  />
                </DemoItem>
              </LocalizationProvider>
            </ Grid>
            <Grid item xs={12} sm={3} md={5} >
              <Typography variant='body2' sx={{ marginBottom: "6px" }}>Select Disease</Typography>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={diseases}
                value={selectedDiseases}
                onChange={handleDiseasesChange}

                sx={{ background: 'white', outline: 'none', borderRadius: '5px', }}
                placeholder='diseases'
                getOptionLabel={(option) => option}
                // defaultValue={[stringArray[13]]}
                // filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="diseases"
                  />
                )}
              />
            </ Grid>
            
            <Grid item xs={12} sm={3} md={2} >
              <Button variant="contained" size="large" type="submit"  sx={{marginTop:"25px" , height:"50px"}}>
                submit
              </Button>
            </ Grid>
          </ Grid>
        </form>
      </Container>
      </div>
       <div>
       {
      docData?.data?.map((info,i)=>
      <div key={i}>
          <h2>{info.doctor_id} {info.disease_specialist}</h2>
          <p>{info.day}</p>
          <p>{info.disease_specialist}</p>
          <hr></hr>
        </div>
      )
    }
     
    </div>
    </div>
  )
}
export default DoctorPage

















