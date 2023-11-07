import styled from "styled-components"
import { Stylebtn } from "./Stylebtn";


export const Secondbtm = (props) =>{
    const {children,onClick} = props;
    return(
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(Stylebtn)`
    background-color: #0be6bd;
    
    
`;