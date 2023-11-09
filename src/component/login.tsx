"use client"
import React from 'react'
import {
  Container,
Title,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Text,
} from '@mantine/core';
import { useForm, isEmail, hasLength } from '@mantine/form';
import { useMemo,useEffect,useState } from 'react';

const Login = () => {

   const [log, setLog] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength(
        { min: 4, max: 30 },
        'Password must be 4-30 characters long'
      ),
    },
  });

  const handleSubmit = async (values: any) => {
    console.log(values,"values")
  };
 
  return (
    <Container size={450} my={40}>
        <Title mt={30}>Log In</Title>
         <Paper withBorder shadow="md" p={30} mt={30} radius="md">
         <form onSubmit={form.onSubmit(handleSubmit)} method="POST" encType="multipart/form-data">
         <TextInput
            label="Email"
            placeholder="Your Email"
            required
            mt="md"
            labelProps={{ display: 'flex' }}
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            labelProps={{ display: 'flex' }}
            {...form.getInputProps('password')}
          />

          <Button
            fullWidth
            mt="xl"
            type="submit"
            variant="gradient"
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            w="45%"
            mx="auto"
          >
            Log In
          </Button>
      </form>
      
         </Paper>
     
    </Container>
  );
}

export default Login;