
import { cn } from "@/lib/utils";
import Image from "next/image";


interface LogoProps{
    className: string
}
const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Image
            src='/images/taught.png'
            alt='logo'
            width='50'
            height='50'
            className={cn( '', className)}
        />
    );
}
 
export default Logo;