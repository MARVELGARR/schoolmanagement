import { GetAdmin } from "@/db/prisma-actions/Prisma-Action";
import { NextResponse } from "next/server";



export async function GET(){
    try{
        const getAdmin = await GetAdmin()
        if(getAdmin){
            return NextResponse.json({message:" Admin", getAdmin}, {status: 200})
        }
    }
    catch(error){
        return NextResponse.json({message:"Something went wrong", error}, {status: 500})
    }
}