"use client"
import { Formik, Form} from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from '../../../components/RadioButton/RadioButtonGroup'
import DOCTOR_VALIDATION from '../../../components/FormValidation/DoctorValidation';
import Text from '../../../components/Textfield/Text'
import { colors } from '@/styles/theme';
import Divider from '@mui/material/Divider';
// import CustomAutocomplete from '../../../components/Autocompletedoc';
// import { useRegisterHospitalMutation } from '@/services/Query';

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
    doc_Id: '',
    disease_Specialist: '',
    doc_Type: '',
    Created_At: '',
    Updated_At: '',

};



const dRegister = () => {

    return (
        <StyledFormWrapper>
            <StyledPaper elevation={3}>
                <StyledTypography variant="h4">
                    Doctor Registration Form
                </StyledTypography>

                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE,
                    }}
                    validationSchema={DOCTOR_VALIDATION}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ values, setFieldValue }) => (
                    <Form>
                       <Grid container spacing={2}> 
                            <Grid item xs={12} sm={12} >
                                <Text name="doc_Id" label="Doctor Id" autoComplete=""  
                                     defaultValue="Id"
                                    InputProps={{
                                        style: {
                                            background: 'white', border: 'none', borderRadius: '20px',
                                        },
                                        readOnly:true,
                                    }}
                                />
                            </Grid><Grid item xs={12} sm={6} >
                                <Text name="disease_Specialist" label="Disease Specialist" autoComplete=""
                                    InputProps={{
                                        style: {
                                            background: 'white', border: 'none', borderRadius: '20px',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                  <RadioButtonGroup
                    label="Doctor Type"
                    name="doc_Type"
                    options={[
                      { value: 'Active', label: 'Active' },
                      { value: 'Inactive', label: 'Inactive' },
                    ]}
                  />
                </Grid>
                <Divider />
                <Grid item xs={12} sm={6} >
                  <Text name="Created_At" label="Created At" autoComplete=""
                    InputProps={{
                      style: {
                        background: 'white', border: 'none', borderRadius: '20px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <Text name="Updated_At" label="Updated At" autoComplete=""
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

export default dRegister;
