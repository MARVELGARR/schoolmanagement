'use client'

import AdminSidebarLayout from "@/components/MarvelComponents/adminComponents/AdminsideBar";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const AdminLayout = ({children}: {children: React.ReactNode}) => {

    const {data:session, status} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        },
    })


    return (
        <div className="flex w-full items-center h-screen">

            <AdminSidebarLayout/>
            {children}

        </div>
    );
}
 
export default AdminLayout;