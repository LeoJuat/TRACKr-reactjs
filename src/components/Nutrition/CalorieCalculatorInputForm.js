import { Alert, Snackbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import NutritionData from "./NutritionData";
import NutritionPlan from "./NutritionPlan";
import SelectedDatesNutrition from "./SelectedDatesNutrition";

const CalorieCalculatorInputForm = ({
  UIDKEY,
  calorieCalculatorHandler,
  setAge,
  setGender,
  setHeight,
  setWeight,
  setLevel,
  setGoal,
  calories,
  balancedProtein,
  balancedCarbs,
  balancedFat,
  lowFatProtein,
  lowFatCarbs,
  lowFatFat,
  lowCarbCarbs,
  lowCarbProtein,
  lowCarbFat,
  highProteinProtein,
  highProteinCarbs,
  highProteinFat,
  clicked,
  saveNutritionHandler,
  setInputCaloriesHandler,
  setInputProteinHandler,
  setInputFatHandler,
  setInputCarbsHandler,
  closeHandler,
  snackbar,
}) => {
  const [balancedPlan, setBalancedPlan] = useState(false);
  const [proteinPlan, setProteinPlan] = useState(false);
  const [fatPlan, setFatPlan] = useState(false);
  const [carbPlan, setCarbPlan] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [filteredDates, setFilteredDates] = useState(null);

  const calendarHandler = async (e) => {
    const res = await fetch(
      `https://trackr-production-default-rtdb.firebaseio.com/nutritionData/${UIDKEY}.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data === null) {
      setFilteredDates([]);
      return;
    }

    const filteredDatesArr = Object.values(data).filter((date) => {
      return date.date.includes(
        e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear()
      );
    });

    setFilteredDates(filteredDatesArr);
  };

  const proteinPlanHandler = () => {
    setBalancedPlan(!balancedPlan);
    setCarbPlan(!carbPlan);
    setFatPlan(!fatPlan);
  };

  const balancedPlanHandler = () => {
    setProteinPlan(!proteinPlan);
    setCarbPlan(!carbPlan);
    setFatPlan(!fatPlan);
  };

  const lowFatPlanHandler = () => {
    setBalancedPlan(!balancedPlan);
    setCarbPlan(!carbPlan);
    setProteinPlan(!proteinPlan);
  };

  const lowCarbPlanHandler = () => {
    setBalancedPlan(!balancedPlan);
    setFatPlan(!fatPlan);
    setProteinPlan(!proteinPlan);
  };

  return (
    <>
      <div className="w-[83%] h-auto gradient mt-10 mx-auto xl:grid xl:grid-cols-2 justify-items-center shadow-2xl rounded-lg mobileM:flex-col">
        {proteinPlan || fatPlan || carbPlan || balancedPlan ? (
          <NutritionPlan
            setInputCaloriesHandler={setInputCaloriesHandler}
            setInputFatHandler={setInputFatHandler}
            setInputCarbsHandler={setInputCarbsHandler}
            setInputProteinHandler={setInputProteinHandler}
            saveNutritionHandler={saveNutritionHandler}
          />
        ) : (
          <div className="flex flex-col self-center mt-10 mb-10 ml-5">
            {clicked && (
              <div>
                <h1 className="mx-5 text-3xl font-semibold text-white xl:w-[26.5rem] xl:text-start mobileM:text-center mobileM:w-[90%] mobileM:pt-16 xl:pt-0 sm:ml-5 mobileM:ml-1">
                  Choose a plan to submit your daily intake! ????
                </h1>
              </div>
            )}
            <div>
              <div className="flex self-center justify-center mt-6 xl:ml-5 mobileM:ml-0">
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
                      className="px-1 py-2 border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60"
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
                      className="px-1 py-2 border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60"
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
                      className="px-1 py-2 border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60"
                    />
                  </form>
                </div>
                <div className="flex mt-2 mb-10 xl:ml-20 mobileM:ml-5">
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
                      className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60 mobileM:mb-[14px] sm:mb-0"
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
                      className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60 mobileM:mb-[14px] sm:mb-0"
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
                      className="px-1 py-[0.60rem] border-2 border-gray-300 rounded-md mobileM:w-5/6 md:w-60 mobileM:mb-[14px] sm:mb-0"
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
                  className="z-10 xl:w-full px-3 py-1 font-medium text-white transition-all duration-200 bg-blue-500 border-2 border-white w-6/6 rounded-3xl hover:bg-blue-600 hover:text-white mobileM:w-[98%]"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        )}
        {clicked ? (
          <NutritionData
            calories={calories}
            balancedProtein={balancedProtein}
            balancedCarbs={balancedCarbs}
            balancedFat={balancedFat}
            highProteinProtein={highProteinProtein}
            highProteinCarbs={highProteinCarbs}
            highProteinFat={highProteinFat}
            lowFatProtein={lowFatProtein}
            lowFatCarbs={lowFatCarbs}
            lowFatFat={lowFatFat}
            lowCarbCarbs={lowCarbCarbs}
            lowCarbProtein={lowCarbProtein}
            lowCarbFat={lowCarbFat}
            proteinPlanHandler={proteinPlanHandler}
            balancedPlanHandler={balancedPlanHandler}
            lowFatPlanHandler={lowFatPlanHandler}
            lowCarbPlanHandler={lowCarbPlanHandler}
            balancedPlan={balancedPlan}
            fatPlan={fatPlan}
            proteinPlan={proteinPlan}
            carbPlan={carbPlan}
          />
        ) : (
          <h1 className="px-20 text-3xl font-semibold text-center text-white xl:mt-44 xl:pb-0 mobileM:pb-20 mobileM:mt-20">
            Input data to calculate your daily intake! ????
          </h1>
        )}
      </div>
      <div className="w-[83%] h-auto gradientBlue mt-10 mx-auto xl:grid xl:grid-cols-2 justify-items-center shadow-2xl rounded-lg mb-20 mobileM:flex-col">
        {filteredDates ? (
          <SelectedDatesNutrition filteredDates={filteredDates} />
        ) : (
          <h1 className="text-3xl font-semibold text-center text-white sm:px-20 mt-36 xl:pt-0 mobileM:pt-20 mobileM:px-16">
            Click on a date to see past progress! ????
          </h1>
        )}
        <div className="flex flex-col self-center py-10 mt-10 mb-10 mobileL:ml-5 mobileM:flex-row mobileM:justify-center mobileM:scale-[.85] mobileM:ml-0">
          <Tooltip
            title="Click on a date to see past progress!"
            placement="bottom"
          >
            <div>
              <Calendar
                className="rounded-md"
                calendarType="US"
                onChange={setCalendarValue}
                value={calendarValue}
                onClickDay={calendarHandler}
              />
            </div>
          </Tooltip>
        </div>
      </div>
      {snackbar && (
        <Snackbar
          open={snackbar}
          autoHideDuration={6000}
          onClose={closeHandler}
        >
          <Alert
            onClose={closeHandler}
            severity="success"
            sx={{ width: "100%" }}
          >
            Workout saved!
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default CalorieCalculatorInputForm;
