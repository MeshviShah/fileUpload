import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import dbcon from "../../config/db.config";
import Sheet from "../../modal/sales.modal"
declare module 'next' {
  export interface NextApiRequest {
    file: any; // Modify the type as needed for your use case
  }
}

export async function POST(req: any, res: NextApiResponse): Promise<any>  {
  
  try {
    const { data } = await req.json();
    const db = await dbcon();
    // const saleCollection = db.collection('sale');

    // // Assuming data is an array of objects
    
    const result = await Sheet.insertMany(data);
    console.log(result,"result")
    // Close the MongoDB connection
  

 

    return NextResponse.json(
      {  message: 'Data stored successfully in MongoDB' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error, ok: false },
      { status: 500 }
    );
  }
  }

