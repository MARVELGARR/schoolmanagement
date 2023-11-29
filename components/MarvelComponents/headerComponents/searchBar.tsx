
import Image from "next/image";

const SearchBar = () => {
    return (
        <form className='relative w-[60%] h-[2rem]'>
            <Image
                src='/svg/search.svg'
                alt='search icon'
                width='40'
                height='40'
                className=" absolute"
            />
            <input className=' absolute inset-0' placeholder="Search for student/teachers/staff" type="text" />
        </form>
    );
}
 
export default SearchBar;