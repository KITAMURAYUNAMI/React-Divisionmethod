import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Searchinput } from "../molecules/SearchInput";
import { UserCode } from "../organisms/user/usercard";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `西園寺${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "json@aaa.com",
    phone: "05092378604",
    conpany: {
      name: "東出カンパニー",
    },
    website: "https://aaa",
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>Usersページです</h2>
      <Searchinput />
      <SUserArea>
        {users.map((user) => (
          <UserCode key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
