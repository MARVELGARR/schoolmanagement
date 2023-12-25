import UserCount from "@/components/MarvelComponents/adminComponents/adminDashboard/LeftDashBoard/userCounts/useCount";
import Header from "@/components/MarvelComponents/headerComponents/header";

const AdminDashboard = () => {
    return (
        <div className="w-full h-full">
            <title>Dashboard</title>
            <section className='w-full'>
                <Header className='h-[5rem]' name='Dashboard'/>
            </section>
            <div className="AdminHero flex item-center">
                <section className="">
                    <UserCount className='px-[1rem]'/>
                </section>
                <section className=""></section>
            </div>
        </div>
    );
}
 
export default AdminDashboard;