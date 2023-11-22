"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CreateTeachersForm from "./_components/form/createForm";
import { useEffect } from "react";



const DashBoard = () => {
    const {data: session, status} = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/login')
        }
    })


    return ( 
        <div className="">
            <CreateTeachersForm/>
        </div>
    );
}
 
export default DashBoard;