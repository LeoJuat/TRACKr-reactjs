import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className="font-sans text-4xl font-bold cursor-pointer hoverFill hover:bg-left">
        TRACKr
      </h1>
      <div>
        <Link className={classes.button1} to="/sign-up">
          Sign up
        </Link>
        <Link className={classes.button2} to="/login">
          Log in
        </Link>
      </div>
    </header>
  );
};
export default Header;
