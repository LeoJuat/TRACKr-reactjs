import React, { useState } from "react";
import LoggedInHeader from "../components/Header/LoggedInHeader";
import CalorieCalculatorInputForm from "../components/Nutrition/CalorieCalculatorInputForm";

const Nutrition = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [level, setLevel] = useState(0);
  const [goal, setGoal] = useState("");
  const [calories, setCalories] = useState(null);
  const [balanced, setBalanced] = useState(null);
  const [lowFat, setLowFat] = useState(null);
  const [lowCarbs, setLowCarbs] = useState(null);
  const [highProtein, setHighProtein] = useState(null);
  const [clicked, setClicked] = useState(false);

  const setAgeHandler = (inputAge) => {
    setAge(inputAge);
  };

  const setGenderHandler = (inputGender) => {
    setGender(inputGender);
  };

  const setHeightHandler = (inputHeight) => {
    setHeight(inputHeight);
  };

  const setWeightHandler = (inputWeight) => {
    setWeight(inputWeight);
  };

  const setLevelHandler = (inputLevel) => {
    setLevel(inputLevel);
  };

  const setGoalHandler = (inputGoal) => {
    setGoal(inputGoal);
  };

  const calorieCalculatorHandler = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "097984f24bmsh8811627c5414e29p1326f4jsn71648956b79b",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    fetch(
      `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${level}&goal=${goal}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCalories(response.data.calorie);
        setBalanced(response.data.balanced);
        setLowFat(response.data.lowfat);
        setLowCarbs(response.data.lowcarbs);
        setHighProtein(response.data.highprotein);
      })
      .catch((err) => console.error(err));

    setClicked(true);
  };

  return (
    <>
      <LoggedInHeader />
      <CalorieCalculatorInputForm
        calorieCalculatorHandler={calorieCalculatorHandler}
        setAge={setAgeHandler}
        setGender={setGenderHandler}
        setHeight={setHeightHandler}
        setWeight={setWeightHandler}
        setLevel={setLevelHandler}
        setGoal={setGoalHandler}
        calories={calories}
        balanced={balanced}
        lowFat={lowFat}
        lowCarbs={lowCarbs}
        highProtein={highProtein}
        clicked={clicked}
      />
    </>
  );
};

export default Nutrition;
