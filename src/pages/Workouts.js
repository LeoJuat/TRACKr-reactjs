import React, { useState } from "react";
import Exercises from "../components/Exercises/Exercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import InitialExerciseCards from "../components/Exercises/InitialExerciseCards";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ExerciseInputs from "../components/Exercises/ExerciseInputs";
import { Alert, Snackbar, Tooltip } from "@mui/material";
import SearchExercise from "../components/Exercises/SearchExercise";
import LoggedInHeader from "../components/Header/LoggedInHeader";
import SelectedDateExercises from "../components/Exercises/SelectedDateExercises";

const Workouts = () => {
  const [searchExercises, setSearchExercises] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [filteredDates, setFilteredDates] = useState(null);

  const searchHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!searchExercises) {
      return;
    }

    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );

    const filterSearchedExercises = exerciseData.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(searchExercises) ||
        exercise.target.toLowerCase().includes(searchExercises) ||
        exercise.bodyPart.toLowerCase().includes(searchExercises) ||
        exercise.equipment.toLowerCase().includes(searchExercises)
      );
    });

    window.scrollTo({ top: 800, behavior: "smooth" });

    setIsLoading(false);
    setSearchExercises("");
    setExercises(filterSearchedExercises);
  };

  const selectedBodyPartHandler = async (selected) => {
    setIsLoading(true);
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );

    const filterSearchedExercises = exerciseData.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(selected) ||
        exercise.target.toLowerCase().includes(selected) ||
        exercise.bodyPart.toLowerCase().includes(selected) ||
        exercise.equipment.toLowerCase().includes(selected)
      );
    });

    setIsLoading(false);
    setExercises(filterSearchedExercises);
  };

  function handleSelectedExercise(newExercise) {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setSelectedExercises([...selectedExercises, newExercise]);
  }

  const saveHandler = async (exercise, sets) => {
    const dateObj = new Date();
    const pst = dateObj.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

    const workoutData = {
      name: exercise,
      sets: sets,
      date: pst,
    };

    const res = await fetch(
      "https://trackr-production-default-rtdb.firebaseio.com/workoutData.json",
      {
        method: "POST",
        body: JSON.stringify(workoutData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    setSnackbar(true);
    setSelectedExercises([]);
    return data;
  };

  const closeHandler = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  const calendarHandler = async (e) => {
    setIsLoading(true);
    const res = await fetch(
      "https://trackr-production-default-rtdb.firebaseio.com/workoutData.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    const filteredDatesArr = Object.values(data).filter((date) =>
      date.date.includes(
        e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear()
      )
    );

    setFilteredDates(filteredDatesArr);
    setIsLoading(false);
  };

  return (
    <div>
      <LoggedInHeader />
      <div className="w-[83%] h-auto gradient mt-10 mx-auto grid grid-cols-2 justify-items-center shadow-2xl rounded-lg">
        <div className="flex flex-col self-center mb-10 ml-5">
          {isLoading && (
            <p className="mt-20 text-center text-white mb-36">Loading...</p>
          )}
          {filteredDates && !isLoading && (
            <SelectedDateExercises filteredDates={filteredDates} />
          )}
          <ExerciseInputs
            setSelectedExercises={setSelectedExercises}
            selectedExercises={selectedExercises}
            saveHandler={saveHandler}
          />
          {!filteredDates?.length && (
            <h1 className="mx-10 text-3xl font-semibold text-white">
              Please choose a workout down below to start tracking! 💪
            </h1>
          )}
        </div>
        <Tooltip
          title="Click on a date to see past progress!"
          placement="right"
        >
          <div className="py-10">
            <Calendar
              className="rounded-md "
              calendarType="US"
              onChange={setCalendarValue}
              value={calendarValue}
              onClickDay={calendarHandler}
            />
          </div>
        </Tooltip>
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
      <SearchExercise
        searchExercises={searchExercises}
        setSearchExercises={setSearchExercises}
        searchHandler={searchHandler}
      />
      <InitialExerciseCards selectedBodyPart={selectedBodyPartHandler} />
      {isLoading && <p className="mt-20 text-center mb-36">Loading...</p>}
      {!isLoading && (
        <Exercises
          exercises={exercises}
          setSelectedExercises={handleSelectedExercise}
        />
      )}
    </div>
  );
};

export default Workouts;
