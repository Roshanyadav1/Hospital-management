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

  const [stringArray, setStringArray] = useState(['diabetes', 'thyroid', 'malaria']);

  const Typo = {
    fontWeight: 800,
    fontSize:"2.5rem",
  }

  return (
    <div style={styles.container} >
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={Typo}>
          Book Your Appointment
        </Typography>
        <form>
          <Grid container spacing={5} style={{ marginTop: "1rem" }}>
            <Grid item xs={12} sm={3} md={5} >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="Select Date">
                  <MobileDatePicker defaultValue={dayjs('2023-11-17')}
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
  )
}
export default DoctorPage

















