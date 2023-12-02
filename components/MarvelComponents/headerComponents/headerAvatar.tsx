'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosArrowDown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Bookmark,
    Calendar,
    LogOut,
    User,

} from "lucide-react"  
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";


const HeaderAvatar = ({className}: {className?: string}) => {
    return (
        <div className={cn(`cursor-pointer`, className)}>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" cursor-pointer"><IoIosArrowDown/></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='z-20 bg-white'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                        <DropdownMenuItem>
                            <Link className='flex items-center' href={"/app/bookmark"}>
                                <Bookmark className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className='flex items-center' href={"/app/account"}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Bookmarks</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className='flex items-center' href={"/app/account"}>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Events</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className='bg-gray-200' />
                        <DropdownMenuItem onClick={()=>signIn()}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    );
}
 
export default HeaderAvatar;