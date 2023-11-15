"use client"
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
import * as Yup from 'yup';




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
const StyledImageWrapper = styled(Image)(({ height, width }) => ({
  height: height || '100px',
  width: width || '100px',
  borderRadius: 10,
  border: `2px solid ${colors.secondary}`,
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
<<<<<<< HEAD
    transition: '3s ease-in-out'    
=======
    transition: '3s ease-in-out'
>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
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
  Password: '',
};


const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Surat', 'Indore', 'Bhopal', 'Vadodara', 'Coimbatore', 'Ludhiana', 'Amritsar', 'Patna', 'Ranchi', 'Bhubaneswar',
  'Thiruvananthapuram', 'Kochi', 'Visakhapatnam', 'Agra', 'Varanasi', 'Mysore', 'Madurai', 'Vijayawada',
];

const Register = () => {
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
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = handleImageChange;
    fileInput.click();
  };

  // const FORM_VALIDATION = Yup.object().shape({
  //   hospitalCity: Yup.string().required('City is required'),
  //   // Add other Yup validations for other fields if needed
  // });

  return (
    <StyledFormWrapper>
      <StyledPaper elevation={3}>


        <StyledTypography variant="h4" >
          Registration Form
        </StyledTypography>
        <Typography variant="h6">
          General Information
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
<<<<<<< HEAD
          {({ values, setFieldValue }) => (
=======
          {({ values, setFieldValue, handleChange, handleBlur, touched }) => (
>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <Text name="HospitalName" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="HospitalNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Text name="HospitalEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                {/* // yha per issue he bro  */}
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    name="hospitalCity"
                    options={cities}
                    getOptionLabel={(option) => option}
                    value={values.hospitalCity}
                    onChange={(event, newValue) => {
                      handleChange({ target: { name: 'hospitalCity', value: newValue } });
                    }}
                    onBlur={handleBlur}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        InputProps={{
                          ...params.InputProps,
                          style: {
<<<<<<< HEAD
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
=======
                            background: 'white',
                            border: 'none',
                            borderRadius: '25px',
                            padding: '10px',
>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
                          },
                        }}
                      />
                    )}
                  />
<<<<<<< HEAD
                  <ErrorMessage name="HospitalCity" component="div" style={{ color: colors.error , fontSize: 10 }} />
=======
                  <ErrorMessage name="category" component="div" style={{ color: colors.error, fontSize: 10 }} />
>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
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
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
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
                  <ErrorMessage name="category" component="div" style={{ color: colors.error, fontSize: 10 }} />
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
<<<<<<< HEAD
                                      <Typography variant="h6" style={{ fontWeight: 'bold' }}>
=======
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
                    Hospital Owner's Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="HospitalOwnerName" label="Name" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="HospitalOwnerNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Text name="HospitalOwnerEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
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
                  <Box onClick={handleChooseLogoClick} sx={{ height: '150px', width: '150px', margin: '1rem 0rem' }}>
                    {previewImage ? (
                      <StyledImageWrapper width={150} height={150} onClick={handleChooseLogoClick} src={previewImage} alt="logo" />
                    ) : (
                      <StyledBox item display='flex' justifyContent='center' alignItems='center' >
                        <Grid display='block'>
                          <CloudUploadIcon sx={{ height: '35px', color: colors.secondary, position: 'relative', left: '1.6rem' }} />
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
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"

                  >
                    Submit
                  </Button>
                </Grid>

              </Grid>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </StyledFormWrapper>
  );
};

export default Register;


