import { Header } from "../atoms/LAYOUT/Header";


export const HeaderOnly = (props)=>{
    const{children} = props;
    return(
        <>
            <Header/>
            {children}
        </>
    );
};