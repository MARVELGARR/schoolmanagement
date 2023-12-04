import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[[...nextauth]]/route";
import { NextResponse } from "next/server";
import { Prisma } from "@/db/prisma-setting/prisma-client";


export async function GET(){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({message: 'unauthorized'},{status: 401})
    }
    if (session.user?.email) {
        try {
            const user = await Prisma.user.findUnique({
                where: {
                    email: session?.user?.email,
                },
            });
            if(!user){
                return NextResponse.json({ message: 'User not found' }, { status: 500 });
            }
            if (!user?.role) {
                return NextResponse.json({ message: 'User role not found' }, { status: 500 });
            }
            return NextResponse.json(user, { status: 200 });

          
        } catch (error) {
            return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 });
        }
      
    }
}