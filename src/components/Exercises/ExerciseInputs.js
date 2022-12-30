import React, { useState } from "react";
import { Tooltip } from "@mui/material";

const ExerciseInputs = ({
  setSelectedExercises,
  selectedExercises,
  saveHandler,
}) => {
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

  const removeWorkoutHandler = () => {
    setSelectedExercises([]);
  };

  return selectedExercises?.map((exercise, index) => {
    return (
      <React.Fragment key={index}>
        <h1 className="mt-10 text-lg font-semibold text-white lg:px-0 md:px-5">
          Input your reps/weight and save progress before choosing another
          exercise or Click on the name if you want to delete the exercise.
        </h1>
        <span key={index}>
          <ExerciseInput
            removeWorkoutHandler={removeWorkoutHandler}
            exercise={exercise}
            addSetHandler={addSetHandler}
            handleRemoveSet={handleRemoveSet}
            handleSetChange={handleSetChange}
            sets={sets}
            index={index}
          />
          <button
            onClick={() => saveHandler(exercise, sets)}
            className="z-10 px-3 py-1 mt-10 font-medium text-white transition-all duration-200 bg-blue-500 border-2 border-white w-6/6 rounded-3xl hover:bg-blue-600 hover:text-white lg:w-full mobileM:w-[95%]"
          >
            Save progress
          </button>
        </span>
      </React.Fragment>
    );
  });
};

const ExerciseInput = ({
  removeWorkoutHandler,
  handleRemoveSet,
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
          onClick={removeWorkoutHandler}
          className="mt-10 font-semibold text-white underline list-disc transition-all duration-200 cursor-pointer w-fit hover:text-red-500 hover:scale-105"
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
              className="px-1 py-2 border-2 border-gray-300 rounded-md xl:ml-5 xl:inline lg:inline-block lg:ml-20 lg:mt-3 md:inline-block md:ml-20 md:mt-3 mobileM:inline-block mobileM:ml-20 mobileM:mt-3 xl:mt-0"
            />
            <span className="ml-2 text-white">lbs</span>
          </form>
        );
      })}

      <button
        onClick={addSetHandler}
        className="z-10 px-3 py-1 ml-5 font-medium text-white transition-all duration-200 translate-y-5 bg-green-500 border-2 border-white rounded-3xl hover:bg-green-600 hover:text-white"
      >
        Add set
      </button>
      <button
        onClick={handleRemoveSet}
        className="z-10 px-3 py-1 ml-5 font-medium text-white transition-all duration-200 translate-y-5 bg-red-500 border-2 border-white rounded-3xl hover:bg-red-600 hover:text-white"
      >
        Remove set
      </button>
    </div>
  );
};

export default ExerciseInputs;
