import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import SidebarLayout from "@/components/MarvelComponents/sidebarComponents/sideBar";
import { getServerSession } from "next-auth";

const AppLayout = ({children}: {children: React.ReactNode}) => {

    const session = getServerSession(authOptions)

    return (
        <div className="">
            <SidebarLayout/>
            {children}
        </div>
    );
}
 
export default AppLayout;