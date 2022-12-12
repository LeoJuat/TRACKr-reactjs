import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../../utils/fetchData";

const InitialExerciseCards = ({ selectedBodyPart }) => {
  const [bodyParts, setBodyParts] = useState(null);

  useEffect(() => {
    const bodyPartData = async () => {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(data);
      return data;
    };
    bodyPartData().catch(console.error);
  }, []);

  return (
    <>
      <div className="mt-20 w-[80%] mx-auto flex overflow-auto scrollbar-hide h-72 border-t-4 border-t-green-500">
        {bodyParts?.map((bodyPart) => {
          return (
            <div
              onClick={() => {
                return selectedBodyPart(bodyPart);
              }}
              className="mx-6 transition-all duration-300 scale-95 border-2 shadow-md cursor-pointer p-28 hover:scale-90"
              key={bodyPart}
            >
              <svg
                className="w-12 h-12 translate-x-6 translate-y--3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
              >
                <path d="M9 53h6v1c0 2.206 1.794 4 4 4h6c2.206 0 4-1.794 4-4v-8h22v8c0 2.206 1.794 4 4 4h6c2.206 0 4-1.794 4-4v-1h6c2.206 0 4-1.794 4-4V31c0-2.206-1.794-4-4-4h-6v-1c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v8H29v-8c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v1H9c-2.206 0-4 1.794-4 4v18c0 2.206 1.794 4 4 4zm62-22v18h-6V31h6zm-16-5h6v28h-6V26zm-4.25 12v4H29v-4h21.75zM19 26h6v20h.002v8H19V26zM9 31h6v18H9V31z" />
              </svg>
              <div className="w-24 font-semibold text-center ">
                {bodyPart.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InitialExerciseCards;
