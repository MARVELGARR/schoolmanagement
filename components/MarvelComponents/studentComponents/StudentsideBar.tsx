'use client'
import { useSession } from "next-auth/react";
import Logo from "./logo";
import NavBar from "./navbar";
import SidebarDivider from "./sidebarDivider";
import Tools from "./tools";
import { useState } from "react";
import { redirect } from "next/navigation";
import { userProps } from "@/interface";

const StudentSidebar = () => {
    const [user, setUser] = useState<userProps>()
    const { data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login?callback=/app')
        },
    })



    
    return (
        <aside className=" flex flex-col py-[2rem] h-full items-center justify-between xl:w-64 lg:w-44 md:w-fit bg-slate-100  sticky left-0 inset-y-0">
            <SidebarDivider className='flex flex-col w-full items-center gap-[2rem]'>
                <Logo className=''/>
                <NavBar className=''/>
            </SidebarDivider>
            <Tools className=''/>
        </aside>
    );
}
 
export default StudentSidebar;