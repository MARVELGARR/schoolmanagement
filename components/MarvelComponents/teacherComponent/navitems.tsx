import UseActiveLink from "@/hooks/useActiveLink";
import { navItemsProps } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";


export
const NavItems: React.FC<navItemsProps> = ({name, href, icons, className}) => {

    const isOnText = UseActiveLink(href, ' text-black font-bold', '')
    const isOnIcon = UseActiveLink(href, ' text-orange-300 font-bold', '')

    const isActive = UseActiveLink(href, '', 'hidden')


    return (
        <Link className={cn('relative ',  className)} href={href}>
            <div className={cn(`flex items-center w-full gap-[1.5rem] `, isOnText)}><span className={cn('',isOnIcon)}>{icons}</span>{name}</div>
            <div className={cn(` absolute w-[5px] h-full bg-cyan-900 rounded-l-[4px] right-0`, isActive)}></div>
        </Link>
    );
}
 
export default NavItems;