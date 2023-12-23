'use client'
import {
   Container,
   Grid,
   Card,
   CardHeader,
   Avatar,
   CardContent,
   Chip,
   Switch,
   Button,
   Input,
   Skeleton,
} from '@mui/material'
import { useGetAppointmentInfoQuery } from '@/services/Query'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import '@/styles/container.css'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import { useAppointmentUpdateMutation } from '@/services/Query'
import { toast } from 'react-toastify'

const fadeInUp = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
}

function DoctorPage() {
   const { appointment_id } = useParams();
   const {
      data: appointmentInfo,
      isLoading,
   } = useGetAppointmentInfoQuery(appointment_id);
   const label = { inputProps: { 'aria-label': 'Size switch demo' } };

   const [isSwitchOn, setIsSwitchOn] = useState(false);
   const [selectedFile, setSelectedFile] = useState(null);
   const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
   const [isFileChosenError, setIsFileChosenError] = useState(false);

   const [appointmentUpdate] = useAppointmentUpdateMutation(); 

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
   };

   const handleSubmit = async () => {
      if (selectedFile) {
         const formData = new FormData();
         formData.append('file', selectedFile);

         try {
            const response = await fetch('/api/s3-upload', {
               method: 'POST',
               body: formData,
            });

            if (response.ok) {
               setIsSuccessDialogOpen(true);
               setIsFileChosenError(false);
            } else {
               console.error('Failed to upload image');
            }
         } catch (error) {
            console.error('Error uploading image:', error);
         }
      } else {
         setIsFileChosenError(true);
      }
   };

   const handleDialogClose = () => {
      setIsSuccessDialogOpen(false);
      setSelectedFile(null);
      setIsFileChosenError(false);
   };

   const handleSwitchChange = async () => {
      try {
         const obj = {
            id: appointmentInfo?.data?.[0]?.appointment_id,
            pro: {
               checked: !isSwitchOn,
            },
         };
         await appointmentUpdate(obj);
         toast.success('Status Changed Successfully');
      } catch (error) {
         toast.error(JSON.stringify(error));
      }
      setIsSwitchOn(!isSwitchOn);
   };

   return (
      <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <Grid container spacing={2}>
            {isLoading ? (
               [1, 2, 3].map((e) => (
                  <Grid
                     key={e}
                     item
                     xs={12}
                     sm={12}
                     md={6}
                     lg={4}
                     sx={{ paddingBottom: '1rem' }}
                     component={motion.div}
                     variants={fadeInUp}
                     initial='hidden'
                     animate='visible'
                  >
                     <Card sx={{ backgroundColor: '#C4D0DC', width: '100%', height: '100%' }}>
                        <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
                     </Card>
                  </Grid>
               ))
            ) : (
               appointmentInfo?.data?.map((e, i) => (
                  <Grid
                     item
                     key={i}
                     xs={12}
                     sm={12}
                     md={6}
                     lg={4}
                     sx={{
                        paddingBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                     }}
                     component={motion.div}
                     variants={fadeInUp}
                     initial='hidden'
                     animate='visible'
                  >
                     <Card sx={{ backgroundColor: '#35CFF4', width: '500px', height: '350px',marginLeft:'200%', textAlign: 'center', padding: '1rem' }}>
                        <CardHeader
                           avatar={
                              <Avatar
                                 sx={{ bgcolor: '#13293D' }}
                                 aria-label='recipe'
                              >
                                 {e?.doctor?.employee?.employee_name.split('')[0]}
                              </Avatar>
                           }
                           title={e?.doctor?.employee?.employee_name}
                           subheader={
                              e.appointment_time + '   ' + e.appointment_date
                           }
                        />
                        <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                           <Chip
                              label={'Disease Name : ' + e?.disease?.disease_name}
                              sx={{ backgroundColor: '#7F8FA45B', marginBottom: '0.5rem' }}
                           />
                           <Chip
                              label={'Patient Name : ' + e?.patient?.patient_name}
                              sx={{ backgroundColor: '#7F8FA45B', marginBottom: '0.5rem' }}
                           />
                           <Chip
                              label={'Appointment No. : ' + e?.appointment_number}
                              sx={{ backgroundColor: '#7F8FA45B', marginBottom: '1rem' }}
                           />
                           <Switch
                              {...label}
                              checked={isSwitchOn}
                              onChange={handleSwitchChange}
                              color='success' // Change the color to green
                              size='small'
                              sx={{ marginBottom: '1rem' }}
                           />
                           {isSwitchOn ? (
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                 <Input type='file' onChange={handleFileChange} sx={{ marginBottom: '0.5rem' }} />
                                 <Button
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    onClick={handleSubmit}
                                    sx={{ background: '#4CAF50', color: 'white', '&:hover': { background: '#45a049' } }}
                                 >
                                    Add Prescription
                                 </Button>
                                 {isFileChosenError && (
                                    <p style={{ color: 'red', marginTop: '0.5rem' }}>
                                       Please choose the file.
                                    </p>
                                 )}
                              </div>
                           ) : (
                              <p>Unchecked Message</p>
                           )}
                        </CardContent>

                        <Dialog
                           open={isSuccessDialogOpen}
                           onClose={handleDialogClose}
                        >
                           <DialogTitle>
                              Prescription Submitted Successfully!
                           </DialogTitle>
                           <DialogContent>
                              <DialogContentText>
                                 {isFileChosenError
                                    ? 'Error: Please choose the file before closing.'
                                    : ''}
                              </DialogContentText>
                           </DialogContent>
                           <DialogActions>
                              <Button onClick={handleDialogClose} color='primary'>
                                 OK
                              </Button>
                           </DialogActions>
                        </Dialog>
                     </Card>
                  </Grid>
               ))
            )}
         </Grid>
      </Container>
   )
}

export default DoctorPage;


// adjust all the items in the center of the card and the button s should not be in the samethe ADD PRESCRIPTION button should be below the choose file button, add styles to the choose file buttton and apply green color to the toggle switch button not tot he ADD PRESCRIPTION button 

// improve the UI of the card in such a way that width will will be 500px and height will be 350px and the card should be in the middle of the page, the color of the toggle switch button should be green and the choose file button should contain attractive styles and decrease the size of the APP PRESCRIPTION button make this requirments execute to the card properly which willl give the proper user experience and attractive Ui