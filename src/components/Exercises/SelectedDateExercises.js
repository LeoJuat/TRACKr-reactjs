import React from "react";

const SelectedDateExercises = ({ filteredDates }) => {
  return filteredDates.map((workout) => {
    let str = "";

    for (let i = 0; i < workout.sets.length; i++) {
      str += `SET ${i + 1} - Reps: ${workout.sets[i].reps} Weight: ${
        workout.sets[i].weight
      } | `;
    }

    return (
      <li
        key={workout.date}
        className="px-16 pt-10 font-semibold leading-8 text-white"
      >
        {workout.name.toUpperCase()}: <br /> {str}
      </li>
    );
  });
};

export default SelectedDateExercises;
