import { useState } from "react";



const UseCounter = (initialCount: number, min:number, max:number) => {
    const [count, setCount] = useState<number>(initialCount)
    const handleIncrement = () => {
        if(count >= max){
            return            
        }
        setCount((prev)=> prev + 1)
    }
    const handleDecrement = () => {
        if(count <= min){
            return
        }
        setCount((prev)=> prev - 1)
    }
    return {handleIncrement, handleDecrement, count};
}
 
export default UseCounter;