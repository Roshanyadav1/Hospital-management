'use client'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Card } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { CardContent } from '@mui/material'
import { Formik, Form } from 'formik'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { toast } from 'react-toastify'
import RadioButtonGroup from '@/components/RadioButton/RadioButtonGroup'
import DISEASE_VALIDATION from '@/components/FormValidation/DiseaseValidation'
import Text from '@/components/form/Textfield/Text'
import { styled } from '@mui/material/styles'
import { colors } from '@/styles/theme'
import Divider from '@mui/material/Divider'
import { useAddDiseasesMutation } from '@/services/Query'
import { useGetAllDiseasesQuery } from '@/services/Query'
import CircularProgress from '@mui/material/CircularProgress'
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone'
import { alpha } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Switch from '@mui/material/Switch'

const GreenSwitch = styled(Switch)(({ theme }) => ({
   '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
         backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
   },
   '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
   },
}))

const label = { inputProps: { 'aria-label': 'Color switch demo' } }


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
})

const StyledPaper = styled(Paper)(({ theme }) => ({
   //  maxWidth: '950px',
   boxShadow: theme.shadows[3],
   backgroundColor: colors.background,
   borderRadius: '20px',
   padding: '2rem',
   width: '600',
   minWidth: 240,
}))

//for the heading
const StyledTypography = styled(Typography)(() => ({
   fontWeight: 'bold',
   //  paddingBottom: '1rem',
   color: colors.primary,
}))

//for hiding the input image button

//for the whole form
const StyledFormWrapper = styled('div')({
   marginTop: '-12.5px',
   display: 'grid',
   placeItems: 'center',
   // padding: '2rem',
   '@media (max-width: 450px)': {
      padding: '0rem',
   },
})

const INITIAL_FORM_STATE = {
   // disease_id: '',
   disease_name: '',
   disease_status: '',
   created_by: 'admin',
}

const page = () => {
   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const [addDisease] = useAddDiseasesMutation()
   const { data: getDisease, isLoading } = useGetAllDiseasesQuery()

   if (isLoading)
      return (
         <div
            style={{
               height: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Box sx={{ display: 'flex' }}>
               <CircularProgress />
            </Box>
         </div>
      )
   console.log('getting diseases', getDisease?.data)

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      transform: 'translate(-50%, -50%)',
      // width: 600,
      // height: 325,
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: '20px',
   }

   const handleRegister = async (values, { resetForm }) => {
      try {
         let res = await addDisease(values)
         toast.success(res?.data?.message || 'Disease added successfully')
         resetForm()
      } catch (error) {
         // Handle error
         // console.error('Error submitting form:', error);
      }
   }

   return (
      <div>
         <Button onClick={handleOpen} variant='outlined'>
            Add Disease +
         </Button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Box sx={style}>
               <StyledFormWrapper>
                  <StyledPaper elevation={3}>
                     <Formik
                        initialValues={{
                           ...INITIAL_FORM_STATE,
                        }}
                        validationSchema={DISEASE_VALIDATION}
                        onSubmit={handleRegister}
                     >
                        {({ errors }) => (
                           <Form>
                              {console.log(errors, 'here')}
                              <Grid container spacing={2}>
                                 <Grid item xs={12}>
                                    <Text
                                       name='disease_name'
                                       label='Disease Name'
                                       autoComplete=''
                                       InputProps={{
                                          style: {
                                             background: 'white',
                                             border: 'none',
                                             borderRadius: '20px',
                                          },
                                       }}
                                    />
                                 </Grid>
                                 <Grid item xs={12}>
                                    <RadioButtonGroup
                                       label='Disease Status'
                                       name='disease_status'
                                       options={[
                                          { value: true, label: 'Active' },
                                          { value: false, label: 'Inactive' },
                                       ]}
                                    />
                                 </Grid>
                                 <Divider />

                                 <Grid item xs={12} sm={5}>
                                    <VisuallyHiddenInput
                                       id='logoInput'
                                       type='file'
                                       accept='image/*'
                                    />
                                 </Grid>
                                 <Grid item xs={12} sm={6}>
                                    <Button
                                       variant='contained'
                                       color='primary'
                                       type='submit'
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
            </Box>
         </Modal>

         <Grid container spacing={5} style={{ marginTop: 0.8 }}>
            {getDisease?.data?.map((e, i) => {
               return (
                  <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                     <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                           <CardContent>
                              <div style={{ display: 'flex' }}>
                                 <div>
                                    <Typography sx={{ paddingTop: 0.3 }}>
                                       <CoronavirusTwoToneIcon />
                                    </Typography>
                                 </div>
                                 <div>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                    >
                                       {e.disease_name}
                                    </Typography>
                                 </div>
                              </div>
                              <div style={{ display: 'block' }}>
                                 <Typography
                                    sx={{ paddingTop: 1, color: 'primary' }}
                                 >
                                    Status
                                 </Typography>
                                 <GreenSwitch {...label} defaultChecked />
                              </div>
                           </CardContent>
                        </CardActionArea>
                     </Card>
                  </Grid>
               )
            })}
         </Grid>
      </div>
   )
}

export default page
