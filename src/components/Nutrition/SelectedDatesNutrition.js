import React from "react";

const SelectedDatesNutrition = ({ filteredDates }) => {
  return (
    <div className="flex-col gap-5 mt-24 mb-10 xl:text-start mobileM:pt-20 xl:pt-0 mobileM:text-center">
      <h1 className="text-3xl font-semibold text-white">
        Calories:{" "}
        {filteredDates[filteredDates.length - 1]?.calories
          ? filteredDates[filteredDates.length - 1]?.calories
          : 0}
      </h1>
      <h1 className="text-3xl font-semibold text-white">
        Fat:{" "}
        {filteredDates[filteredDates.length - 1]?.fat
          ? filteredDates[filteredDates.length - 1]?.fat
          : 0}
        g
      </h1>
      <h1 className="text-3xl font-semibold text-white">
        Protein:{" "}
        {filteredDates[filteredDates.length - 1]?.protein
          ? filteredDates[filteredDates.length - 1]?.protein
          : 0}
        g
      </h1>
      <h1 className="text-3xl font-semibold text-white">
        Carbohydrates:{" "}
        {filteredDates[filteredDates.length - 1]?.carbs
          ? filteredDates[filteredDates.length - 1]?.carbs
          : 0}
        g
      </h1>
    </div>
  );
};

export default SelectedDatesNutrition;
