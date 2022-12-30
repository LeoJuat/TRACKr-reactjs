import React from "react";

const NutritionPlan = ({
  setInputCaloriesHandler,
  setInputProteinHandler,
  setInputCarbsHandler,
  setInputFatHandler,
  saveNutritionHandler,
}) => {
  return (
    <>
      <div className="flex flex-col self-center mt-10 mb-10 ml-5">
        <div>
          <h1 className="mx-5 text-3xl font-semibold text-white w-[26.5rem] xl:w-[26.5rem] xl:text-start mobileM:text-center mobileM:w-[90%] mobileM:pt-16 xl:pt-0">
            Input your info at the end of the day to save progress! 🍎
          </h1>
        </div>
        <div>
          <div className="flex self-center mt-6 ml-5 xl:justify-start mobileM:justify-center">
            <div className="flex mb-10">
              <form className="mt-2">
                <label
                  className="text-lg font-semibold text-white"
                  htmlFor="Calories"
                >
                  Calories
                </label>
                <br />
                <input
                  onChange={(e) => {
                    return setInputCaloriesHandler(e.target.value);
                  }}
                  type="number"
                  placeholder="Calories"
                  className="px-1 py-2 border-2 border-gray-300 rounded-md sm:w-full mobileM:w-5/6"
                />
                <br />
                <label
                  className="text-lg font-semibold text-white"
                  htmlFor="Carbohydrates"
                >
                  Carbohydrates
                </label>
                <br />
                <input
                  onChange={(e) => {
                    return setInputCarbsHandler(e.target.value);
                  }}
                  type="number"
                  placeholder="Carbohydrates"
                  className="px-1 py-2 border-2 border-gray-300 rounded-md sm:w-full mobileM:w-5/6"
                />
              </form>
              <form className="mt-2 ml-10">
                <label
                  className="text-lg font-semibold text-white"
                  htmlFor="protein"
                >
                  Protein
                </label>
                <br />
                <input
                  onChange={(e) => {
                    return setInputProteinHandler(e.target.value);
                  }}
                  type="number"
                  placeholder="Protein"
                  className="px-1 py-2 border-2 border-gray-300 rounded-md sm:w-full mobileM:w-5/6"
                />
                <br />
                <label
                  className="text-lg font-semibold text-white"
                  htmlFor="Fat"
                >
                  Fat
                </label>
                <br />
                <input
                  onChange={(e) => {
                    return setInputFatHandler(e.target.value);
                  }}
                  type="number"
                  placeholder="Fat"
                  className="px-1 py-2 border-2 border-gray-300 rounded-md sm:w-full mobileM:w-5/6"
                />
              </form>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={saveNutritionHandler}
            className="z-10 xl:w-full px-3 py-1 font-medium text-white transition-all duration-200 bg-blue-500 border-2 border-white w-6/6 rounded-3xl hover:bg-blue-600 hover:text-white mobileM:w-[98%]"
          >
            Save progress
          </button>
        </div>
      </div>
    </>
  );
};

export default NutritionPlan;
