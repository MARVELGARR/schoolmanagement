import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";


const AdminAvatar = ({className}: {className?: string}) => {

    const session = await getServerSession(authOptions)
    return (
        <section className={cn('', className)}>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
                <h1 className="">{session?.user?.name}</h1>
                <p className=""></p>
            </div>
        </section>
    );
}
 
export default AdminAvatar;