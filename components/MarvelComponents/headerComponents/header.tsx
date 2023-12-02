import { cn } from "@/lib/utils";
import HeaderName from "./headerName";
import RightHeader from "./notification and proofile";
import SearchBar from "./searchBar";



const Header = ({name, className}: { name: string, className?: string }) => {
    return (
        <header className={cn(`w-full flex items-center justify-evenly border-b-2 `, className)}>
            <HeaderName name={name}/>
            <SearchBar/>
            <RightHeader className='flex items-center gap-[1rem]'/>
        </header>
    );
}
 
export default Header;