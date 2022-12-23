import React from "react";

const SearchExercise = ({
  searchExercises,
  setSearchExercises,
  searchHandler,
}) => {
  return (
    <form className="flex justify-center w-[83%] mx-auto mt-28 mb-10">
      <input
        className="w-[90%] px-10 py-2 border-2 border-gray-100 rounded-md placeholder:text-left"
        onChange={(e) => setSearchExercises(e.target.value.toLowerCase())}
        value={searchExercises}
        placeholder="Search Exercise"
      ></input>
      <button
        className="w-[10%] py-2 text-white transition-all duration-300 bg-green-600 opacity-90 rounded-md hover:bg-green-500"
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
  );
};

export default SearchExercise;
