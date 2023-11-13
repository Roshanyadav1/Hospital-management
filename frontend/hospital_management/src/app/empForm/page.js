"use client"
//import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './components/RadioB/RadioButtonGroup';

import Employee_Validation from './components/EmployeeValidation/employeeValidation';
import { TextField } from '@mui/material';
import Text from './components/Textfield/Text'
import { colors } from '@/styles/theme';
import Divider from '@mui/material/Divider';



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


const INITIAL_FORM_STATE = {
    Employee_Name: '',
    Employee_Email: '',
    Employee_Number: '',
    Employee_password: '',
    Employee_Type:'',
    Employee_Role:'',
    Employee_Status:'',
   Created_By:'',
   Updated_By:'',
};
   


const Empcategories = ['Doctor', 'Admin', 'Category 3', 'Category 4'];
const Role = ['one', 'two', 'three', 'Category 4'];
// const status =['1', '2', '3', 'Category 4'];


const EmpRegister = () => {
   

   

    return (
        <StyledFormWrapper>
            <StyledPaper elevation={3}>


                <StyledTypography variant="h4">
                  Employee Registration Form
                </StyledTypography>
                <Typography variant="h6">
                    General Information
                </Typography>

                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE,
                    }}
                    validationSchema={Employee_Validation}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >

                    {({ values, setFieldValue }) => (
  <Form>
       <Grid container spacing={2}>
       <Grid item xs={12} sm={12} >
                  <Text name="Employee_Name" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Text name="Employee_Email" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Text name="Employee_Number" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="Employee_password" label="Password" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    name="Employee_Type"
                    options={Empcategories}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="type"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
                          },
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="Employee_Type" component="div" style={{ color: colors.error , fontSize: 10 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    name="Employee_Role"
                    options={Role}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Role"
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            background: 'white', border: 'none', borderRadius: '25px', padding: '10px',
                          },
                        }}
                      />
                    )}
                  />
                  <ErrorMessage name="Employee_Role" component="div" style={{ color: colors.error , fontSize: 10 }} />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Status"
                    name="Employee_Status"
                    options={[
                      { value: 'Active', label: 'Active' },
                      { value: 'Inactive', label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <Divider />
                <Grid item xs={12} sm={8} >
                  <Text name="Created_By" label="Created By" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <VisuallyHiddenInput id="logoInput" type='file' accept='image/*' />
                </Grid>

                <Grid item xs={12} sm={8} >
                  <Text name="Updated_By" label="Updated By" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={5}>
                  <VisuallyHiddenInput id="logoInput" type='file' accept='image/*' />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='large'
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
        
    export default EmpRegister    


