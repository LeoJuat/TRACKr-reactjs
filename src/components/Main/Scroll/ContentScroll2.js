import React from "react";

import classes from "./ContentScroll2.module.css";

const ContentScroll2 = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.scroll1}>
        <p className={classes.numHeader1}>04</p>
        <h1 className={classes.first}>Track your workouts</h1>
        <p className={classes.pitch}>
          With TRACKr you can choose daily workout plans. You can record the
          number of sets, reps, and weight of your workouts. Track your
          progression to ensure you are pushing your limits every day.
        </p>
        <p className={classes.numHeader2}>05</p>
        <h1 className={classes.second}>Eat healthy</h1>
        <p className={classes.pitch}>
          It has never been easier to stay healthy! We help you stay on route by
          keeping track of your daily carbs, fat,and protein intake.
        </p>
      </div>
    </div>
  );
};

export default ContentScroll2;
