import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Exercises from "../components/Exercises/Exercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import AuthContext from "../store/auth-context";
import InitialExerciseCards from "../components/Exercises/InitialExerciseCards";

const Workouts = () => {
  const [searchExercises, setSearchExercises] = useState("");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const signoutHandler = () => {
    authCtx.logout(authCtx.token);
    navigate("/");
  };

  const searchHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (searchExercises) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const filterSearchedExercises = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchExercises) ||
          exercise.target.toLowerCase().includes(searchExercises) ||
          exercise.bodyPart.toLowerCase().includes(searchExercises) ||
          exercise.equipment.toLowerCase().includes(searchExercises)
        );
      });

      setIsLoading(false);
      setSearchExercises("");
      setExercises(filterSearchedExercises);
    }
  };

  const selectedBodyPartHandler = async (selected) => {
    setIsLoading(true);
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );

    const filterSearchedExercises = exerciseData.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(selected) ||
        exercise.target.toLowerCase().includes(selected) ||
        exercise.bodyPart.toLowerCase().includes(selected) ||
        exercise.equipment.toLowerCase().includes(selected)
      );
    });

    setIsLoading(false);
    setExercises(filterSearchedExercises);
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
      <div className="w-[80%] h-3/4 mx-auto grid grid-cols-2 justify-items-center">
        <div className="flex flex-col justify-center">
          <h1 className="self-center w-3/4 text-5xl font-bold">
            Choose workouts to add into your workout tracker!
          </h1>
          <button
            onClick={() => {
              window.scrollTo({ top: 800, behavior: "smooth" });
            }}
            className="p-4 mt-5 ml-20 font-semibold text-white transition-all duration-300 bg-green-500 rounded-md w-fit hover:bg-green-600"
          >
            Workouts
          </button>
        </div>
        <div>
          <img
            className="translate-y-10 h-80"
            src={require("../imgs/deadlift.webp")}
            alt="deadlift"
          />
          <img
            className="z-10 translate-x-20 h-80"
            src={require("../imgs/squat.webp")}
            alt="squat"
          />
        </div>
      </div>
      <form className="flex justify-center w-[83%] mx-auto mt-28 mb-10">
        <input
          className="w-[90%] px-10 py-2 border-2 border-gray-100 rounded-md placeholder:text-left"
          onChange={(e) => setSearchExercises(e.target.value.toLowerCase())}
          value={searchExercises}
          placeholder="Search Exercise"
        ></input>
        <button
          className="w-[10%] py-2 text-white transition-all duration-300 bg-green-500 rounded-md hover:bg-green-600"
          onClick={searchHandler}
        >
          <svg
            className="inline w-6 h-6 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      <InitialExerciseCards selectedBodyPart={selectedBodyPartHandler} />
      {isLoading && <p className="mt-20 mb-10 text-center">Loading...</p>}
      {!isLoading && (
        <Exercises setExercises={setExercises} exercises={exercises} />
      )}
    </div>
  );
};

export default Workouts;
