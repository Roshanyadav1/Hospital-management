"use client"
<<<<<<< HEAD

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
    background: 'none', // Remove background color
    border: 'none',    // Remove border
    '& input': {
      border: 'none',  // Remove input border
      padding: 0,      // Remove input padding
    },
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
=======
import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import FORM_VALIDATION from './Components/FormValidation/formValidation';
import { Box, TextField } from '@mui/material';
import Text from './Components/Textfield/Text'
import { colors } from '@/styles/theme';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';



const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: '650px',
  boxShadow: theme.shadows[3],
  backgroundColor: colors.background,
  borderRadius: '20px',
  padding: '2rem',
}));

//for the heading
const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  paddingBottom: '1rem',
  color: colors.primary,
}));


//for hiding the input image button
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

//for the whole form
const StyledFormWrapper = styled('div')({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  padding: '2rem',
  '@media (max-width: 450px)': {
    padding: '0rem',
  },
});

// for preview image 
const StyledImageWrapper = styled(Image)(({height , width}) => ({
  height: height || '100px',
  width: width || '100px',
  borderRadius: 10 ,
  border : `2px solid ${colors.secondary}`,
}));

// for the upload box and hover to show the animation of the upload icon
const StyledBox = styled(Box)(() => ({
  height: '150px',
  width: '150px',
  borderRadius: 10,
  backgroundColor: colors.lightGrey,
  border: `2px dashed ${colors.secondary}`,
  '&:hover': {
    cursor: 'pointer',
    border: `2px solid ${colors.secondary}`,
    transition: '3s ease-in-out'    
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
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
<<<<<<< HEAD
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
=======
  UserName: '',
  Password: '',
};


const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Surat', 'Indore', 'Bhopal', 'Vadodara', 'Coimbatore', 'Ludhiana', 'Amritsar', 'Patna', 'Ranchi', 'Bhubaneswar',
  'Thiruvananthapuram', 'Kochi', 'Visakhapatnam', 'Agra', 'Varanasi', 'Mysore', 'Madurai', 'Vijayawada',
];

const Register = () => {
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
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

<<<<<<< HEAD
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

=======
  const handleChooseLogoClick = () => {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = handleImageChange;
    fileInput.click();
  };

  return (
    <StyledFormWrapper>
      <StyledPaper elevation={3}>


        <StyledTypography variant="h4">
          Registration Form
        </StyledTypography>
        <Typography variant="h6">
              General Information
        </Typography>
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
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
<<<<<<< HEAD
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
=======
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <Text name="HospitalName" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
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
=======
                  <Text name="HospitalNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
<<<<<<< HEAD
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
=======
                  <Text name="HospitalEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    id="hospitalCity"
=======
                {/* // yha per issue he bro  */}
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    name="hospitalCity"
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                    options={cities}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        InputProps={{
                          ...params.InputProps,
                          style: {
<<<<<<< HEAD
                            background: 'white',
                            border: 'none',
                            borderRadius: '25px',
                            padding: '10px',
=======
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                          },
                        }}
                      />
                    )}
<<<<<<< HEAD
                    
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
=======
                  />
                  <ErrorMessage name="HospitalCity" component="div" style={{ color: colors.error , fontSize: 10 }} />
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
                  <Text name="HospitalAddress" label="Address" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
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
=======
                  <Autocomplete
                    name="category"
                    options={categories}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Category"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
                          },
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="category" component="div" style={{ color: colors.error , fontSize: 10 }} />
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
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                    Hospital Owner's Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
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
=======
                  <Text name="HospitalOwnerName" label="Name" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
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
=======
                  <Text name="HospitalOwnerNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
<<<<<<< HEAD
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
=======
                  <Text name="HospitalOwnerEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                      },
                    }}
                  />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12}>
=======
                <Grid item xs={12} sm={6}>
                  <Text name="UserName" label="Username" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="Password" label="Password" autoComplete="off"
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
                  <Box  onClick={handleChooseLogoClick} sx={{ height: '150px', width: '150px' , margin :'1rem 0rem' }}>
                  {previewImage ? (
                      <StyledImageWrapper width={150} height={150} onClick={handleChooseLogoClick} src={previewImage} alt="logo"  />
                    ):(
                        <StyledBox item display='flex' justifyContent='center' alignItems='center' >
                          <Grid display='block'>
                          <CloudUploadIcon sx={{ height: '35px', color: colors.secondary , position:'relative' , left:'1.6rem' }} />
                          <StyledTypography variant='body2' >
                            upload logo
                          </StyledTypography>
                            </Grid>
                        </StyledBox>
                    )}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <VisuallyHiddenInput id="logoInput" type='file' accept='image/*' />
                </Grid>

                <Grid item xs={12} sm={6}>
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
<<<<<<< HEAD
                    className={classes.submitButton}
=======

>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
                  >
                    Submit
                  </Button>
                </Grid>
<<<<<<< HEAD
=======

>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a
              </Grid>
            </Form>
          )}
        </Formik>
<<<<<<< HEAD
      </Paper>
    </div>
  );
};

export default Registerform;

=======
      </StyledPaper>
    </StyledFormWrapper>
  );
};

export default Register;
>>>>>>> c3dbe502970089d6d4c86c65a7595c915369f74a


