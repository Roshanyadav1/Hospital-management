
'use client'
import { Grid, CardHeader, Divider, Container, Badge } from '@mui/material'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Chip from '@mui/material/Chip'
import HistoryIcon from '@mui/icons-material/History'
import { useGetAppointmentHistoryQuery } from '@/services/Query'

const ProfileCard = ({ icon, title, content }) => (
   <Card bgcolor={'#fff'} borderRadius={2} boxShadow={3} margin={2}>
      <CardHeader
         avatar={icon}
         title={title}
         sx={{ display: 'flex', alignItems: 'center' }}
      />
      <Divider />
      <CardContent>
         <Typography variant='body2' p={1}>
            {content}
         </Typography>
      </CardContent>
   </Card>
)

const DoctorProfile = ({ id }) => {
   const { data: appointmentHistory, isLoading } = useGetAppointmentHistoryQuery(id);

   if (isLoading) {
      return "loading"
   }

   const appointmentsByDate = Array.isArray(appointmentHistory?.data)
      ? appointmentHistory?.data.reduce((acc = [], appointment = []) => {
         const date = appointment.appointment_date;
         if (!acc[date]) {
            acc[date] = [];
         }
         acc[date].push({
            patient_id: appointment.patient.patient_id,
            patient_name: appointment.patient.patient_name,
            doctor_name: appointment.doctor.employee.employee_name,
            disease_name: appointment.disease.disease_name,
            appointment_time: appointment.appointment_time,
            checked: appointment.checked,
         });
         return acc;
      }, {}) : [];

   return (
      <Container maxWidth='lg' p={2}>
         <Grid container boxShadow={1} spacing={2}>
            <Grid container item bgcolor={'fff'} display={'flex'} direction='column'>
               {
                  <Image
                     priority={true}
                     src='https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg'
                     height={140}
                     width={140}
                     style={{ borderRadius: '50%', padding: 10 }}
                  />
               }
               <Grid
                  item
                  xl={8}
                  display='flex'
                  direction='column'
                  justifyContent='center'
                  margin={0}
                  p={{ xs: 2, sm: 5 }}
                  gap={10}
               >
                  <Typography gutterBottom variant='h4' component='div'>
                     Name
                     <Typography variant='body1' color='text.secondary'>
                        EXECUTIVE Doctor FORTIS C DOC | Fortis C-Doc
                     </Typography>
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
         <Grid container marginTop={2} spacing={2}>
            <Grid xs={12} sm={6}>
               <ProfileCard
                  icon={<PersonIcon sx={{ marginRight: 1 }} />}
                  title={
                     <Typography gutterBottom variant='h6'>
                        {' '}
                        About
                     </Typography>
                  }
                  content={`Dr is a renowned Neurosurgeon with over 20 years
                of experience. Dr is an adept in all disciplines of Brain
                and Spine Surgery including Brain tumor surgery among adults, as
                well as pediatric and Neonatal, endoscopic surgery,
                microvascular decompression surger...`}
               />
               <br />
               <ProfileCard
                  icon={<SchoolIcon sx={{ marginRight: 1 }} />}
                  title={
                     <Typography gutterBottom variant='h6'>
                        Education
                     </Typography>
                  }
                  content='F.R.C.S.(London), F.R.C.S. (Neurosurgery), CCST (UK), Spine
                 Fellowship (USA), Skull Base & Vascular Fellowship (USA)...'
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <ProfileCard
                  icon={<HistoryIcon sx={{ marginRight: 1 }} />}
                  title={
                     <Typography gutterBottom variant='h6'>
                        {' '}
                        History
                     </Typography>
                  }
                  content={appointmentsByDate?.map((appointment, index) => (
                     // eslint-disable-next-line react/jsx-key
                     <Accordion sx={{ boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)' }} key={index}>
                        <AccordionSummary
                           expandIcon={
                              <Badge badgeContent={appointment.length} color='primary'>
                                 <ExpandMoreIcon />
                              </Badge>
                           }
                           aria-controls='panel1a-content'
                           id='panel1a-header'
                        >
                           <Typography variant='h6'>Date - {appointment.appointment_date}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ marginLeft: 1 }}>
                           <div style={{ display: 'flex', paddingBottom: 10 }}>
                              <Typography variant='body2'>
                                 Number of Appointments conducted =
                              </Typography>
                           </div>
                           <Typography variant='h6' paddingY={1}>
                              Patient Details -
                           </Typography>
                           <Grid container>
                              <Grid item xs={4} sm={4}>
                                 <Typography variant='b1' component='h5'>
                                    Name
                                 </Typography>
                                 <Typography variant='body2'>{appointment.patient.patient_name}</Typography>
                              </Grid>
                              <Grid item xs={4} sm={4}>
                                 <Typography variant='b1' component='h5'>
                                    Disease
                                 </Typography>
                                 <Typography variant='body2'>{appointment.disease.disease_name}</Typography>
                              </Grid>
                              <Grid item xs={4} sm={4}>
                                 <Typography variant='b1' component='h5'>
                                    Status
                                 </Typography>
                                 {
                                    appointment.checked === true ? <Chip label='Attended' size='small' sx={{ color: 'white', backgroundColor: '#35CFF4' }} /> : <Chip label='Not Attended' size='small' sx={{ color: 'white', backgroundColor: '#35CFF4' }} />
                                 }
                              </Grid>
                           </Grid>
                        </AccordionDetails>

                     </Accordion>))
                  }
               />
            </Grid>
         </Grid>
      </Container>
   )
}
export default DoctorProfile