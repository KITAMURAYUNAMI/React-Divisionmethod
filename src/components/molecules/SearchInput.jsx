import { Secondbtm } from "../atoms/button/second-btn"
import { Input } from "../atoms/inputtext/input"
import styled from "styled-components"

export const Searchinput = ()=>{
    return(
        <SContainer>
            <Input  placeholder="検索条件を入力"/>
            <SButtonWrapper>
                <Secondbtm>検索</Secondbtm>
            </SButtonWrapper>
        </SContainer>

    )
}

const SButtonWrapper = styled.div`
    padding: 8px;

`;

const SContainer = styled.div`
    display: flex;
    align-items: center;

`;