import styled from "styled-components"
import { Secondbtm } from "../atoms/button/second-btn"
import { useNavigate } from "react-router-dom";



export const Top =()=>{
    const navigate = useNavigate();
   
    
    const onClick_Admin= () => navigate("/users",{state:{isAdmin:true}})
    const onClick_Gen=() => navigate("/users",{state:{isAdmin:false}})
        return(
        <SContainer>
            <h2>TOPページです</h2>
            <Secondbtm onClick={onClick_Admin}>管理者ユーザー</Secondbtm>
            <br/>
            <Secondbtm onClick={onClick_Gen}>一般ユーザー</Secondbtm>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`