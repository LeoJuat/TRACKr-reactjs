import React from "react";

const CalorieCalculatorInputForm = ({
  calorieCalculatorHandler,
  setAge,
  setGender,
  setHeight,
  setWeight,
  setLevel,
  setGoal,
  calories,
  balanced,
  lowFat,
  lowCarbs,
  highProtein,
  clicked,
}) => {
  return (
    <>
      <div className="w-[83%] h-auto gradient mt-10 mx-auto grid grid-cols-2 justify-items-center shadow-2xl rounded-lg">
        <div className="flex flex-col self-center mt-10 mb-10 ml-5">
          {clicked && (
            <div>
              <h1 className="mx-5 text-3xl font-semibold text-white w-[26.5rem]">
                Calculate your daily calorie and macro intake down below! 🥕
              </h1>
            </div>
          )}
          <div>
            <div className="flex self-center mt-6 ml-5">
              <div className="flex mb-10">
                <form className="mt-2">
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="age"
                  >
                    Age
                  </label>
                  <br />
                  <input
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder="Age"
                    className="px-1 py-2 border-2 border-gray-300 rounded-md"
                  />
                  <br />
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="Height"
                  >
                    Height
                  </label>
                  <br />
                  <input
                    onChange={(e) => setHeight(e.target.value)}
                    type="number"
                    placeholder="Height in cm"
                    className="px-1 py-2 border-2 border-gray-300 rounded-md"
                  />
                  <br />
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="Weight"
                  >
                    Weight
                  </label>
                  <br />
                  <input
                    onChange={(e) => setWeight(e.target.value)}
                    type="number"
                    placeholder="Weight in kg"
                    className="px-1 py-2 border-2 border-gray-300 rounded-md"
                  />
                </form>
              </div>
              <div className="flex mt-2 mb-10 ml-20">
                <form>
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="Gender"
                  >
                    Gender
                  </label>
                  <br />
                  <select
                    defaultValue={"DEFAULT"}
                    required
                    className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md w-60"
                    id="gender"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="DEFAULT" disabled hidden>
                      Please Choose...
                    </option>
                    <option value="male">Male </option>
                    <option value="female">Female </option>
                  </select>
                  <br />
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="Activity Level"
                  >
                    Activity Level
                  </label>
                  <br />
                  <select
                    defaultValue={"DEFAULT"}
                    required
                    className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md w-60"
                    id="level"
                    name="level"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="DEFAULT" disabled hidden>
                      Please Choose...
                    </option>
                    <option value="1">BMR</option>
                    <option value="2">Little or no exercise</option>
                    <option value="3">Exercise 1-3 times/week</option>
                    <option value="4">Exercise 3-4 times/week</option>
                    <option value="5">Exercise 6-7 times/week</option>
                    <option value="6">Exercise daily</option>
                  </select>
                  <br />
                  <label
                    className="text-lg font-semibold text-white"
                    htmlFor="goal"
                  >
                    Goal
                  </label>
                  <br />
                  <select
                    defaultValue={"DEFAULT"}
                    required
                    className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md w-60"
                    id="goal"
                    name="goal"
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    <option value="DEFAULT" disabled hidden>
                      Please Choose...
                    </option>
                    <option value="maintain">Maintain weight</option>
                    <option value="mildlose">Mild weight loss</option>
                    <option value="weightlose">Weight loss</option>
                    <option value="extremelose">Extreme weight loss</option>
                    <option value="mildgain">Mild weight gain</option>
                    <option value="weightgain">Weight gain</option>
                    <option value="extremegain">Extreme weight gain</option>
                  </select>
                </form>
              </div>
            </div>
            <div>
              <button
                onClick={calorieCalculatorHandler}
                className="z-10 w-full px-3 py-1 font-medium text-white transition-all duration-200 bg-blue-500 border-2 border-white w-6/6 rounded-3xl hover:bg-blue-600 hover:text-white"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        {!clicked && (
          <h1 className="mt-40 text-3xl font-medium text-white w-96">
            Input data to see calorie and macros 🍎
          </h1>
        )}
        {clicked && (
          <section className="mt-10 text-2xl font-medium text-white w-96">
            <div className="text-2xl font-semibold text-white">
              Daily intake: {Math.trunc(calories)} calories
            </div>
            <div className="flex gap-8">
              <div className="p-4 mt-5 bg-blue-500 w-fit rounded-2xl">
                <h2 className="mb-2 underline">High protein</h2>
                <h2 className="mb-1">
                  {Math.trunc(highProtein?.protein)}g protein
                </h2>
                <h2 className="mb-1">
                  {Math.trunc(highProtein?.carbs)}g carbs
                </h2>
                <h2 className="mb-1">{Math.trunc(highProtein?.fat)}g fat</h2>
              </div>
              <div className="p-4 mt-5 bg-red-500 w-fit rounded-2xl">
                <h2 className="mb-2 underline">Balanced</h2>
                <h2 className="mb-1">
                  {Math.trunc(balanced?.protein)}g protein
                </h2>
                <h2 className="mb-1">{Math.trunc(balanced?.carbs)}g carbs</h2>
                <h2 className="mb-1">{Math.trunc(balanced?.fat)}g fat</h2>
              </div>
            </div>
            <div className="flex gap-8 mb-10">
              <div className="p-4 mt-5 bg-orange-500 w-fit rounded-2xl">
                <h2 className="mb-2 underline">Low fat</h2>
                <h2 className="mb-1">{Math.trunc(lowFat?.protein)}g protein</h2>
                <h2 className="mb-1">{Math.trunc(lowFat?.carbs)}g carbs</h2>
                <h2 className="mb-1">{Math.trunc(lowFat?.fat)}g fat</h2>
              </div>
              <div className="p-4 mt-5 bg-purple-500 w-fit rounded-2xl">
                <h2 className="mb-2 underline">Low carbs</h2>
                <h2 className="mb-1">
                  {Math.trunc(lowCarbs?.protein)}g protein
                </h2>
                <h2 className="mb-1">{Math.trunc(lowCarbs?.carbs)}g carbs</h2>
                <h2 className="mb-1">{Math.trunc(lowCarbs?.fat)}g fat</h2>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CalorieCalculatorInputForm;
