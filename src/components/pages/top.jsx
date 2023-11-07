import styled from "styled-components";
import { Secondbtm } from "../atoms/button/second-btn";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"; //これでグローバルなstateを使えるようになる
import { UserContext } from "../../providers/UserProviders";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext); //どのsteatを呼び出すかを引数に渡して指定する
  const onClick_Admin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClick_Gen = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <Secondbtm onClick={onClick_Admin}>管理者ユーザー</Secondbtm>
      <br />
      <Secondbtm onClick={onClick_Gen}>一般ユーザー</Secondbtm>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
