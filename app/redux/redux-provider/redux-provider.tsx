import { ReactNode } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";

interface ProviderProps{
    children: ReactNode;
}

const Providers: React.FC<ProviderProps> = ({children}) =>{
    return(
        <Provider store={store}>{children}</Provider> // <div className="">{children}</div>
    )
}

export default Providers