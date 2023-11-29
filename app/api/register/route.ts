import bcrypt from "bcrypt"
import { Prisma } from "@/db/prisma-setting/prisma-client";
import { NextResponse } from "next/server"
import { UserRole } from "@prisma/client";


export async function POST(req: Request){
    const body = await req.json();
    const { name, email, password } = body

    if(!name || !email || !password){
        return NextResponse.json({ error:"Missing required fields"}, {status: 400})
    }

    try{
        const exist = await Prisma.user.findUnique({
            where:{
                email
            }
        })
        if(exist){
            return NextResponse.json({error:"Email already exist"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Prisma.user.create({
            data:{   
                name,
                email,
                hashedPassword,
                role: UserRole.STUDENT
            }
        })
        return NextResponse.json(user);

    }
    catch (error) {
        console.error("error creating user", error);
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}