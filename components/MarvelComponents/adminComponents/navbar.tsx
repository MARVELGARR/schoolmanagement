import { AdminNavigations, navigations } from "@/data/data";
import NavItems from "./navitems";
import { cn } from "@/lib/utils";


const NavBar = ({className }:{className?: string}) => {

    

    return (
        <nav className={cn(' flex flex-col pl-[3rem] w-full items-center ', className)}>
            <ul className='flex flex-col w-full items-center  gap-[2rem]'>
                {
                    AdminNavigations.map((nav, index)=>{
                        return(
                            <NavItems
                                key={index}
                                name={nav.name}
                                href={nav.href}
                                icons={nav.icon}
                                className='flex items-center w-full gap-[1.5rem] '
                            />
                        )
                    })
                }
            </ul>
        </nav>
    );
}
 
export default NavBar;