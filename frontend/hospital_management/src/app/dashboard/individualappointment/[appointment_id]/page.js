'use client'
import {
   Container,
   Grid,
   Card,
   CardHeader,
   Avatar,
   CardContent,
   Switch,
   Button,
   Input,
   Skeleton,
   Typography
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
import { useAddPrescriptionMutation } from '@/services/Query'
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
   
   const [addPrescription] = useAddPrescriptionMutation();

   const handleFileChange = (event) => {
     setSelectedFile(event.target.files[0]);
   };
 
   const handleSubmit = async () => {
       if (selectedFile) {
      //   const formData = new FormData();
      //   formData.append('file', selectedFile);
      //   formData.append('appointment_id', appointmentInfo?.data?.[0]?.appointment_id);
      console.log('calll')
    
        try {
           await addPrescription({'file':selectedFile,'appointment_id': appointmentInfo?.data?.[0]?.appointment_id});
    
           setIsSuccessDialogOpen(true);
          setIsFileChosenError(false);
        } catch (error) {
          console.error('Error uploading prescription photo:', error);
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
      <Container maxWidth='lg'>

         <Grid container spacing={2}>

            {isLoading && (
               <>
                  {
                     [1, 2, 3].map((e) => (
                        <Grid key={e} item xs={12} sm={12} md={6} lg={4} sx={{ paddingBottom: '1rem' }} component={motion.div} variants={fadeInUp} initial='hidden' animate='visible'>
                           <Skeleton variant="rectangular" width={300} height={400} animation="wave" />
                        </Grid>
                     ))
                  }
               </>
            )}
         </Grid>

         <Grid container spacing={2}>
            {Array.isArray(appointmentInfo?.data) &&
               appointmentInfo?.data?.map((e, i) => (
                  <Grid
                     item
                     key={i}
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
                     <Card sx={{ backgroundColor: '#fff', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',border:'1px solid #13293D' }}>
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
                        <CardContent>
                           {e?.disease?.disease_name && (
                              // eslint-disable-next-line react/jsx-no-undef
                              <Typography variant="body1" sx={{ padding: '3px', marginBottom: '3px' }}>
                                 {'Disease Name : ' + e?.disease?.disease_name}
                              </Typography>
                           )}
                        </CardContent>
                        <CardContent>
                           {e?.patient?.patient_name && (
                              // eslint-disable-next-line react/jsx-no-undef
                              <Typography variant="body1" sx={{ padding: '3px', marginBottom: '3px' }}>
                                 {'Patient Name : ' + e?.patient?.patient_name}
                              </Typography>
                           )}
                        </CardContent>
                        <CardContent>
                           {e?.appointment_number && (
                              // eslint-disable-next-line react/jsx-no-undef
                              <Typography variant="body1" sx={{ padding: '3px', marginBottom: '3px' }}>
                                 {'Appointment No : ' + e?.appointment_number}
                              </Typography>
                           )}
                        </CardContent>


                        <CardContent>
                           <Switch
                              {...label}
                              checked={isSwitchOn}
                              onChange={handleSwitchChange}
                              color='primary'
                              size='small'
                              disabled={isSwitchOn}
                           />
                           {isSwitchOn ? (
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                 <Input type='file' onChange={handleFileChange} />
                                 <Button
                                    // variant='contained'
                                    color='primary'
                                    size='small'
                                    onClick={handleSubmit}
                                    style={{ margin: 5 }}
                                 >
                                    Add Prescription
                                 </Button>
                                 {isFileChosenError && (
                                    <p style={{ color: 'red' }}>
                                       Please choose the file.
                                    </p>
                                 )}
                              </div>
                           ) : (
                              <p>Unchecked</p>
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
               ))}
         </Grid>
      </Container>
   )
}

export default DoctorPage

 