"use client"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import FORM_VALIDATION from './Components/FormValidation/formValidation';
import { FormControl, FormLabel } from '@mui/material';
import TextField from './Components/Textfield/Text'



const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  width: '100%',
  maxWidth: '650px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  backgroundColor: '#F0F2FA',
  // borderRadius: '25px',
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  paddingBottom: '1rem',
  color: '#3f51b5',
}));

const StyledFormWrapper = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
});

const StyledSelectField = styled(Select)({
  minWidth: 200,
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '2rem 0',
  display: 'flex',
  alignItems: 'center !important',
  justifyContent: 'center',
}));

const StyledLogoField = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '10px',
});

const StyledChooseFileButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
});

const StyledFileInput = styled('input')({
  display: 'none',
});

const StyledPreviewImage = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginTop: '10px',
});

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

const App = () => {
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
    const fileInput = document.getElementById('logoInput');
    fileInput.click();
  };

  return (
    <StyledFormWrapper>
      <StyledPaper elevation={3}>
        <StyledTypography variant="h4">
          Registration Form
        </StyledTypography>
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
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <TextField name="HospitalName" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="HospitalNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="HospitalEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                    {/* // yha per issue he bro  */}
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
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
                  <TextField name="HospitalAddress" label="Address" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl>
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
                  <TextField name="HospitalOwnerName" label="Name" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="HospitalOwnerNumber" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="HospitalOwnerEmail" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="UserName" label="Username" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="Password" label="Password" autoComplete="off"
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
                  <div>
                    <Button
                      Style={{ marginTop: '20px' }}
                    
                      onClick={handleChooseLogoClick}
                    >
                      Choose Logo
                    </Button>
                    <input
                      type="file"
                      id="logoInput"
                    
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {previewImage && (
                      <div >
                        <img src={previewImage} alt="Preview" style={{ marginBottom: '1rem', boxShadow: 'box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35)' }} />
                      </div>
                    )}

                  </div>
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

export default App;


