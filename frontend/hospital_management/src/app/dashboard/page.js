// 'use client'
// import Chart from '@/Pages/Chart'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import Avatar from '@mui/material/Avatar'
// import { useGetAppointmentQuery } from '@/services/Query'
// import { Chip, Container, Grid, } from '@mui/material'
// const userRole = 'admin'
// function FetchData() {
//    const { data: appointment, isLoading, isError } = useGetAppointmentQuery()
        
   
//    return (
//       <div>
//         {userRole === 'Admin' || userRole === 'Manager' ? (
//             <Chart />
//          ) : null}


//       <Container maxWidth='sm'>
//          <Grid mt={2} container spacing={2}>
//             {Array.isArray(appointment?.data) &&
//                appointment?.data?.map((e, i) => (
//                   <Grid
//                      item
//                      key={i}
//                      xs={12}
//                      sm={12}
//                      md={12}
//                      lg={12}
//                      sx={{ paddingBottom: '1rem' }}
//                   >
//                      <Card sx={{ backgroundColor: '#C4D0DC' }}>
//                         <CardHeader
//                            avatar={
//                               <Avatar
//                                  sx={{ bgcolor: '#13293D' }}
//                                  aria-label='recipe'
//                               >
//                                  {e?.doctor?.employee?.employee_name.split('')[0]}
//                               </Avatar>
//                            }
//                            title={e?.doctor?.employee?.employee_name}
//                            subheader={
//                               e?.appointment_time + '   ' + e?.appointment_date
//                            }
//                         />
//                         <CardContent>
//                            <Grid
//                               container
//                               spacing={1}
//                               alignItems='center'
//                               justifyContent='space-between'
//                            >
//                               <Grid item>
//                                     <Chip
//                                        label={e?.disease?.disease_name}
//                                        sx={{ backgroundColor: '#7F8FA45B', marginRight: 1 }}
//                                     />
//                               </Grid>
//                            </Grid>
//                         </CardContent>
//                      </Card>
//                   </Grid>
//                ))}
//          </Grid>
//       </Container>


//       </div>
//    )
// }

// export default FetchData



// ... (existing imports)

import Chart from '@/Pages/Chart';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import { useGetAppointmentQuery } from '@/services/Query';
import { Chip, Container, Grid } from '@mui/material';

const userRole = 'Doctor';

function FetchData() {
   // const { data: appointment, isLoading, isError } = useGetAppointmentQuery();
   let appointment = []

   return (
      <div>
         {userRole === 'Admin' || userRole === 'Manager' ? (
            <Chart />
         ) : userRole === 'Doctor' ? (
            // Add content specific to doctors
            <Container maxWidth='sm'>
               <Grid mt={2} container spacing={2}>
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
                                    e?.appointment_time + '   ' + e?.appointment_date
                                 }
                              />
                              <CardContent>
                                 <Grid
                                    container
                                    spacing={1}
                                    alignItems='center'
                                    justifyContent='space-between'
                                 >
                                    <Grid item>
                                       <Chip
                                          label={e?.disease?.disease_name}
                                          sx={{ backgroundColor: '#7F8FA45B', marginRight: 1 }}
                                       />
                                    </Grid>
                                 </Grid>
                              </CardContent>
                           </Card>
                        </Grid>
                     ))}
               </Grid>
            </Container>
         ) : null}
      </div>
   );
}

export default FetchData;
