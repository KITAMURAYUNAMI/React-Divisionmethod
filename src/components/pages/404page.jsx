import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export const Error =()=>{

    const navigate = useNavigate();
    const onClickButton = () => {
        navigate("/"); // 画面遷移を書く
      };
    

    return(
        <SContainer>
            <h2>ページが見つかりませんでした</h2>
            <button  onClick={onClickButton} >topへ戻る</button>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`