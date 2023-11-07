import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null); //ここに渡したいstateを定義して、タグのvalueで渡していくstateを入力
  return (
    //このchildrenに当たる場所ならどこでもここのstateを呼び出せるようになる今回の場合は<Router />の中ならどこでも呼び出せるつまりこのwebサイトのどこからでも飛び出すことが可能なstateが作れた
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
