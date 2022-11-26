import React from "react";
import { Link } from "react-router-dom";

const Workouts = () => {
  return (
    <>
      <Link
        className="font-sans text-4xl font-bold cursor-pointer hoverFillSignUp hover:bg-left"
        to="/"
      >
        TRACKr
      </Link>
      <h1>Workouts</h1>;
    </>
  );
};

export default Workouts;
