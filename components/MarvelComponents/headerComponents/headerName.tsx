import { HeaderNameProps } from "@/interface";
import React from "react";


const HeaderName: React.FC<HeaderNameProps> = ({ name }) => {
    return (
        <h1 className="font-bold text-2xl">{name}</h1>
    );
}
 
export default HeaderName;