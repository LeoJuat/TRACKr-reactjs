import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="fixed z-10 flex items-center justify-between w-full px-12 py-6 backdrop-blur-sm">
      <h1 className="font-sans text-4xl font-bold cursor-pointer hoverFill hover:bg-left">
        TRACKr
      </h1>
      <div className="flex gap-8">
        <Link
          className="px-6 py-2 font-bold text-white transition-all duration-300 bg-transparent border-2 border-green-500 rounded-md hover:bg-green-500"
          to="/sign-up"
        >
          Sign up
        </Link>
        <Link
          className="px-6 py-2 font-bold text-white transition-all duration-300 bg-transparent border-2 border-green-500 rounded-md hover:bg-green-500"
          to="/login"
        >
          Log in
        </Link>
      </div>
    </header>
  );
};
export default MainHeader;
