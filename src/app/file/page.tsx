'use client';
import { FileInput, Button, Group, Box } from '@mantine/core';
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
          const sheetName = SheetNames[2]; 
          if (sheetName) {
            const sheet = Sheets[sheetName];
            const jsonData: { [key: string]: any }[] = XLSX.utils.sheet_to_json(sheet) as { [key: string]: any }[];
            console.log(jsonData,"json")
            // Extract field names from the first object
            const fieldNames = Object.keys(jsonData);
    
            // Create an array to store the transformed objects
            const transformedDataArray = jsonData.slice(1).map(obj => {
              const transformedObject: { [key: string]: any } = {};
              for (const fieldName of fieldNames) {
                const value = obj[fieldName];
                transformedObject[fieldName] = value === undefined ? null : value;
              }
              return transformedObject;
            });
    
            // Assuming you want to store the transformed data in a database (replace this with your database logic)
            // Example using a hypothetical database function 'storeDataInDB'
            transformedDataArray.forEach(data => {
              // Replace 'storeDataInDB' with your actual database function
              console.log(data)
            });
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
    <Box maw={340} mx='auto'>
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
    </Box>
  );

  }

  
export default File;