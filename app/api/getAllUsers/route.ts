import { GetAllUsers } from "@/db/prisma-actions/Prisma-Action";
import { Prisma } from "@/db/prisma-setting/prisma-client";

import { NextResponse } from "next/server";




export async function GET(){
    try{
        try{
            const getAllUsers = await Prisma.user.findMany()
            if(!getAllUsers){
              throw new Error('Could not find user')
            }
            return NextResponse.json({message:'User fetched successfully', getAllUsers},{status: 200})
          }
          catch(error){
            throw new Error('Could not find user')
          }
    }
    catch(error){
        console.error(error)
        return NextResponse.json({message:'Could not get user'},{status: 500})
    }
}