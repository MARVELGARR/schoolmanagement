'use client'


import { userProps } from "@/interface";
import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "lucide-react";

interface metricCardProps{
    name: string;
    className?: string;
    data: userProps[]
}


const MetricCard = ({name, className, data
}: metricCardProps) => {

    return (
        <div className={cn("flex w-[13rem] flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md transition ease-in-out duration-200 hover:shadow-lg flex-grow", className)}>
            <span className="text-lg text-gray-600 uppercase text-left w-full">{name}</span>
            <div className="flex w-full items-center justify-between px-2">

                <span className="text-lg font-bold text-[#1F2937]">{JSON.stringify(data)}</span>
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
            </div>
        </div>
    );
}
 
export default MetricCard;