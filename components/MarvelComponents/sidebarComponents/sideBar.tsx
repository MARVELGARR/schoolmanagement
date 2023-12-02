'use client'
import { useSession } from "next-auth/react";
import Logo from "./logo";
import NavBar from "./navbar";
import SidebarDivider from "./sidebarDivider";
import Tools from "./tools";
import { useEffect, useState } from "react";
import AdminAvatar from "./adminSidebarComponents/admin-avatar";
import { redirect } from "next/navigation";
import { userProps } from "@/interface";

const SidebarLayout = () => {
    const [user, setUser] = useState<userProps>()
    const { data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login?callback=/app')
        },
    })



    
    return (
        <aside className=" flex flex-col py-[2rem] items-center justify-between xl:w-64 lg:w-44 md:w-fit bg-slate-100 h-full fixed left-0 inset-y-0">
            <SidebarDivider className='flex flex-col w-full items-center gap-[2rem]'>
                <Logo className=''/>
                <NavBar className=''/>
            </SidebarDivider>
            <Tools className=''/>
        </aside>
    );
}
 
export default SidebarLayout;