'use client'

import { Router } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";



const LoginLayout = ({children}: {children: React.ReactNode}) => {

    return (

        <div className="">

            {children}
        </div>
    );
}
 
export default LoginLayout;