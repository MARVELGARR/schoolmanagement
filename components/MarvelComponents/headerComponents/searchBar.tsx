import { ImSearch } from "react-icons/im";


const SearchBar = () => {
    return (
        <form className='relative w-[40%] h-[2.2rem] border-2 rounded-xl'>
            <ImSearch className='absolute left-2 top-2  z-30'/>
            <input className='pl-[2rem] p2-[2px] absolute rounded-xl inset-0' placeholder="Search for student/teachers/staff" type="text" />
        </form>
    );
}
 
export default SearchBar;