import React, { useState } from "react";
import { Tooltip } from "@mui/material";

const ExerciseInputs = ({ selectedExercises, saveHandler }) => {
  // Set represents both weight and reps
  const INITIAL_SET = {
    weight: 0,
    reps: 0,
  };

  const [sets, setSets] = useState([INITIAL_SET]);

  function addSetHandler() {
    setSets([...sets, { weight: 0, reps: 0 }]);
  }

  function handleSetChange(value, type, index) {
    let newSets = sets.slice();

    newSets[index] = {
      ...newSets[index],
      [type]: value,
    };

    setSets(newSets);
  }

  function handleRemoveSet(index) {
    let newSets = sets.slice();

    newSets.splice(index, 1);

    setSets(newSets);
  }

  if (!selectedExercises.length) {
    return (
      <h1 className="mx-10 text-3xl font-semibold text-white">
        Welcome! Please choose a workout down below to start tracking! 💪
      </h1>
    );
  }

  return selectedExercises?.map((exercise, index) => {
    return (
      <span key={index}>
        <ExerciseInput
          exercise={exercise}
          addSetHandler={addSetHandler}
          handleRemoveSet={handleRemoveSet}
          handleSetChange={handleSetChange}
          sets={sets}
          index={index}
        />
        <button
          onClick={() => saveHandler(exercise, sets)}
          className="z-10 px-3 py-1 mt-10 font-medium text-white transition-all duration-200 bg-green-500 border-2 border-white rounded-3xl hover:bg-green-600 hover:text-white"
        >
          Save progress
        </button>
      </span>
    );
  });
};

const ExerciseInput = ({
  /*handleRemoveSet*/
  exercise,
  addSetHandler,
  handleSetChange,
  sets,
  index,
}) => {
  return (
    <div>
      <Tooltip title="Click to delete workout" placement="left">
        <li
          // onClick={removeExercise}
          className="mt-10 font-semibold text-white transition-all duration-200 cursor-pointer w-fit hover:text-red-500 hover:scale-105"
        >
          {exercise.toUpperCase()}
        </li>
      </Tooltip>

      {sets.map((set, index) => {
        return (
          <form key={index} className="mt-2">
            <label className="m-5 text-white" htmlFor="set">
              Reps:
            </label>
            <input
              value={set.reps}
              onChange={(e) => handleSetChange(e.target.value, "reps", index)}
              type="number"
              placeholder="Reps"
              className="px-1 py-2 border-2 border-gray-300 rounded-md"
            />
            <input
              value={set.weight}
              onChange={(e) => handleSetChange(e.target.value, "weight", index)}
              type="number"
              placeholder="Weight"
              className="px-1 py-2 ml-5 border-2 border-gray-300 rounded-md "
            />
            <span className="ml-2 text-white">lbs</span>
          </form>
        );
      })}

      <button
        onClick={addSetHandler}
        className="z-10 px-3 py-1 ml-5 font-medium text-white transition-all duration-200 translate-y-5 bg-transparent border-2 border-white rounded-3xl hover:bg-green-500 hover:text-white"
      >
        Add set
      </button>
    </div>
  );
};

export default ExerciseInputs;
