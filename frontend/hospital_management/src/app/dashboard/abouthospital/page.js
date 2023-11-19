"use client"
// import { useState } from 'react';
import { Formik, Form } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import FORM_VALIDATION from './Components/FormValidation/formValidation';
import { Box,  } from '@mui/material';
import Text from './Components/Textfield/Text'
import { colors } from '@/styles/theme';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Image from 'next/image';
import CustomAutocomplete from './Components/Autocomplete';
import { useRegisterHospitalMutation } from '@/services/Query';
// import * as Yup from 'yup'




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
// const StyledImageWrapper = styled(Image)(({ height, width }) => ({
//   height: height || '100px',
//   width: width || '100px',
//   borderRadius: 10,
//   border: `2px solid ${colors.secondary}`,
// }));

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
  },
}));
console.log(StyledBox)
const INITIAL_FORM_STATE = {
  hospital_name: '',
  hospital_phone: '',
  hospital_email: '',
  hospital_address: '',
  hospital_city: '',
  hospital_type: '',
  hospital_category: '',
  hospital_status: true,
  // logo: null,
  hospital_owner_name: '',
  hospital_owner_phone: '',
  hospital_owner_email: '',
  username: '',
  password: '',
};





const categories = ["Pediatrics", "Surgery","Obstetrics","Gynecology (OB/GYN)","Cardiology","Dental Clinic","Radiology","Oncology","Psychiatry"];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Surat', 'Indore', 'Bhopal', 'Vadodara', 'Coimbatore', 'Ludhiana', 'Amritsar', 'Patna', 'Ranchi', 'Bhubaneswar',
  'Thiruvananthapuram', 'Kochi', 'Visakhapatnam', 'Agra', 'Varanasi', 'Mysore', 'Madurai', 'Vijayawada',
];

const Register = () => {
  // here is the registerHospital api  Mutation
  const [registerHospital] = useRegisterHospitalMutation()

  // const [previewImage, setPreviewImage] = useState(null);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setPreviewImage(imageUrl);
  //   } else {
  //     setPreviewImage(null);
  //   }
  // };

  // const handleChooseLogoClick = () => {
  //   let fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.accept = 'image/*';
  //   fileInput.onchange = handleImageChange;
  //   fileInput.click();
  // };

  // const FORM_VALIDATION = Yup.object().shape({
  //   hospitalCity: Yup.string().required('City is required'),
  //   // Add other Yup validations for other fields if needed
  // });

  // onsubmit={async(initialValues) => {
  //   const result = await registerHospital(values);
  // }}

  const handleRegister = async (values,{resetForm}) => {
    try {
      const result = await registerHospital(values);
      alert("Hospital Registered Successfully")

      // Log the result to the console
      console.log('Result of registerHospital mutation:', result);
      
      resetForm();

    } catch (error) {
      // Handle error
      // console.error('Error submitting form:', error);
    }

  }

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
          // onSubmit={(values) => {
          //   console.log(values);
          // }}

          onSubmit={handleRegister}

        >
          {({ values, handleChange, handleBlur, touched }) => (
            <Form>
              {
                // console.log(values, "the values are ")
              }
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <Text name="hospital_name" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="hospital_phone" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Text name="hospital_email" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                {/* // yha per issue he bro  */}
                <Grid item xs={12} sm={6}>
                  <CustomAutocomplete
                    name="hospital_city"
                    label="City"
                    options={cities}
                    value={values.hospital_city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.hospital_city}
                  />
                </Grid>
                {/* provide proper error usding yup validation for this field if the city is not selected from the dropdown */}
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Type"
                    name="hospital_type"
                    options={[
                      { value: 'Public', label: 'Public' },
                      { value: 'Private', label: 'Private' },
                      { value: 'General', label: 'General' },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Text name="hospital_address" label="Address" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomAutocomplete
                    name="hospital_category"
                    label="Category"
                    options={categories}
                    value={values.hospital_category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.hospital_category}
                  />
                  {/* <ErrorMessage name="category" component="div" style={{ color: colors.error, fontSize: 10 }} /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Status"
                    name="hospital_status"
                    options={[
                      { value: true, label: 'Active' },
                      { value: false, label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <hr />
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Hospital Owner Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="hospital_owner_name" label="Name" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="hospital_owner_phone" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Text name="hospital_owner_email" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="username" label="Username" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="password" label="Password" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <Typography variant="h6" style={{ fontWeight: 'bold' }}>
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
                  </Box> */}
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

// provide the reset function as when the submit button is clicked means when it is submitted then the form should be reset and all fields should be empty if the fields were correctly filled
  );
};

export default Register;

