import { Prisma } from "@/db/prisma-setting/prisma-client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[[...nextauth]]/route";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { UserRole, Maritalstatus } from '@prisma/client';


export async function POST(request: Request) {

    const session = await getServerSession(authOptions)

    if(!session){
        NextResponse.json({ message: "No session" }, { status: 401 })
        redirect('/login')
    }
    

    try{

        const body = await request.json();

        const user = await Prisma.user.findUnique({
            where: { email: session?.user?.email || '' },
        });
      
        if (!user) {
            console.error(`CurrentUser not found.`);
            return;
        }

        const { 
            middlename,
            gender,
            email,
            phone,
            yearJoined,
            birthday,
            address,
            religion,
            level,
            image,
            Maritalstatus,
            about
        } = body;

        const NewTeacher = await Prisma.teacher.create({
            data:{
                firstname: user?.name.split(' ')[0],
                lastname:  user?.name.split(' ')[1],
                middlename,
                gender,
                email,
                phone,  
                yearJoined,            
                birthday,
                address,
                religion,
                level,
                image,
                about,
                maritalStatus: Maritalstatus,
                user: {
                    connect: { id: user.id },
                },
            },
            
        })
        if(!NewTeacher){
            return NextResponse.json({ message: "Student not created" }, { status: 500 })
        }

        const updatedUser = await Prisma.user.update({
            where: { id: user.id },
            data: {
              role: UserRole.STUDENT,
            },
        });
        if (!updatedUser) {
            console.error("Failed to update user's role.");
            return NextResponse.json({ message: "User role not updated" }, { status: 500 });
        }
        return NextResponse.json({NewTeacher, updatedUser}, { status: 200 });

    }
    catch (error) {
        console.error("Error creating student:", error);
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
}