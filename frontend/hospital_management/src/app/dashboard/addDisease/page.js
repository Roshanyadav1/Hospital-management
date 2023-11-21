"use client"
import { useState } from 'react';

import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import DISEASE_VALIDATION from './Components/D_Validation/d_Validation';
import Text from './Components/Textfield/Text'
import { colors } from '@/styles/theme';
import Divider from '@mui/material/Divider';
// import CustomAutocomplete from './Components/AutocompleteDis';
import {useAddDiseasesMutation } from '@/services/Query';
 
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


//for hiding the input image button


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

const INITIAL_FORM_STATE = {
  // disease_id: '',
  disease_name: '',
  disease_status: '',
  created_by: 'admin',
};



const DRegister = () => {

  const [addDisease] =  useAddDiseasesMutation()

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

  const handleRegister = async (values,{resetForm}) => {
    try {
       await addDisease(values);
      resetForm();
    } catch (error) {
      // Handle error
      // console.error('Error submitting form:', error);
    }

  }

    return (
        <StyledFormWrapper>
            <StyledPaper elevation={3}>
                <StyledTypography variant="h4">
                    Disease Registration Form
                </StyledTypography>

                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE,
                    }}
                    validationSchema={DISEASE_VALIDATION}
                    // onSubmit={(values) => {
                    //     console.log(values);
                    // }}
                    onSubmit={handleRegister}

                >
                    {({   errors }) => (
                    <Form>
                      {
                        console.log(errors , "here")
                      }
                       <Grid container spacing={2}> 
                            {/* <Grid item xs={12} sm={12} >
                                <Text name="disease_id" label="Disease Id" autoComplete=""  
                                     defaultValue="Id"
        
                                    InputProps={{
                                        style: {
                                            background: 'white', border: 'none', borderRadius: '20px',
                                        },
                                        readOnly:true
                                    }}
                                    
                                />
                            </Grid> */}
                            <Grid item xs={12}  >
                                <Text name="disease_name" label="Disease Name" autoComplete=""
                                    InputProps={{
                                        style: {
                                            background: 'white', border: 'none', borderRadius: '20px',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                  <RadioButtonGroup
                    label="Disease Status"
                    name="disease_status"
                    options={[
                      { value: 'Active', label: 'Active' },
                      { value: 'Inactive', label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <Divider />
                {/* <Grid item xs={12} sm={6} >
                  <Text name="created_at" label="Created At" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                       readOnly:true
                    }}
                  />
                </Grid> */}
                {/* <Grid item xs={12} sm={6} >
                  <Text name="updated_at" label="Updated At" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                       readOnly:true
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

export default DRegister;
