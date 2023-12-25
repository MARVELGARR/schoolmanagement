import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[[...nextauth]]/route";
import { redirect } from "next/navigation";
import { GetAllStudent } from "@/db/prisma-actions/Prisma-Action";
import { NextResponse } from "next/server";




export async function GET(){

    const session = await getServerSession(authOptions)
    if(!session){
        redirect('/login')
    }
    const AllStudent = await GetAllStudent()
    if(AllStudent){
        return NextResponse.json({AllStudent}, {status: 200})
    }
    else{
        return NextResponse.json({message: 'Something went wrong'}, {status: 500})
    }
}