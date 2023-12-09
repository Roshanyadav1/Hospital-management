'use client'
import { Container, Grid, Card, CardHeader, Avatar, CardContent, Chip } from '@mui/material';
import { useGetAppointmentInfoQuery } from '@/services/Query';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function DoctorPage() {
  const { appointment_id } = useParams();
  const { data: appointmentInfo, isLoading, isError } = useGetAppointmentInfoQuery(appointment_id);

  if (appointment_id === undefined) {
    return <p>Error: Appointment ID is not provided</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError.message}</p>;
  }

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
                    <Avatar sx={{ bgcolor: '#13293D' }} aria-label='recipe'>
                      {e?.doctor?.employee?.employee_name.split('')[0]}
                    </Avatar>
                  }
                  title={e?.doctor?.employee?.employee_name}
                  subheader={e.appointment_time + '   ' + e.appointment_date}
                />
                <CardContent>
                  <Chip label={'Disease Name : '+e?.disease?.disease_name} sx={{ backgroundColor: '#7F8FA45B' }} />
                </CardContent>
                <CardContent>
                  <Chip label={'Patient Name : '+e?.patient?.patient_name} sx={{ backgroundColor: '#7F8FA45B' }} />
                </CardContent>
                <CardContent>
                  <Chip label={'Appointment No. : '+e?.appointment_number} sx={{ backgroundColor: '#7F8FA45B' }} />
                </CardContent>
                {/* Additional information can be added here */}
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default DoctorPage;
