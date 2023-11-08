'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';
import Textfield from './TextField';
// import Select from 'react-select'; // Import react-select

const useStyles = makeStyles((theme) => ({
  textField: {
    width:'100%',
  },
  formWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  selectField: {
    minWidth: 200,
  },
  submitButton: {
    margin: '2rem 0',
    display: 'flex',
    alignItems: 'center !important',
    justifyContent: 'center',
  },
  paper: {
    padding: '2rem',
    width: '100%',
    maxWidth: '650px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
  logoField: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  chooseFileButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  fileInput: {
    display: 'none',
  },
  
  previewImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginTop: '10px',
  },
}));

const INITIAL_FORM_STATE = {
  HospitalName: '',
  HospitalNumber: '',
  HospitalEmail: '',
  HospitalAddress: '',
  HospitalCity: '',
  radioOptions: '',
  category: '',
  statusRadio: 'Active',
  logo: null,
  HospitalOwnerName: '',
  HospitalOwnerNumber: '',
  HospitalOwnerEmail: '',
};

const FORM_VALIDATION = Yup.object().shape({
  HospitalName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
  HospitalNumber: Yup.string()
  .matches(/^(?!.*(\d)\1{5})[0-9]+$/, 'Invalid phone number')
  .test('is-ten-digits', 'Invalid phone number', (value) => {
    if (value) {
      return value.replace(/[^0-9]/g, '').length === 10;
    }
    return false;
  })
  .required('Required!'),
  HospitalEmail: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]).*^(?!.*@(email|yahoo)\.com).*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    )
    .required('Required!')
    .test('email-provider', 'Email provider not allowed', (value) => {
      if (/(email|yahoo)\.com$/.test(value)) {
        return false;
      }
      return true;
    }),
  HospitalCity: Yup.string().required('Required!'),
  HospitalAddress: Yup.string().required('Required!'),
  radioOptions: Yup.string().required('Please select an option'),
  category: Yup.string().required('Please select a category'),
  statusRadio: Yup.string().required('Please select a status'),
  logo: Yup.mixed().test('fileSize', 'File size is too large', (value) => {
    if (!value) {
      return true;
    }
    return value && value.size <= 1024 * 1024;
  }),
  HospitalOwnerName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
  HospitalOwnerNumber: Yup.string()
  .matches(/^(?!.*(\d)\1{5})[0-9]+$/, 'Invalid phone number')
  .test('is-ten-digits', 'Invalid phone number', (value) => {
    if (value) {
      return value.replace(/[^0-9]/g, '').length === 10;
    }
    return false;
  })
  .required('Required!'),
  HospitalOwnerEmail: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]).*^(?!.*@(email|yahoo)\.com).*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid Email format'
    )
    .required('Required!')
    .test('email-provider', 'Email provider not allowed', (value) => {
      if (/(email|yahoo)\.com$/.test(value)) {
        return false;
      }
      return true;
    }),
});

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const cities = [ 'Mumbai','Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur','Surat', 'Indore', 'Bhopal','Vadodara','Coimbatore','Ludhiana','Amritsar','Patna','Ranchi','Bhubaneswar',
'Thiruvananthapuram','Kochi','Visakhapatnam','Agra','Varanasi','Mysore','Madurai','Vijayawada',
];



const Registerform = () => {
  const classes = useStyles();
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div className={classes.formWrapper} >
      <Paper elevation={3} className={classes.paper} style={{backgroundColor:' #F0F2FA',borderRadius:'25px'}}>
        <Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '1rem',color:'#3f51b5' }}>
          Registration Form
        </Typography>
        <div className={classes.logoField}>
          <label className={classes.chooseFileButton} style={{backgroundColor:'#3f51b5',color:'#fff',border:'none',height:'1.rem'
                 ,fontSize:'15px',padding:'3px 5px',borderRadius:'15px'}}>
            Choose logo
            <input
              type="file"
              id="logoInput"
              className={classes.fileInput}
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          {previewImage && (
            <div>
              <img src={previewImage} alt="Preview" className={classes.previewImage} />
            </div>
          )}
        </div>

        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <Textfield
                    
                    name="HospitalName"
                    label="Name"
                    
                    className={classes.textfield}
                    autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield
                    name="HospitalNumber"
                    label="Phone"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="HospitalEmail"
                    label="Email"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    id="hospitalCity"
                    options={cities}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            background: 'white',
                            border: 'none',
                            borderRadius: '25px',
                            padding: '10px',
                          },
                        }}
                      />
                    )}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <FormLabel>Type</FormLabel>
                    <Field name="radioOptions">
                      {({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel
                            value="Public"
                            control={<Radio color="primary" />}
                            label="Public"
                          />
                          <FormControlLabel
                            value="Private"
                            control={<Radio color="primary" />}
                            label="Private"
                          />
                          <FormControlLabel
                            value="General"
                            control={<Radio color="primary" />}
                            label="General"
                          />
                        </RadioGroup>
                      )}
                    </Field>
                    <ErrorMessage
                      name="radioOptions"
                      component="div"
                      style={{ color: 'red' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="HospitalAddress"
                    label="Address"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.selectField}>
                    <FormLabel >
                        Category
                    </FormLabel>
                    <Field as={Select} name="category" >
                      <MenuItem value="" disabled>
                        Select a category
                      </MenuItem>
                      {categories.map((category) => (
                        <MenuItem key={category} value={category} style={{ background: 'white' }}>
                          {category}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      style={{ color: 'red' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Field name="statusRadio">
                      {({ field }) => (
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value="Active"
                            control={<Radio color="primary" />}
                            label="Active"
                          />
                          <FormControlLabel
                            value="Inactive"
                            control={<Radio color="primary" />}
                            label="Inactive"
                          />
                        </RadioGroup>
                      )}
                    </Field>
                    <ErrorMessage
                      name="statusRadio"
                      component="div"
                      style={{ color: 'red' }}
                    />
                  </FormControl>
                </Grid>
                <hr />
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Hospital Owner's Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield
                    name="HospitalOwnerName"
                    label="Name"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield
                    name="HospitalOwnerNumber"
                    label="Phone"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="HospitalOwnerEmail"
                    label="Email"
                    className={classes.textfield}
                    autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        // padding: '10px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default Registerform;



