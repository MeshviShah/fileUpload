import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import XLSX from 'xlsx';
import upload from '../../../utils/upload';
import path from 'path'
import { json } from 'stream/consumers';
import express from 'express'
import dbcon from "../../config/db.config"
declare module 'next' {
  export interface NextApiRequest {
    file: any; // Modify the type as needed for your use case
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse): Promise<any>  {
  // Use the 'upload' middleware to handle the file upload
  await dbcon()
  try {
   
    return NextResponse.json(
      { error: 'Error processing the Excel file', ok: false },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    // return NextResponse.json(
    //   { error: 'Error processing the Excel file', ok: false },
    //   { status: 500 }
    // );
  }
  }

