import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
export const Body = () => {
  const { isAuth, Reftoken } = useContext(AuthContext);
  return (
    <div>{isAuth ? `Logged in with token ${Reftoken}` : "Logged off"}</div>
  );
};
