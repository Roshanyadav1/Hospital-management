import { Grid, Card, CardContent, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea, CardMedia } from '@mui/material';
import { patient } from '@/helpers/disease';
import Link from 'next/link';

export default function DiseaseCard() {
   return (
      <div>
         <Container maxWidth='lg'>
            <Typography variant='h3' align='center' color='primary' style={{ marginTop: '50px' }}>
               Diseases
            </Typography>
            <Grid container spacing={6} style={{ marginTop: '20px' }}>
               {patient.map((result) => (
                  <Grid item xs={6} md={3} sm={4} key={result?.id}>
                     <Link style={{ textDecoration: 'none', textAlign: 'center' }} href='/doctorpage'>
                        <Card
                           sx={{
                              maxWidth: 300,
                              borderRadius: 2,
                              // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                              textAlign: 'center',
                              // '&:hover': {
                              //    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                              // },
                           }}
                        >
                           <CardActionArea>
                              <CardMedia
                                 sx={{ height: 140 }}
                                 component='img'
                                 image={result.image}
                                 alt='image'
                              />
                              <CardContent>
                                 <Typography gutterBottom variant='h6' component='div'>
                                    {result.title}
                                 </Typography>
                                 <Typography variant='body2' color='text.primary'>
                                    {result.description}
                                 </Typography>
                              </CardContent>
                           </CardActionArea>
                        </Card>
                     </Link>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </div>
   );
}
