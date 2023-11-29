import { navItemsProps } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";


export
const NavItems: React.FC<navItemsProps> = ({name, href, icons, className}) => {
    return (
        <Link className={cn('', className)} href={href}>{icons}{name}</Link>
    );
}
 
export default NavItems;