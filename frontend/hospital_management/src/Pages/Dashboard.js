'use client'
import DataGridTable from './DataGridTable'
import { useAddEmployeeMutation, useGetEmployeeQuery } from '@/services/Query'
import { columns } from '@/data/ColumData'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form} from 'formik';
import { Employee_Validation } from '../components/FormValidation/FormValidation';
import Textfield from '../components/Textfield/Text'
import RadioButtonGroup from '@/components/RadioB/RadioButtonGroup'
import { Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import CustomAutocomplete from '@/components/Autocomplete'


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

function Dashboard() {
   const [open, setOpen] = useState(false)
   const { data: empData } = useGetEmployeeQuery()
  const [addemployee] = useAddEmployeeMutation()

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = async (values,{resetForm}) => {
    try {
      await addemployee(values);
      resetForm();
    } catch (error) {
      // Handle error
      // console.error('Error submitting form:', error);
    }

  }

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            mt={4}
         >
            <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
               Employee
            </Typography>
            <Grid>
               <Button variant='outlined' onClick={handleClickOpen}>
                  Add Employee
               </Button>
            </Grid>
            <Grid container mt={2}>
               <Grid item xs={12}>
                  <DataGridTable
                     data={empData?.data || []}
                     columns={columns}
                     map_by={row => row.employee_id}
                  />
               </Grid>
            </Grid>
         </Grid>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Employee Registration Form</DialogTitle>
            <IconButton
               aria-label='close'
               onClick={handleClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <DialogContent>
            <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={Employee_Validation}
          onSubmit={handleRegister}
        >

          {({ values, handleChange, handleBlur, touched}) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                  <Textfield name="employee_name" label="Name" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name="employee_email" label="Email" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="employee_number" label="Phone" autoComplete="off"
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="employee_password" label="Password" autoComplete="off"
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
            </DialogContent>
         </Dialog>
      </Box>
   )
}

export default Dashboard
