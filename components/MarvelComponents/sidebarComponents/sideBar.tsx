import Logo from "./logo";
import NavBar from "./navbar";
import SidebarDivider from "./sidebarDivider";
import Tools from "./tools";




const SidebarLayout = () => {
    return (
        <aside className=" flex flex-col py-[2rem] items-center justify-between xl:w-64 lg:w-44 md:w-fit bg-green-400 h-full fixed left-0 inset-y-0">
            <SidebarDivider className='flex flex-col items-center gap-[4rem]'>
                <Logo className=''/>
                <NavBar className=''/>
            </SidebarDivider>
            <Tools className='flex items-center gap-[1.5rem]'/>
        </aside>
    );
}
 
export default SidebarLayout;