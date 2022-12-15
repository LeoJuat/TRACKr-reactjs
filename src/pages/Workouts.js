import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Exercises from "../components/Exercises/Exercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import AuthContext from "../store/auth-context";
import InitialExerciseCards from "../components/Exercises/InitialExerciseCards";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ExerciseContext from "../store/exercise-context";

const InputForm = () => {
  return (
    <form className="mt-2">
      <label className="m-5 text-white" htmlFor="set">
        Set:
      </label>
      <input
        type="number"
        placeholder="Reps"
        className="px-1 py-2 border-2 border-gray-300 rounded-md "
      ></input>
      <input
        type="number"
        placeholder="Weight"
        className="px-1 py-2 ml-5 border-2 border-gray-300 rounded-md "
      ></input>
      <span className="ml-2 text-white">lbs</span>
    </form>
  );
};

const Workouts = () => {
  const [searchExercises, setSearchExercises] = useState("");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [inputForm, setInputForm] = useState([]);
  // const [filterExercises, setFilterExercises] = useState([]);

  const navigate = useNavigate();

  const exerciseCtx = useContext(ExerciseContext);
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

      window.scrollTo({ top: 800, behavior: "smooth" });
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

  const selectedClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addSetHandler = () => {
    setInputForm(inputForm.concat(<InputForm key={inputForm.length} />));
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
      <div className="w-[80%] h-auto gradient mt-10 mx-auto grid grid-cols-2 justify-items-center shadow-2xl rounded-lg">
        <div className="mb-10 ml-5">
          <ul>
            {exerciseCtx.exercises?.map((name) => {
              return (
                <div key={name}>
                  <div>
                    <li
                      onClick={exerciseCtx.removeExercise}
                      className="mt-10 font-semibold text-white cursor-pointer hover:text-red-500 hover:scale-105"
                    >
                      {name?.toUpperCase()}
                    </li>
                    <form className="mt-2">
                      <label className="m-5 text-white" htmlFor="set">
                        Set:
                      </label>
                      <input
                        type="number"
                        placeholder="Reps"
                        className="px-1 py-2 border-2 border-gray-300 rounded-md "
                      ></input>
                      <input
                        type="number"
                        placeholder="Weight"
                        className="px-1 py-2 ml-5 border-2 border-gray-300 rounded-md "
                      ></input>
                      <span className="ml-2 text-white">lbs</span>
                    </form>
                    {inputForm}
                    <button
                      onClick={addSetHandler}
                      className="z-10 px-3 py-1 ml-5 font-medium text-white transition-all duration-200 translate-y-5 bg-transparent border-2 border-white rounded-3xl hover:bg-green-500 hover:text-white"
                    >
                      Add set
                    </button>
                    {/* <button
                    onClick={removeSetHandler}
                    className="px-3 py-1 ml-5 font-medium text-white transition-all duration-200 translate-y-5 bg-transparent border-2 border-white rounded-3xl hover:bg-red-500 hover:text-white"
                    >
                    Remove set
                  </button> */}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="py-10">
          <Calendar
            className="rounded-md "
            calendarType="US"
            onChange={setCalendarValue}
            value={calendarValue}
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
      {!isLoading && <Exercises exercises={exercises} />}
      {exerciseCtx.counter !== 0 && (
        <button
          onClick={selectedClickHandler}
          className="fixed p-2 transition-all duration-200 bg-green-500 rounded-full right-8 bottom-8 hover:bg-green-400 hover:scale-110"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
          >
            <path d="M9 53h6v1c0 2.206 1.794 4 4 4h6c2.206 0 4-1.794 4-4v-8h22v8c0 2.206 1.794 4 4 4h6c2.206 0 4-1.794 4-4v-1h6c2.206 0 4-1.794 4-4V31c0-2.206-1.794-4-4-4h-6v-1c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v8H29v-8c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v1H9c-2.206 0-4 1.794-4 4v18c0 2.206 1.794 4 4 4zm62-22v18h-6V31h6zm-16-5h6v28h-6V26zm-4.25 12v4H29v-4h21.75zM19 26h6v20h.002v8H19V26zM9 31h6v18H9V31z" />
          </svg>
          <div className="absolute px-2 bg-red-500 rounded-[50%] translate-x-5 bottom-8 text-white">
            {exerciseCtx.counter}
          </div>
        </button>
      )}
    </div>
  );
};

export default Workouts;
