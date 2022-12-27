import React, { useEffect, useState } from "react";
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
  const [highProteinProtein, setHighProteinProtein] = useState(null);
  const [highProteinCarbs, setHighProteinCarbs] = useState(null);
  const [highProteinFat, setHighProteinFat] = useState(null);
  const [lowCarbProtein, setLowCarbProtein] = useState(null);
  const [lowCarbCarbs, setLowCarbCarbs] = useState(null);
  const [lowCarbFat, setLowCarbFat] = useState(null);
  const [lowFatProtein, setLowFatProtein] = useState(null);
  const [lowFatCarbs, setLowFatCarbs] = useState(null);
  const [lowFatFat, setLowFatFat] = useState(null);
  const [balancedProtein, setBalancedProtein] = useState(null);
  const [balancedCarbs, setBalancedCarbs] = useState(null);
  const [balancedFat, setBalancedFat] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [inputCalories, setInputCalories] = useState(null);
  const [inputProtein, setInputProtein] = useState(null);
  const [inputFat, setInputFat] = useState(null);
  const [inputCarbs, setInputCarbs] = useState(null);
  const [snackbar, setSnackbar] = useState(false);

  const UIDKEY = localStorage.getItem("uid");

  const closeHandler = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

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

  useEffect(() => {
    setHighProteinProtein(highProtein?.protein);
    setHighProteinCarbs(highProtein?.carbs);
    setHighProteinFat(highProtein?.fat);
    setLowCarbProtein(lowCarbs?.protein);
    setLowCarbCarbs(lowCarbs?.carbs);
    setLowCarbFat(lowCarbs?.fat);
    setLowFatProtein(lowFat?.protein);
    setLowFatCarbs(lowFat?.carbs);
    setLowFatFat(lowFat?.fat);
    setBalancedProtein(balanced?.protein);
    setBalancedCarbs(balanced?.carbs);
    setBalancedFat(balanced?.fat);
  }, [highProtein, lowCarbs, lowFat, balanced]);

  const setInputCaloriesHandler = (calories) => {
    setInputCalories(calories);
  };

  const setInputProteinHandler = (protein) => {
    setInputProtein(protein);
  };

  const setInputFatHandler = (fat) => {
    setInputFat(fat);
  };

  const setInputCarbsHandler = (carbs) => {
    setInputCarbs(carbs);
  };

  const saveNutritionHandler = async () => {
    const dateObj = new Date();
    const pst = dateObj.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

    const nutritionData = {
      calories: inputCalories,
      protein: inputProtein,
      fat: inputFat,
      carbs: inputCarbs,
      date: pst,
    };

    const res = await fetch(
      `https://trackr-production-default-rtdb.firebaseio.com/nutritionData/${UIDKEY}.json`,
      {
        method: "POST",
        body: JSON.stringify(nutritionData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    setSnackbar(true);
    window.location.reload();
    return data;
  };

  return (
    <>
      <LoggedInHeader />
      <CalorieCalculatorInputForm
        UIDKEY={UIDKEY}
        calorieCalculatorHandler={calorieCalculatorHandler}
        saveNutritionHandler={saveNutritionHandler}
        setAge={setAgeHandler}
        setGender={setGenderHandler}
        setHeight={setHeightHandler}
        setWeight={setWeightHandler}
        setLevel={setLevelHandler}
        setGoal={setGoalHandler}
        calories={calories}
        balancedProtein={balancedProtein}
        balancedCarbs={balancedCarbs}
        balancedFat={balancedFat}
        lowFatProtein={lowFatProtein}
        lowFatCarbs={lowFatCarbs}
        lowFatFat={lowFatFat}
        lowCarbCarbs={lowCarbCarbs}
        lowCarbProtein={lowCarbProtein}
        lowCarbFat={lowCarbFat}
        highProteinProtein={highProteinProtein}
        highProteinCarbs={highProteinCarbs}
        highProteinFat={highProteinFat}
        clicked={clicked}
        setInputCaloriesHandler={setInputCaloriesHandler}
        setInputProteinHandler={setInputProteinHandler}
        setInputFatHandler={setInputFatHandler}
        setInputCarbsHandler={setInputCarbsHandler}
        snackbar={snackbar}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default Nutrition;
