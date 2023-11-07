import styled from "styled-components"
import { Card } from "../../atoms/card/card";
import { UserIcohnwithName } from "../../molecules/user/usericon";

export const UserCode = (props) =>{

    const { user } = props;
    return(
        <Card>
            <UserIcohnwithName name={user.name} image={user.image}/>
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEl</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.conpany.name}</dd>
                <dt>web</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    margin-bottom:0px;
    dt{
        float: left;
    }
    dd{
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;//枠からはみ出しそうになると行を付ける
    }
`