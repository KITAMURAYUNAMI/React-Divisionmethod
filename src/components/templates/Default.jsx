import { Feader } from "../atoms/LAYOUT/Fotter";
import { Header } from "../atoms/LAYOUT/Header";


export const Default = (props)=>{
    const{children} = props;
    return(
        <>
            <Header/>
            {children}
            <Feader/>
        </>
    );
};