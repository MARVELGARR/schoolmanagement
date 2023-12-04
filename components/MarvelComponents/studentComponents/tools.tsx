'use client'
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const Tools = ({className}: {className?:string}) => {

    const navigations = [
        { name: 'Settiings', icon: <IoSettingsOutline/> },
        { name: 'Logout', icon: <FiLogOut/> }
    ]

    return (
        <ul className="flex w-full flex-col items-center  gap-[1.5rem]">
            {
               navigations.map((nav, index) => {
                    return(

                    <li onClick={()=> index === 1 && signOut()} key={index} className={cn('', index ==1? 'cursor-pointer':'' , 'flex items-center gap-[2rem]')}>
                        {nav.icon}
                        {nav.name}
                    </li>
                    )
               }) 
            }
        </ul>
    );
}
 
export default Tools;