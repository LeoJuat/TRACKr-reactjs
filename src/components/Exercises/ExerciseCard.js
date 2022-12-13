import React from "react";

const selectedArray = [];

const ExerciseCard = ({ exercise, onSelected, cartCount }) => {
  const selectedHandler = () => {
    selectedArray.push(exercise.name);
    cartCount();
    onSelected(selectedArray);
  };

  return (
    <>
      <div
        onClick={selectedHandler}
        className="transition-all duration-300 border-t-4 border-green-500 shadow-md cursor-pointer hover:scale-105"
        to={`/exercise/${exercise?.id}`}
      >
        <img src={exercise?.gifUrl} alt={exercise?.name} loading="lazy" />
        <button className="p-2 mt-2 ml-3 text-sm text-white bg-green-500 rounded-lg opacity-50">
          {exercise?.bodyPart.toUpperCase()}
        </button>
        <button className="p-2 mt-2 ml-3 text-sm text-white bg-red-500 rounded-lg opacity-50">
          {exercise?.target.toUpperCase()}
        </button>
        <p className="my-3 ml-3 text-base w-[360px] break-words font-bold">
          {exercise?.name.charAt(0).toUpperCase() + exercise?.name.slice(1)}
        </p>
      </div>
    </>
  );
};

export default ExerciseCard;
