import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const LoggedInHeader = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const signoutHandler = () => {
    authCtx.logout(authCtx.token);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-10 py-8">
      <Link
        className="font-sans text-4xl font-bold cursor-pointer hoverFillSignUp hover:bg-left"
        to="/"
      >
        TRACKr
      </Link>
      <div>
        <div onClick={signoutHandler} className="w-5 h-5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M15 24H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1s-1-.4-1-1V2H2v20h12v-6c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1z" />
            <path d="M23 13H8c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1z" />
            <path d="M23 13c-.3 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
            <path d="M19 17c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4 4c-.2.2-.4.3-.7.3z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default LoggedInHeader;
