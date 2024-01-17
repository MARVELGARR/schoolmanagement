import { useUserProps } from "@/hooks/useUsers";



interface UserPercentageProps{
    name: string;
    users: useUserProps
}

const UserPercentage: React.FC<UserPercentageProps> = ({name}) => {
    return (
        <div className="">

        </div>
    );
}
 
export default UserPercentage;