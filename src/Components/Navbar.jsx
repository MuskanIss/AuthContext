import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <>
      <button onClick={() => toggleAuth()}>
        {isAuth ? "Log off" : "Log in"}
      </button>
    </>
  );
};
