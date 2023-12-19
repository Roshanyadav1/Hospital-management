import * as React from 'react'
import Card from '@mui/material/Card'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleIcon from '@mui/icons-material/People'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Container, IconButton } from '@mui/material'
import dayjs from 'dayjs'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
                                 <Grid container>
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
                        <div style={{ display: 'flex' , marginBottom:15}}>
                           <PeopleIcon />
                           <Typography variant='h6' color='primary'>
                              Appointment History
                           </Typography>
                        </div>
                        <Accordion>
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls='panel1a-content'
                              id='panel1a-header'
                           >
                              <Typography>12/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              <Typography>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing
                                 elit. Suspendisse malesuada lacus ex, sit amet
                                 blandit leo lobortis eget.
                              </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion>
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls='panel2a-content'
                              id='panel2a-header'
                           >
                              <Typography>15/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              <Typography>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing
                                 elit. Suspendisse malesuada lacus ex, sit amet
                                 blandit leo lobortis eget.
                              </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion >
                           <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls='panel3a-content'
                              id='panel3a-header'
                           >
                              <Typography>18/12/23</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              <Typography>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing
                                 elit. Suspendisse malesuada lacus ex, sit amet
                                 blandit leo lobortis eget.
                              </Typography>
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
                                 border: '2px solid primary',
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
