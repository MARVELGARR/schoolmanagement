import CreateParentForm from "@/components/MarvelComponents/dialogs/createParentDialog";
import CreateStudentForm from "@/components/MarvelComponents/dialogs/createStudentDialog";
import CreateTeacherForm from "@/components/MarvelComponents/dialogs/createTeacherDialog";


const UserRegistration = () => {
    return (
        <div className='w-full h-screen flex justify-center gap-[5rem] item-center'>

            <CreateStudentForm user='Student' />
            <CreateTeacherForm user='Teacher'/>
            <CreateParentForm user='Parent'/>
        </div>
    );
}
 
export default UserRegistration;