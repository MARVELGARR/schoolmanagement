'use client'
import { useSession } from "next-auth/react";
import Logo from "./logo";
import NavBar from "./navbar";
import SidebarDivider from "./sidebarDivider";
import Tools from "./tools";
import { useEffect, useState } from "react";
import AdminAvatar from "./adminSidebarComponents/admin-avatar";
import { redirect } from "next/navigation";



interface adminProps{
    getAdmin: {
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
}

const SidebarLayout = () => {
    const [admin, setAdmin] = useState<adminProps>()
    const { data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        },
    })

    useEffect(()=>{
        const getAdmin = async ()=>{
            const res = await fetch('/api/getAdmin')
            const data = await res.json()
            setAdmin(data)
            console.log(data)
        }
        getAdmin()
    },[])


    return (
        <aside className=" flex flex-col py-[2rem] items-center justify-between xl:w-64 lg:w-44 md:w-fit bg-green-400 h-full fixed left-0 inset-y-0">
            <SidebarDivider className='flex flex-col items-center gap-[4rem]'>
                <Logo className=''/>
                { session?.user?.email == admin?.getAdmin?.email &&(<AdminAvatar src={session?.user?.image || ""}/>)}
                {JSON.stringify(admin)}
                <NavBar className=''/>
            </SidebarDivider>
            <Tools className='flex items-center gap-[1.5rem]'/>
        </aside>
    );
}
 
export default SidebarLayout;