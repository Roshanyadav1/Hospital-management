import { Grid, IconButton } from '@mui/material'
import React from 'react'
import doctorImage from '../assets/doctorIllustration.png'
import Card from '@mui/material/Card'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import PeopleIcon from '@mui/icons-material/People'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function DoctorDashboard() {
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
                           <div>
                              
                                 <Typography variant='h3' color='primary'>
                                    Good morning,
                                 </Typography>
                                 <Typography variant='h3' color='secondary'>
                                    {' '}
                                    Dr Smith
                                 </Typography>
                             
                              <Typography variant='b2' color='primary'>
                                 Have a nice day at work{' '}
                              </Typography>
                           </div>
                           <Image
                              src={doctorImage}
                              alt='Doctor illustration'
                              height={200}
                              style={{
                                 position: 'absolute',
                                 right: '0',
                                 top: '0',
                              }}
                           />
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={12} mt={2}>
                        <div style={{ display: 'flex' }}>
                           <PeopleIcon />
                           <Typography variant='h6' color='primary'>
                              Upcomming appointments
                           </Typography>
                        </div>
                        <Box
                           sx={{
                              width: '100%',
                              //   minWidth: 470,
                              bgcolor: 'background.paper',
                              borderRadius: 2,
                              boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                              marginTop: 1,
                           }}
                        >
                           <nav aria-label='secondary mailbox folders'>
                              <List>
                                 <ListItem>
                                    <ListItemText primary='keshav sharma' />
                                    <ListItemText primary='Asthama' />
                                    <ListItemText primary='9:00' />
                                    <IconButton style={{ color: '#35CFF4' }}>
                                    <FiberManualRecordIcon />
                                    </IconButton>
                                    <Button variant='contained' size='small'>
                                       view
                                    </Button>
                                 </ListItem>
                                 <Divider />
                                 <ListItem>
                                    <ListItemText primary='Mohammad Haris' />
                                    <ListItemText primary='fever' />
                                    <ListItemText primary='2:00' />
                                    <IconButton disabled >
                                    <FiberManualRecordIcon />
                                    </IconButton>
                                    
                                    <Button variant='contained' size='small'>
                                       view
                                    </Button>
                                 </ListItem>
                              </List>
                           </nav>
                        </Box>
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

export default DoctorDashboard
