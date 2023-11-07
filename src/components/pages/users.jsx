import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { Searchinput } from "../molecules/SearchInput"
import { UserCode } from "../organisms/user/usercard";
const users =[...Array(10).keys()].map(((val) =>{
    return{
    id:val,
    name:`雨宮${val}`,
    image:"https://source.unsplash.com/NE0XGVKTmcA",
    email:"reito180202@gmail.com",
    phone:"08089090202",
    conpany:{
      name:"雨宮会社"
    },
    website:"https://aaa"
  };
  
}))

export const Users =()=>{
    const state = useLocation();
    const isAdmin = state ? State.isAdmin:false;
    return(
        <SContainer>
            <h2>Usersページです</h2>
            <Searchinput/>
            <SUserArea>
                {users.map((user)=>(
                    <UserCode key={user.id} user={user} isAdmin={isAdmin}/>
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
    display:flex ;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-gap:20px;
`