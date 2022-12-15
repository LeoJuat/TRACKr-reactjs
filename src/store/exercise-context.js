import React, { useState } from "react";

const ExerciseContext = React.createContext({
  exercises: [],
  counter: 0,
  data: (arr) => [],
  removeExercise: (e) => [],
  setCounter: (num) => 0,
});

export const ExerciseContextProvider = (props) => {
  const [exercises, setExercises] = useState([]);
  const [counter, setCounter] = useState(0);

  const dataHandler = (arr) => {
    setExercises(exercises?.concat([arr]));
  };

  const removeExerciseHandler = (e) => {
    const filtered = exercises.filter(
      (ex) => ex.toUpperCase() !== e.target.innerHTML
    );
    setExercises(filtered);
    setCounter(counter - 1);
  };

  const setCounterHandler = (num) => {
    setCounter(counter + 1);
  };

  const contextValue = {
    exercises,
    counter,
    data: dataHandler,
    removeExercise: removeExerciseHandler,
    setCounter: setCounterHandler,
  };

  return (
    <ExerciseContext.Provider value={contextValue}>
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;
