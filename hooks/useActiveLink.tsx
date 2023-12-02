import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";



const UseActiveLink = (path: string, style: string, then: string) => {

    const pathname = usePathname();
    
    const isActive = useMemo(()=>{
        
        return pathname === path
    },[pathname, path]);


    return  isActive ? style : then ;
}
 
export default UseActiveLink;