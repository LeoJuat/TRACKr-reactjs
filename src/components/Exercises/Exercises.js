import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";

const Exercises = ({ exercises, setSelectedExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center row-auto gap-16 mt-20 ">
        {currentExercises.map((exercise, index) => {
          return (
            <ExerciseCard
              key={index}
              exercise={exercise}
              setSelectedExercises={setSelectedExercises}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-24 mb-16">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </>
  );
};

export default Exercises;
