import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../store/auth-context";

const Home = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const signoutHandler = () => {
    authCtx.logout(authCtx.token);
    navigate("/");
  };

  const navWorkoutsHandler = () => {
    navigate("/workouts");
  };

  const navNutritionHandler = () => {
    navigate("/nutrition");
  };

  return (
    <div>
      <header>
        <Link
          className="font-sans text-4xl font-bold cursor-pointer hoverFillSignUp hover:bg-left"
          to="/"
        >
          TRACKr
        </Link>
        <div className="flex items-center gap-10">
          <div onClick={signoutHandler} className="w-5 h-5 cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M15 24H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1s-1-.4-1-1V2H2v20h12v-6c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1z" />
              <path d="M23 13H8c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1z" />
              <path d="M23 13c-.3 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
              <path d="M19 17c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4 4c-.2.2-.4.3-.7.3z" />
            </svg>
          </div>
        </div>
      </header>
      <div className="container mx-auto">
        <h1 className="mb-16 text-2xl text-center">
          Welcome, {localStorage.getItem("name")}!
        </h1>

        <section
          onClick={navWorkoutsHandler}
          className="container px-5 my-10 hover:scale-[101%] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
        >
          <div className="workoutImg">
            <p className=" text-gray-200 ml-4 opacity-40 text-[19rem]">
              Workouts
            </p>
          </div>
        </section>

        <section
          onClick={navNutritionHandler}
          className="container px-5 my-10 hover:scale-[101%] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
        >
          <div className="veggiesImg">
            <p className=" text-gray-200 opacity-40 text-[21.5rem]">
              Nutrition
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
