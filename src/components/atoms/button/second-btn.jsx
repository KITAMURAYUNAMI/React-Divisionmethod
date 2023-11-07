import styled from "styled-components"
import { Stylebtn } from "./Stylebtn";


export const Secondbtm = (props) =>{
    const {children} = props;
    return(
        <SButton>{children}</SButton>
    )
}

const SButton = styled(Stylebtn)`
    background-color: #0be6bd;
    
    
`;