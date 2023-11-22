"use client"
import { useState } from 'react';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './components/RadioB/RadioButtonGroup';
import CustomAutocomplete from './components/autocomplete';
import { useAddEmployeeMutation, useRegisterHospitalMutation } from '@/services/Query';
import Employee_Validation from './components/EmployeeValidation/employeeValidation';
import Text from './components/Textfield/Text'
import { colors } from '@/styles/theme';
import Divider from '@mui/material/Divider';



const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: '950px',
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
  employee_name: '',
  employee_email: '',
  employee_number: '',
  employee_password: '',
  employee_type: '',
  employee_role: '',
  employee_status: '',
  created_by: 'admin',
  updated_by: 'admin',
};



const Empcategories = ['Part Time','Full Time'];
const Role = ['Doctor','Manager'];
// const status =['1', '2', '3', 'Category 4'];


const EmpRegister = () => {
  const [addemployee] = useAddEmployeeMutation()

  const handleRegister = async (values,{resetForm}) => {
    try {
      let res= await addemployee(values);
      toast.success(res?.data?.message || "Employee added successfully")
      resetForm();
    } catch (error) {
      toast.error(JSON.stringify(error))
      // Handle error
      // console.error('Error submitting form:', error);
    }

  }

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
          // onSubmit={(values) => {
          //   console.log(values);
          // }}
          onSubmit={handleRegister}
        >

          {({ values, handleChange, handleBlur, touched}) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                  <Text name="employee_name" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Text name="employee_email" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="employee_number" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Text name="employee_password" label="Password" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <CustomAutocomplete
                    name="employee_type"
                    label="Employee Type"
                    options={Empcategories}
                    value={values.employee_type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.employee_type}
                  />
                </Grid>
               
                <Grid item xs={12} sm={6}>
                  <CustomAutocomplete
                    name="employee_role"
                    label="Employee Role"
                    options={Role}
                    value={values.employee_role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.employee_role}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Status"
                    name="employee_status"
                    options={[
                      { value: 'Available', label: 'Active' },
                      { value: 'Unavailable', label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <Divider />
                {/* <Grid item xs={12} sm={8} >
                  <Text name="created_by" label="Created By" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid> */}

                {/* <Grid item xs={12} sm={6}>
                  <VisuallyHiddenInput id="logoInput" type='file' accept='image/*' />
                </Grid>

                <Grid item xs={12} sm={8} >
                  <Text name="updated_by" label="Updated By" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid> */}

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


