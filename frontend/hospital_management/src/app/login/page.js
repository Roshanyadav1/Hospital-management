"use client"
import { Button, Card, Container, Grid, Input, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);  

  return (
    // create a big container in mui 
    <Container maxWidth="sm" sx={{ height: '100vh' }} >

      <Grid container alignItems='center' justifyContent='center' height='100%' spacing={2}>


        <Card sx={{ minWidth: 275, padding: 4 }}>
          <Grid container alignItems='center' flexDirection='column' spacing={2}>
            <Typography variant="h4" component="div" gutterBottom> Login </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container flexDirection='column' alignItems='center' gap={4}>
                <Input type="text" placeholder="userName" {...register("userName", { required: true })} />
                <Input type="password" placeholder="password" {...register("password", { required: true })} />
                <Button type="submit" variant="contained">Login</Button>
              </Grid>
            </form>
          </Grid>
        </Card>

      </Grid>

    </Container>
  );
}