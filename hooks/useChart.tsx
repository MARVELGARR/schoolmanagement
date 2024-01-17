'use client'
import { recievedUserProps, userProps } from "@/interface";
import { Chart } from "react-google-charts";

interface useChartProps{
    chartType: string,
    options: {
        title: string
        hAxis: { title: string, viewWindow: { min: number, max: number } },
        vAxis: { title: string, viewWindow: { min: number, max: number } },
        legend: string
    }
    width: string
    height: string
    data: (string[] | number[])[]
    graphID: string
    users: recievedUserProps[]
}

const UseChart: React.FC<useChartProps> = (users, {...props})=>{
    
    return (
        <Chart
            chartType="ScatterChart"
            data={props.data}
            options={props.options}
            graphID={props.graphID}
            width={props.width}
            height={props.height}
            
        />
    )
}

export default UseChart