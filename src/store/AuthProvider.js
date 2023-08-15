import { useState } from "react";
import AuthContext from "./Auth-context";

const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, SetToken] = useState(initialToken);
  const isLoggedIn = !!token;
  const loginHandler = (id) => {
    SetToken(id);
    localStorage.setItem("token", id);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 300000);
  };
  const logoutHandler = () => {
    SetToken(null);
    localStorage.removeItem("token");
  };
  const state = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
