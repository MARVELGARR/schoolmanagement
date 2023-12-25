'use client'
import StudentSidebar from "@/components/MarvelComponents/studentComponents/StudentsideBar";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const StudentLayout = ({children}: {children: React.ReactNode}) => {

    const {data:session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        }
    });
    


    return (
        <div className="flex h-full items-center w-full">
            <StudentSidebar/>            
            {children}
        </div>
    );
}
 
export default StudentLayout;