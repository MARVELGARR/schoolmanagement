import { cn } from "@/lib/utils";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";

const Notifications = ({className}: {className?: string}) => {
    return (
        <div className={cn('', className)}>
            <div className="">
                <BiSolidMessageDetail/>
            </div>
            <div className="">
                <MdNotifications/>
            </div>
        </div>
    );
}
 
export default Notifications;