import React from "react";

const NutritionData = ({
  calories,
  highProteinProtein,
  highProteinCarbs,
  highProteinFat,
  balancedProtein,
  balancedCarbs,
  balancedFat,
  lowCarbCarbs,
  lowCarbFat,
  lowCarbProtein,
  lowFatProtein,
  lowFatCarbs,
  lowFatFat,
  proteinPlan,
  fatPlan,
  balancedPlan,
  carbPlan,
  proteinPlanHandler,
  lowFatPlanHandler,
  balancedPlanHandler,
  lowCarbPlanHandler,
}) => {
  return (
    <section className="mt-10 text-2xl font-medium text-white w-96">
      <div className="text-2xl font-semibold text-white">
        Daily intake: {Math.trunc(calories)} calories
      </div>
      <div className="flex gap-8">
        {!proteinPlan && (
          <div
            onClick={proteinPlanHandler}
            className="p-4 mt-5 transition duration-200 bg-blue-500 shadow-lg cursor-pointer w-fit rounded-2xl hover:scale-110"
          >
            <h2 className="mb-2 underline">High protein</h2>
            <h2 className="mb-1">{Math.trunc(highProteinProtein)}g protein</h2>
            <h2 className="mb-1">{Math.trunc(highProteinCarbs)}g carbs</h2>
            <h2 className="mb-1">{Math.trunc(highProteinFat)}g fat</h2>
          </div>
        )}
        {!balancedPlan && (
          <div
            onClick={balancedPlanHandler}
            className="p-4 mt-5 transition duration-200 bg-red-500 shadow-lg cursor-pointer w-fit rounded-2xl hover:scale-110"
          >
            <h2 className="mb-2 underline">Balanced</h2>
            <h2 className="mb-1">{Math.trunc(balancedProtein)}g protein</h2>
            <h2 className="mb-1">{Math.trunc(balancedCarbs)}g carbs</h2>
            <h2 className="mb-1">{Math.trunc(balancedFat)}g fat</h2>
          </div>
        )}
      </div>
      <div className="flex gap-8 mb-10">
        {!fatPlan && (
          <div
            onClick={lowFatPlanHandler}
            className="p-4 mt-5 transition duration-200 bg-orange-500 shadow-lg cursor-pointer w-fit rounded-2xl hover:scale-110"
          >
            <h2 className="mb-2 underline">Low fat</h2>
            <h2 className="mb-1">{Math.trunc(lowFatProtein)}g protein</h2>
            <h2 className="mb-1">{Math.trunc(lowFatCarbs)}g carbs</h2>
            <h2 className="mb-1">{Math.trunc(lowFatFat)}g fat</h2>
          </div>
        )}
        {!carbPlan && (
          <div
            onClick={lowCarbPlanHandler}
            className="p-4 mt-5 transition duration-200 bg-purple-500 shadow-lg cursor-pointer w-fit rounded-2xl hover:scale-110"
          >
            <h2 className="mb-2 underline">Low carbs</h2>
            <h2 className="mb-1">{Math.trunc(lowCarbProtein)}g protein</h2>
            <h2 className="mb-1">{Math.trunc(lowCarbCarbs)}g carbs</h2>
            <h2 className="mb-1">{Math.trunc(lowCarbFat)}g fat</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default NutritionData;
