import { create } from "zustand";

interface selecChartProps{
    selectedItem: number;
    setActiveItem: (item: number) => void;
}

export const selectChart = create<selecChartProps>((set)=>({
    selectedItem: 0,
    setActiveItem: (index: number) => set( {selectedItem: index} )

}))

