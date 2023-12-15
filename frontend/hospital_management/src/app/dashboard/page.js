'use client'
import Chart from '@/Pages/Chart';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { useGetDoctorIdQuery } from '../../services/Query';
import { Container, Grid, Button, Typography, Skeleton } from '@mui/material';
import Link from 'next/link';

function FetchData() {
   const userRole = localStorage.getItem('user_role')
   const doctorId = localStorage.getItem('user_id');
   const { data: appointment = [], error, isLoading } = useGetDoctorIdQuery(doctorId);

   if (isLoading) {
      return (
         <Container maxWidth='sm'>
            <Grid mt={3} container spacing={2}>
               {[1, 2, 3].map((_, i) => (
                  <Grid
                     item
                     key={i}
                     xs={12}
                     sm={12}
                     md={12}
                     lg={12}
                     sx={{ paddingBottom: '1rem' }}
                  >
                     <Card sx={{ backgroundColor: '#C4D0DC' }}>
                        <CardContent>
                           <Skeleton
                              animation='wave'
                              height={20}
                              width='80%'
                              style={{ marginBottom: 6 }}
                           />
                           <Skeleton
                              animation='wave'
                              height={20}
                              width='40%'
                              style={{ marginBottom: 6 }}
                           />
                           <Grid container spacing={1}>
                              <Grid item>
                                 <Skeleton
                                    animation='wave'
                                    height={30}
                                    width={30}
                                    variant='circular'
                                 />
                              </Grid>
                              <Grid item>
                                 <Skeleton
                                    animation='wave'
                                    height={30}
                                    width='80%'
                                    style={{ marginBottom: 6 }}
                                 />
                              </Grid>
                           </Grid>
                           <Skeleton
                              animation='wave'
                              height={30}
                              width='60%'
                              style={{ marginBottom: 6 }}
                           />
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      )
   } else if (error) {
      return <p> No Appointment Here {error}</p>
   } else {
      return (
         <div>
            {userRole === 'Admin' || userRole === 'Manager' ? (
               <Chart />
            ) : userRole === 'Doctor' ? (
               <Container maxWidth='sm'>
                  <Grid mt={10} container spacing={2}>
                     {Array.isArray(appointment?.data) &&
                        appointment?.data?.map((e, i) => (
                           <Grid
                              item
                              key={i}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              sx={{ paddingBottom: '1rem' }}
                           >
                              <Card sx={{ backgroundColor: '#336699', borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                 <CardHeader
                                    avatar={
                                       <Avatar
                                          alt='Avatar'
                                          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjX02hunzz3i3dG7PG7J2AM61C5AVahSHBg&usqp=CAU'}
                                          sx={{ width: 60, height: 60, border: '2px solid white' }}
                                       />
                                    }
                                    title={
                                       <Typography
                                          sx={{ display: 'inline', fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}
                                          component='h4'
                                          variant='body1'
                                       >
                                          {e?.doctor?.employee?.employee_name}
                                       </Typography>
                                    }
                                    subheader={
                                       <Typography sx={{ color: 'white' }}>
                                          {e?.appointment_time} {e?.appointment_date}
                                       </Typography>
                                    }
                                 />

                                 <CardContent>
                                    <Grid container spacing={1} alignItems='center' justifyContent='space-between'>
                                       <Grid item xs={12}>
                                          <Typography sx={{ color: 'white', marginTop: '0.5rem' }}>
                                             Patient Name : {e?.patient?.patient_name}
                                          </Typography>
                                       </Grid>
                                       <Grid item xs={12}>
                                          <Typography sx={{ color: 'white' }}>
                                             Appointment Number : {e?.appointment_number}
                                          </Typography>
                                       </Grid>
                                       <Grid item>
                                          <Typography sx={{ color: 'white' }}>
                                             Disease Name : {e?.disease?.disease_name}
                                          </Typography>
                                       </Grid>
                                       <Grid item>
                                          <Link
                                             href={`dashboard/individualappointment/${e?.appointment_id}`}
                                          >
                                             <Button
                                                variant='contained'
                                                size='small'
                                                style={{
                                                   backgroundColor: '#13293D',
                                                   width: '6rem',
                                                   height: '2rem',
                                                   fontSize: '200',
                                                   cursor: 'pointer',
                                                }}
                                             >
                                                View
                                             </Button>
                                          </Link>
                                       </Grid>
                                    </Grid>
                                 </CardContent>
                              </Card>

                           </Grid>
                        ))}
                  </Grid>
               </Container>
            ) : null}
         </div >
      );
   }
}

export default FetchData;
