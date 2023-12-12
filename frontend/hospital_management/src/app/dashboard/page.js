

import Chart from '@/Pages/Chart';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import { useGetAppointmentQuery } from '@/services/Query';
import { Chip, Container, Grid } from '@mui/material';
 
let userRole;
console.log('fgfd', userRole)

  if (typeof window !== 'undefined') {
   userRole = localStorage.getItem('user-role');
  }

function FetchData() {
   return (
      <div>
         {userRole === 'Admin' || userRole === 'Manager' ? (
            <Chart />
         ) : userRole === 'Doctor' ? (
            
            <Container maxWidth='sm'>
               <Grid mt={2} container spacing={2}>
         
                        <Grid
                           item
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
                                    <h2>meghaa</h2>
                                    </Avatar>
                                 }

                              />
                              <CardContent>
                                 <Grid
                                    container
                                    spacing={1}
                                    alignItems='center'
                                    justifyContent='space-between'
                                 >
                                    {/* <Grid item>
                                       <Chip
                                          label={e?.disease?.disease_name}
                                          sx={{ backgroundColor: '#7F8FA45B', marginRight: 1 }}
                                       />
                                    </Grid> */}
                                 </Grid>
                              </CardContent>
                           </Card>
                        </Grid>
               
               </Grid>
            </Container>
         ) : null}
      </div>
   );
}

export default FetchData;
