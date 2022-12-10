import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Exercises from "../components/Exercises/Exercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import AuthContext from "../store/auth-context";

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
      <form className="flex justify-center mt-10 mb-10">
        <input
          className="px-10 py-2 border-2 border-gray-100 rounded-md placeholder:text-left"
          onChange={(e) => setSearchExercises(e.target.value.toLowerCase())}
          value={searchExercises}
          placeholder="Search Exercise"
        ></input>
        <button
          className="px-6 ml-5 text-white transition-all duration-300 bg-green-500 rounded-md hover:bg-green-600"
          onClick={searchHandler}
        >
          Search
        </button>
      </form>
      {isLoading && <p className="my-10 text-center">Loading...</p>}
      {!isLoading && (
        <Exercises setExercises={setExercises} exercises={exercises} />
      )}
    </div>
  );
};

export default Workouts;
