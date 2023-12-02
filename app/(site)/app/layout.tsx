
import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import SidebarLayout from "@/components/MarvelComponents/sidebarComponents/sideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";




const AppLayout = ({children}: {children: React.ReactNode}) => {

    const session = getServerSession(authOptions);
    if(!session){
        redirect('/login');
    }

    return (
        <div className="">
                
            <SidebarLayout/>
            {children}

        </div>
    );
}
 
export default AppLayout;