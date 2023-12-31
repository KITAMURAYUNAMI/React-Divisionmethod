import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProviders";

export const UserIcohnwithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SCon>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SCon>
  );
};

const SCon = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%; //画像を丸くする
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
