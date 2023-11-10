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
 
import { useRouter } from 'next/navigation';
import axios from 'axios';
const Login = () => {
  const router = useRouter();
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
   
    const response = await axios.post('/api/user',values)
    console.log(response)
    if (response.status === 200 ) {
      // Redirect to the file component
      router.push('/file'); // Replace '/file-component' with your actual path
    } else {
      // Handle other response cases if needed
      console.error('Unexpected response:', response);
    }
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