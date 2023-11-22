import { useState } from 'react';
import { useSelector } from 'react-redux';



const useSelect = (state:  number)  => {
    const [select, setSelect] = useState<number>(0)
    
    const handleOnClick = () =>{
        setSelect(state)
    }
    return {handleOnClick, select};
}
 
export default useSelect;