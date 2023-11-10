'use client';
import { FileInput, Button, Group, Box,Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import * as XLSX from 'xlsx';

const File = () => {
  const form = useForm({
    initialValues: {
      file: null,
      termsOfService: false,
    },
  });
  // const handleSubmit = async (values: any) => {
  //   const file = values.file;
  //   console.log(file);
  
  //   try {
  //     const workbook = XLSX.readFile(file);
  //     const sheet = workbook.Sheets[workbook.SheetNames[0]];
  //     const jsonData = XLSX.utils.sheet_to_json(sheet);
  //     console.log(jsonData , "json")
  //     // const response = await axios.post('/api/file', formData, {
  //     //   headers: {
  //     //     'Content-Type': 'multipart/form-data',
  //     //   },
  //     // });
  //     // console.log(response, "data");
  //     // return response;
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     return error;
  //   }
  //   }
  const handleSubmit = async (values: any) => {
    const file = values.file;
    console.log(file);
  
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result;
        if (arrayBuffer) {
          const {Sheets ,SheetNames} = XLSX.read(arrayBuffer, { type: 'array' });
          const sheetName = SheetNames[0]; 
          if (sheetName) {
            const sheet = Sheets[sheetName];
            const jsonData: { [key: string]: any }[] = XLSX.utils.sheet_to_json(sheet) as { [key: string]: any }[];
            console.log(jsonData,"json")
            // Extract field names from the first object
            try {
              const response = await axios.post('/api/file', { data: jsonData });
              return response;
              // Handle the response or perform additional actions if needed
            } catch (error) {
              console.error('Error storing data:', error);
              
            }
    
           
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error uploading file:', error);
      return error;
    }
  }
  return (
    <Box maw={600} mx='auto'>
        <Paper withBorder shadow="md" p={30} mt={80} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)} method="POST" encType="multipart/form-data">
        <FileInput
          label='Input label'
          withAsterisk
          description='Input description'
          placeholder='Input placeholder'
          {...form.getInputProps('file')}
        />
        <Group justify='flex-end' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
        </Paper>
     
    </Box>
  );

  }

  
export default File;