'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

import { useSession } from "next-auth/react";


const AdminAvatar =  ({className, src, role}: {className?: string, src: string, role: string}) => {

    const {data: session} = useSession()
    return (
        <section className={cn('flex items-center gap-4', className)}>
            <Avatar>
                <AvatarImage src={src} />
                <AvatarFallback className='bg-slate-400'>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
                <h1 className=" font-bold">{session?.user?.name}</h1>
                <p className="text-left w-full text-sm">{role}</p>
            </div>
        </section>
    );
}
 
export default AdminAvatar;