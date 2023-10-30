"use client"
import { Button, Container, Input } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    // create a big container in mui 
    <Container maxWidth="sm">

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="userName" {...register("userName", { required: true })} />
        <Input type="text" placeholder="password" {...register("password", { required: true })} />

        <Button type="submit" variant="contained">Login</Button>
      </form>
    </Container>
  );
}