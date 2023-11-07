import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nest =()=>{
    return(
        <SContainer>
            <h2>Nestページです</h2>
            <Link to="/nest/100">こちらネストのページ</Link>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`