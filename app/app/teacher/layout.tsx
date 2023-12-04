'use client'
import TeacherSidebar from "@/components/MarvelComponents/teacherComponent/TeachersideBar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const TeacherLayout = ({children}: {children: React.ReactNode}) => {

    const {data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        }
    })
   


    return (
        <div className="flex items-center h-screen">
                
            <TeacherSidebar/>
            {children}

        </div>
    );
}
 
export default TeacherLayout;