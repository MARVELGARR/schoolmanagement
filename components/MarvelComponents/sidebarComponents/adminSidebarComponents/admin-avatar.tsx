'use client'
import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";


const AdminAvatar =  ({className, src}: {className?: string, src: string}) => {

    const {data: session} = useSession()
    return (
        <section className={cn('flex items-center gap-4', className)}>
            <Avatar>
                <AvatarImage src={src} />
                <AvatarFallback className='bg-slate-400'>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
                <h1 className="">{session?.user?.name}</h1>
                <p className="">{`admin`}</p>
            </div>
        </section>
    );
}
 
export default AdminAvatar;