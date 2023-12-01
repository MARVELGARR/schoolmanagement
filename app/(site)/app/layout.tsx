
import SidebarLayout from "@/components/MarvelComponents/sidebarComponents/sideBar";
import SessionProviders from "@/lib/auth/session/session";


const AppLayout = ({children}: {children: React.ReactNode}) => {



    return (
        <div className="">
            <SessionProviders >
                
                <SidebarLayout/>
                {children}
            </SessionProviders>
        </div>
    );
}
 
export default AppLayout;