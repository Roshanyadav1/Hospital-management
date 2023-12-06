"use client"
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './form/RadioB/RadioButtonGroup';
import CustomAutocomplete from './form/autocomplete';
import Text from './form/Textfield/Text'
import Divider from '@mui/material/Divider';
import { useParams } from 'next/navigation';


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


const Empcategories = ['Part Time','Full Time'];
const Role = ['Doctor','Manager'];


const AddEmployee = ({
    initialState , 
    validationSchema,
    handleRegister,
}) => {

  const router = useParams()
  console.log(router , "param")

  return (
        <Formik
          initialValues={{
            ...initialState,
          }}
          validationSchema={validationSchema}
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
  );
};

export default AddEmployee

