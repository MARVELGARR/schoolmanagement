import { JSXElementConstructor } from "react"


export interface HeaderNameProps{
    name: string
}



export interface studentDataProps{
    id: string,
    firstname: string,
    lastname: string,
    gender: string,
    middlename: string,
    email: string,
    phone: string,
    image?: string,
    level?: string,
    about?: string,
    birthday?: string,
    address: string,
    religion: string,
    socials?: string[],
    marital_status?: string,
    yearJoined?: string
    courses?:   string[] 
    grade: number[],
}

export interface navItemsProps{
    name:string,
    href:string,
    className:string,
    icons: any,
}

export interface userProps{
    id: string,
    name?: string;
    email?: string;
    emailVerified?: string;
    hashedPassword?: string
    password?: string;
    image?: string;
    role: string
    token_type?: string

}
export interface recievedUserProps{
    getAllUsers:{

        id: string,
        name?: string;
        email?: string;
        emailVerified?: string;
        hashedPassword?: string
        password?: string;
        image?: string;
        role: string
        token_type?: string
    }[]

}

interface ParentsProps{
    id?: string,
    firstname: string
    lastname: string
    middlename: string
    gender: string
    email: string
    phone: string
    about: string
    image?: string
    religion: string
    marital_status?: string
    birthday?: string
    socials?: string[]
    yearJoined?: string
    courses?:   string[]   // Array of subjects the teacher teaches
    address?: string
}
interface TeacherProps{
    id?: string,
    firstname: string
    lastname: string
    middlename: string
    gender: string
    email: string
    phone: string
    about: string
    image?: string
    religion: string
    marital_status?: string
    birthday?: string
    socials?: string[]
    yearJoined?: string
    courses?:   string[]   // Array of subjects the teacher teaches
    address?: string
}