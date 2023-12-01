import { Prisma } from "@/db/prisma-setting/prisma-client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[[...nextauth]]/route";
import { NextResponse } from "next/server";


export  async function GET(){
    
    const session = await getServerSession(authOptions)

    try{
        if(!session?.user?.email){
            return NextResponse.json({message: "No session"})
        }
        else{

            const getuser = await Prisma.user.findUnique({
                where: {
                    email: session.user.email 
                }
            })
            return getuser  
        }
    }
    catch(error){
        NextResponse.json({ error: error})
    }
}
