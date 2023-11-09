import { NextResponse } from "next/server";

export async function GET(request:any) {


      return NextResponse.json({ success: true, a:"1-" })
    
  
  }