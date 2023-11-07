
import styled from "styled-components"

export const Feader = ()=>{
    return(
        <SFeader>
           &copy; 2021 test inc.
        </SFeader>
      
    )
}

const SFeader = styled.header`
   background-color :#11999e  ;
   color: #fff;
   text-align: center;
   padding: 8px 0;
   position: fixed;
   bottom: 0;
   width: 100%;
`
