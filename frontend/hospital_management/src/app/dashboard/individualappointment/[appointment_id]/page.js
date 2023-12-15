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

const fadeInUp = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
}

function DoctorPage() {
   const { appointment_id } = useParams();
   const {
      data: appointmentInfo,
      // isLoading,
      // isError,
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

         const result = await appointmentUpdate(obj);

         console.log('Result of updateStatus mutation:', result);


      } catch (error) {
         console.error('Error changing status:', error);
      }

      setIsSwitchOn(!isSwitchOn);
   };


   return (
      <Container maxWidth='md'>
         <Grid container spacing={2} justifyContent='center'>
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
                     <Card sx={{ backgroundColor: '#C4D0DC' }}>
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
                           <Chip
                              label={'Disease Name : ' + e?.disease?.disease_name}
                              sx={{ backgroundColor: '#7F8FA45B' }}
                           />
                        </CardContent>
                        <CardContent>
                           <Chip
                              label={'Patient Name : ' + e?.patient?.patient_name}
                              sx={{ backgroundColor: '#7F8FA45B' }}
                           />
                        </CardContent>
                        <CardContent>
                           <Chip
                              label={'Appointment No. : ' + e?.appointment_number}
                              sx={{ backgroundColor: '#7F8FA45B' }}
                           />
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
                              <div>
                                 <Input type='file' onChange={handleFileChange} />
                                 <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={handleSubmit}
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
               ))}
         </Grid>
      </Container>
   )
}

export default DoctorPage

// check this code and specify that will the checked field that is boolean in api and by default false will be turned to true after clicking on the toggle switch button or not

// appointmentUpdate: build.mutation({
//    query: (p) => ({
//       url: '/appointment/update/' + p.id,
//       method: 'PATCH',
//       body: p.pro,
//    }),
//    invalidatesTags: ['APP'],
// }),
// provide the functionality in this code in such a way that when the toggle button is clicked on as by default it is off then the api should fetched through the useAppointmentUpdateMutation() hook and the checked field that is boolean in api should be turned true with the proper use of the function i have declared above, or you can update it for proper requirement


// provide the functionality in this code in such a way that when the doctor will click on the switch button and check it the api will be patched through the useAppointmentUpdateMutation() hook as given above in such a way that the appointment status will turn true in the api through this and also add one functionality in this that once the switch button will be checked it will set disabled  and doctore have to add prescription after that, as


// add  the functionality to the Add prescription button in such a way that when the button is clicked the image will be stored in s3-upload in AWS  to this above route .js file, provide the code perfectly that send the image to the bucket perfectly