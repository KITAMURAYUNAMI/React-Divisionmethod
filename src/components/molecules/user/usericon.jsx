import styled from "styled-components"

export const UserIcohnwithName = (props) =>{
    const {image,name}=props;
    return(
        <SCon>
            <SImage  height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
        </SCon>
    )
}

const SCon = styled.div`
    text-align: center;
`;
const SImage=styled.img`
    border-radius: 50%; //画像を丸くする

`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;