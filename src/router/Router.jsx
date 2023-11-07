import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Top } from "../components/pages/top"
import { Users } from "../components/pages/users"
import { Default } from "../components/templates/Default"
import { HeaderOnly } from "../components/templates/Only"
import { Nest } from "../components/pages/nest"
import { NestAAA } from "../components/pages/nest-aaa"
import { Error } from "../components/pages/404page"
//exactで絶対一致の時のみ
export const Router =()=>{
    return(                                 
        //ページ遷移の方法はこっちが正しい 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default><Top/></Default>}/>
                <Route path="/users" element={<HeaderOnly><Users/></HeaderOnly>}/>     
                <Route path="/nest" element={<HeaderOnly><Nest/></HeaderOnly>}/>
                <Route path="/nest/:id" element={<HeaderOnly><NestAAA/></HeaderOnly>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
//18行目：ネストも普通に定義すればよい,:idでurlパラメータを扱う(リンクにに入ってきた値でidの部分が変わる)