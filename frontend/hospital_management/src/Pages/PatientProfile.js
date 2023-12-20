import * as React from 'react'
import Card from '@mui/material/Card'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleIcon from '@mui/icons-material/People'
import Typography from '@mui/material/Typography'
import { Grid, Container, IconButton } from '@mui/material'
import dayjs from 'dayjs'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import patientLogo from '../assets/patientlogo2.png'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

function PatientProfile() {
   const [value, setValue] = React.useState(dayjs('2022-04-17'))

   return (
      <div>
         <Container maxWidth='lg' p={2}>
            <Grid container>
               <Grid item xs={12} sm={8}>
                  <Grid container>
                     <Grid item xs={12} sm={12}>
                        <Card
                           sx={{
                              position: 'relative',
                              minWidth: 450,
                              paddingY: 6,
                              paddingX: 2,
                              marginTop: 7,
                              borderRadius: 2,
                           }}
                        >
                           <Grid container>
                              <Grid item xs={4} sm={4}>
                                 <Image
                                    priority={true}
                                    src={patientLogo}
                                    height={140}
                                    width={140}
                                    style={{ marginLeft: 15 }}
                                 />
                              </Grid>
                              <Grid item xs={8} sm={8}>
                                 <Grid container sx={{marginLeft:10}}>
                                    <Grid item xs={4} sm={4}>
                                       <Typography variant='h6' component='h5'>
                                          Name
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Age
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Gender
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Address
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Blood group
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                       <Typography variant='h6' component='h5'>
                                          Mohammad Haris
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          18
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Male
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          Harda
                                       </Typography>
                                       <Typography variant='h6' component='h5'>
                                          O+ve
                                       </Typography>
                                    </Grid>
                                 </Grid>
                              </Grid>
                           </Grid>
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={12} mt={2}>
                        <div style={{ display: 'flex', marginBottom: 15 }}>
                           <PeopleIcon />
                           <Typography variant='h6' color='primary'>
                              Appointment History
                           </Typography>
                        </div>
                        <Accordion sx={{borderRadius:2}}>
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              
                           >
                              <Typography>12/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              
                                 <Grid container>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Doctor
                                       </Typography>
                                       <Typography variant='body2'>
                                          Dr. Sumit Jain
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Disease
                                       </Typography>
                                       <Typography variant='body2'>Fever</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Status
                                       </Typography>
                                       <Chip
                                          label='Attended'
                                          color='secondary'
                                          size='small'
                                       />
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Button variant='contained' size='small'>
                                          View Prescription
                                       </Button>
                                    </Grid>
                                 </Grid>
                              
                           </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{borderRadius:2}}>
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                             
                           >
                              <Typography>15/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                           <Grid container>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Doctor
                                       </Typography>
                                       <Typography variant='body2'>
                                          Dr. Rashmika jain
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Disease
                                       </Typography>
                                       <Typography variant='body2'>Cold</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Status
                                       </Typography>
                                       <Chip
                                          label='Not attended'
                                          color='secondary'
                                          size='small'
                                          disabled
                                       />
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Button variant='contained' size='small'>
                                          View Prescription
                                       </Button>
                                    </Grid>
                                 </Grid>
                              
                           </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{borderRadius:2}}>
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              
                           >
                              <Typography>18/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                           <Grid container>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Doctor
                                       </Typography>
                                       <Typography variant='body2'>
                                          Dr. Jagrati Junwal 
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Disease
                                       </Typography>
                                       <Typography variant='body2'>Dehydration</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Typography variant='b1' component='h5'>
                                          Status
                                       </Typography>
                                       <Chip
                                          label='Attended'
                                          color='secondary'
                                          size='small'
                                       />
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                       <Button variant='contained' size='small'>
                                          View Prescription
                                       </Button>
                                    </Grid>
                                 </Grid>
                              
                           </AccordionDetails>
                        </Accordion>
                     </Grid>
                  </Grid>
               </Grid>

               <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DemoContainer
                        components={['DateCalendar', 'DateCalendar']}
                        sx={{
                           marginLeft: 10,
                           marginTop: 8,
                        }}
                     >
                        <div style={{ display: 'flex' }}>
                           <CalendarMonthIcon />
                           <Typography variant='h6' color='primary'>
                              Scheduled calender
                           </Typography>
                        </div>
                        <DemoItem>
                           <DateCalendar
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                              style={{
                                 boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                 
                              }}
                           />
                        </DemoItem>
                     </DemoContainer>
                  </LocalizationProvider>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default PatientProfile
