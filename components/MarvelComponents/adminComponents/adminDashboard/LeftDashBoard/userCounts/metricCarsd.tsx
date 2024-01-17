
import { userProps } from "@/interface";
import { cn } from "@/lib/utils";
import { selectChart } from "@/zustan/selectChart";
import { ChevronUpIcon } from "lucide-react";

interface metricCardProps{
    name: string;
    className?: string;
    index: number,
    data: userProps[]
}


const MetricCard = ({name, className, data, index
}: metricCardProps) => {

    const {selectedItem, setActiveItem } = selectChart()

    return (
        <div onClick={()=>setActiveItem(index)} className={cn(" cursor-pointer flex w-[13rem] flex-col items-center space-y-2 bg-white rounded-lg shadow-md transition ease-in-out duration-200 hover:shadow-lg flex-grow", className)}>
            <span className="text-lg text-gray-600 uppercase text-left w-full">{name}</span>
            <div className="flex w-full items-center justify-between px-2">

                <span className="text-lg font-bold text-[#1F2937]">{JSON.stringify(data.length)}</span>
                <button  type='button'><ChevronUpIcon className={cn('w-6 h-6 text-blue-500', selectedItem === index ? 'bg-cyan-950 rounded-full rotate-45' : '')} /></button>
            </div>
        </div>
    );
}
 
export default MetricCard;