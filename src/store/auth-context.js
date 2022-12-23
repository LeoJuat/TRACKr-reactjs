import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  uid: "",
  isLoggedIn: false,
  displayName: (displayName) => {},
  login: (token) => {},
  logout: (token) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [uid, setUid] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("uid");
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const displayNameHandler = (name) => {
    setName(name);
    localStorage.setItem("name", name);
  };

  const uidHandler = (uid) => {
    setUid(uid);
    localStorage.setItem("uid", uid);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    uid: uid,
    uidHandler: uidHandler,
    displayName: displayNameHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
