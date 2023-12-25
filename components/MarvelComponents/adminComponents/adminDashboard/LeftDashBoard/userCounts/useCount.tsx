'use client'
import { cn } from "@/lib/utils"
import MetricCard from "./metricCarsd"
import { useEffect, useState } from "react"
import { useUser } from "@/hooks/useUsers"
import { UserRole } from "@prisma/client"
import { userProps } from "@/interface"


const UserCount =({className}:{className: string}) =>{

    const  users  = useUser((state)=> state.users);
    const  getAllUsers  = useUser((state)=> state.getAllUsers);
    const [students, setstudent] = useState<userProps[]>([])
    
    useEffect(()=>{
        getAllUsers()
    },[])
    useEffect(()=>{

        setstudent(users.filter((users)=>users.role == UserRole.ADMIN))
    },[])
    const UserMetric = [
        {name: 'student', data: students},
        {name: 'teacher', data: []},
        {name: 'parent', data: []},
    ]
    

    return (
        <div className={cn('flex items-center gap-[2rem]', className)}>

            {
                UserMetric.map((item, index)=>{
                    return(
                        <MetricCard
                            className='shadow-lg rounded-lg h-[5rem] w-[6rem]'
                            key={index}
                            name={item.name}
                            data={item.data}
                        />
                    )
                })
            }
        </div>
    )
    
}
export default UserCount