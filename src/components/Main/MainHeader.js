import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="fixed z-10 flex items-center justify-between w-full py-6 sm:px-12 mobileL:px-6 mobileM:px-6 backdrop-blur-sm">
      <h1 className="font-sans font-bold cursor-pointer xl:text-4xl lg:text-4xl hoverFill hover:bg-left md:text-2xl sm:text-3xl mobileL:text-2xl mobileM:text-2xl">
        TRACKr
      </h1>
      <div className="flex sm:gap-8 mobileL:gap-3 mobileM:gap-3">
        <Link
          className="font-bold text-white transition-all bg-transparent border-2 border-green-500 rounded-md duration-400 xl:px-6 xl:py-2 xl:text-base lg:px-6 lg:py-2 lg:text-base hover:bg-green-500 md:px-3 md:text-sm md:py-1 sm:text-sm sm:px-3 sm:py-2 mobileL:text-xs mobileL:px-3 mobileL:py-2 mobileM:text-xs mobileM:px-3 mobileM:py-2"
          to="/sign-up"
        >
          Sign up
        </Link>
        <Link
          className="px-6 font-bold text-white transition-all bg-transparent border-2 border-green-500 rounded-md duration-400 xl:py-2 lg:px-6 lg:py-2 lg:text-base xl:text-base hover:bg-green-500 md:px-3 md:text-sm md:py-1 sm:text-sm sm:px-3 sm:py-2 mobileL:text-xs mobileL:px-3 mobileL:py-2 mobileM:text-xs mobileM:px-3 mobileM:py-2"
          to="/login"
        >
          Log in
        </Link>
      </div>
    </header>
  );
};
export default MainHeader;
