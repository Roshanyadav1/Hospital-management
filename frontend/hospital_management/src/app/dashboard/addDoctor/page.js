"use client"
import { Formik, Form} from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import RadioButtonGroup from './Components/RadioB/RadioButtonGroup';
import DOCTOR_VALIDATION from './Components/Doc_validation/doc_validation';
import Text from './Components/Textfield/Text'
import { colors } from '@/styles/theme';
import Divider from '@mui/material/Divider';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'; 
import { doctorList } from '@/data/ColumData';
import DataGridTable from '@/components/DataGridTable';


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


const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dRegister = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const [data, setData] = useState([]);
console.log('%c [ data ]-113', 'font-size:13px; background:pink; color:#bf2c9f;', data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hospital-management-six-chi.vercel.app/api/doctor/view/');
        const data = response.data ?? [];
        console.log(data)
        setData(data?.data || []);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    return (
      <Box sx={{ flexGrow: 1 }}>

<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
  
<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Doctor
          </Typography>
<Grid>
<Button variant="outlined" onClick={handleClickOpen}>
        Add Doctor
      </Button>
    </Grid>

    <Grid container mt={2}>
  <Grid item xs={12}>
  <DataGridTable        
            data={data || []}
            columns={doctorList}
            map_by={(row => row.doctor_id)}
             />
  </Grid>
  </Grid>
</Grid>
<StyledFormWrapper>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Doctor Registration Form</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
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
                <DialogActions>
                <Grid item xs={12}   direction="row"
  justifyContent="flex-end"
  alignItems="center">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='large'
                    >
                    Submit
                  </Button>
                </Grid>
                </DialogActions>
                        </Grid>
                    </Form>
                     )}
                </Formik>
                </DialogContent>
      </Dialog>
      </StyledFormWrapper>
                    </Box>
    );
};

export default dRegister;
