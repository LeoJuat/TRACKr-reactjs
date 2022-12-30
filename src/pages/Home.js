import React from "react";
import { useNavigate } from "react-router-dom";
import LoggedInHeader from "../components/Header/LoggedInHeader";

const Home = () => {
  const navigate = useNavigate();

  const navWorkoutsHandler = () => {
    navigate("/workouts");
  };

  const navNutritionHandler = () => {
    navigate("/nutrition");
  };

  return (
    <div>
      <LoggedInHeader />
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
