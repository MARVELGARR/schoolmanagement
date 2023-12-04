'use client'
import ParentSidebar from "@/components/MarvelComponents/parentsComponents/ParentsideBar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



const ParentLayout = ({children}: {children: React.ReactNode}) => {

    const {data: session} = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/login')
        }
    })
    
    return (
        <div className="flex items-center h-screen">
                
            <ParentSidebar/>
            {children}

        </div>
    );
}
 
export default ParentLayout;