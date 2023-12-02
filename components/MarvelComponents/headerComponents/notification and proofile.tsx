
import { cn } from "@/lib/utils";
import HeaderAvatar from "./headerAvatar";
import Notifications from "./notifications";

const RightHeader = ({className}: {className?: string}) => {
    return (
        <div className={cn(`flex items-center`, className)}>
            <Notifications className="flex items-center gap-[1rem]"/>
            <HeaderAvatar className=''/>
        </div>
    );
}
 
export default RightHeader;