import { UserRole } from '@prisma/client';
import { Religion } from "@prisma/client"
import { Prisma } from "../prisma-setting/prisma-client"
import { studentDataProps } from "@/interface";
import { redirect } from 'next/navigation';


export const CreateStudent = async ({ studentData }: { studentData: studentDataProps }) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      middlename,
      email,
      phone,
      image,
      grade,
      level,
      birthday,
      address,
      religion,
    } = studentData;

    const student = await Prisma.student.create({
      data: {
        firstname,
        lastname,
        gender,
        grade,
        middlename,
        email,
        phone,
        image,
        level,
        birthday,
        address,
        religion: Religion[religion as keyof typeof Religion], // Assuming Religion is an enum
      },
    });

    console.log('Student created:', student);
    return student;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

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

// utils/auth.ts


