import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoMdAdd } from "react-icons/io";
import TeacherForm from "../teacherComponent/teacherCreationForm";

const CreateTeacherForm = ({user}: {user: string}) => {
    return ( 
        <Dialog >
            <DialogTrigger>
                <div className="border-2 flex flex-col gap-5  items-center justify-center w-[10rem] h-[10rem] border-cyan-900 rounded-[1rem] p-2">
                    <h1 className=''>Create {user} profile</h1>
                    <IoMdAdd/>
                </div>
            </DialogTrigger>
            <DialogContent className="rounded-xl">
                <TeacherForm/>
            </DialogContent>
        </Dialog>

    );
}
 
export default CreateTeacherForm;