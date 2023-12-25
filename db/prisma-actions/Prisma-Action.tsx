
import { Religion } from "@prisma/client"
import { Prisma } from "../prisma-setting/prisma-client"
import { studentDataProps } from "@/interface";





export const GetAdmin = async () =>{
  try{
    const getAdmin = await Prisma.user.findFirst({
      where: {
        role: 'ADMIN'
      }
    })
    if(!getAdmin){
      throw new Error('Could not find admin')
    }
    return getAdmin
  }
  catch(error){
    throw new Error('Could not find admin')
  }
}
export const GetCurrentUser = async (email : string) =>{
  try{
    const currentUser = await Prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if(!currentUser){
      throw new Error('Could not find user')
    }
    return currentUser
  }
  catch(error){
    console.error('Error in GetCurrentUser:', error);
    throw new Error('Something went wrong')
  }
}

export const GetAllStudent = async()=>{
  try{
    const getAllStudent = await Prisma.student.findMany()
    if(!getAllStudent){
      throw new Error('Could not find student')
    }
    return getAllStudent
  }
  catch(error){
    throw new Error('Could not find student')
  }
}
// utils/auth.ts

export const GetAllUsers = async()=>{

  try{
    const getAllUsers = await Prisma.user.findMany()
    if(!getAllUsers){
      throw new Error('Could not find user')
    }
    return getAllUsers
  }
  catch(error){
    throw new Error('Could not find user')
  }
}


