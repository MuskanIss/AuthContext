import React, { createContext } from "react";

export let AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  let [Reftoken, setReftoken] = React.useState("");
  function toggleAuth() {
    if (!isAuth)
      fetch("https://reqres.in/api/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token) {
            console.log(Reftoken);
            setReftoken(res.token);
            setIsAuth(true);
          }
        });
    else {
      console.log(Reftoken);
      setReftoken("");
      setIsAuth(false);
    }
  }
  return (
    <AuthContext.Provider value={{ toggleAuth, isAuth, Reftoken }}>
      {children}
    </AuthContext.Provider>
  );
};
