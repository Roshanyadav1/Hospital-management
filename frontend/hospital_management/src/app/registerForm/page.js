'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Typography,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';
import Textfield from './Components/Textfield/index';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import FORM_VALIDATION from './Components/FormValidation/formValidation';

const useStyles = makeStyles((theme) => ({
  body: {
    font: 'normal normal 900 19px/30px Noto Sans'
  },

  textField: {
    width: '100%',

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
  UserName: '',
  Password: ''
};


const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Surat', 'Indore', 'Bhopal', 'Vadodara', 'Coimbatore', 'Ludhiana', 'Amritsar', 'Patna', 'Ranchi', 'Bhubaneswar',
  'Thiruvananthapuram', 'Kochi', 'Visakhapatnam', 'Agra', 'Varanasi', 'Mysore', 'Madurai', 'Vijayawada',
];



const App = () => {
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

  const handleChooseLogoClick = () => {
    // Trigger the hidden file input when the button is clicked
    const fileInput = document.getElementById('logoInput');
    fileInput.click();
  };

  return (
    <div className={classes.formWrapper} >
      <Paper elevation={3} className={classes.paper} style={{ backgroundColor: ' #F0F2FA', borderRadius: '25px' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '1rem', color: '#3f51b5' }}>
          Registration Form
        </Typography>
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
                  <Textfield name="HospitalName" label="Name" className={classes.textfield} autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="HospitalNumber" label="Phone" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="HospitalEmail" label="Email" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete id="hospitalCity" options={cities}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
                          },
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="HospitalCity" component="div" style={{ color: 'red' }} />
                </Grid>
                {/* provide proper error usding yup validation for this field if the city is not selected from the dropdown */}
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Type"
                    name="radioOptions"
                    options={[
                      { value: 'Public', label: 'Public' },
                      { value: 'Private', label: 'Private' },
                      { value: 'General', label: 'General' },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="HospitalAddress" label="Address" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
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
                    <ErrorMessage name="category" component="div" style={{ color: 'red' }} />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Status"
                    name="statusRadio"
                    options={[
                      { value: 'Active', label: 'Active' },
                      { value: 'Inactive', label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <hr />
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Hospital Owner's Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="HospitalOwnerName" label="Name" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="HospitalOwnerNumber" label="Phone" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="HospitalOwnerEmail" label="Email" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="UserName" label="Username" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="Password" label="Password" className={classes.textfield} autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Hospital's logo
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className={classes.logoField}>
                    <Button
                      Style={{ marginTop: '20px' }}
                      className={classes.chooseFileButton}
                      onClick={handleChooseLogoClick}
                    >
                      Choose Logo
                    </Button>
                    <input
                      type="file"
                      id="logoInput"
                      className={classes.fileInput}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {previewImage && (
                      <div >
                        <img src={previewImage} alt="Preview" className={classes.previewImage} style={{ marginBottom: '1rem', boxShadow: 'box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35)' }} />
                      </div>
                    )}

                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
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

export default App;

