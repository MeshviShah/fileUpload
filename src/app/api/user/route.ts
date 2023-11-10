import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import User from "../../modal/user.modal";
import dbcon from '../../config/db.config'

export async function POST(req: any, res: NextApiResponse) {
    const { email, password } = await req.json();
try{
    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json(
            { error: 'email or password is/are wrong', ok: false },
            { status: 400 }
          );
    }
    // Compare the provided password with the stored password
    if (password !== user.password) {
        return NextResponse.json(
            { data: 'email or password is/are wrong', ok: false },
            { status: 400 }
          );
    }

    // If everything is okay, you can generate a token or perform other authentication logic
    return NextResponse.json(
        { data: 'Login Successfully done', ok: true },
        { status: 200 }
      );
}catch (error) {
    return NextResponse.json(
      { error: error, ok: false },
      { status: 500 }
    );
  }
  
  }


  



