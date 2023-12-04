import { cn } from "@/lib/utils";



const SidebarDivider = ({ children, className }: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn('', className)}>{children}</div>
    );
}
 
export default SidebarDivider;