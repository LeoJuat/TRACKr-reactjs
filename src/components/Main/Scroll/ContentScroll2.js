import React from "react";

import classes from "./ContentScroll2.module.css";

const ContentScroll2 = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.scroll1}>
        <p className={classes.numHeader1}>04</p>
        <h1 className={classes.first}>All in one place</h1>
        <p className={classes.pitch}>
          Our app is the ultimate tool for achieving your fitness goals and
          maintaining a healthy lifestyle. Not only does it provide personalized
          workout plans and track your activity, but it also helps you monitor
          your daily caloric intake.
        </p>
        <p className={classes.numHeader2}>05</p>
        <h1 className={classes.second}>Easy to use</h1>
        <p className={classes.pitch}>
          Our website is designed to be user-friendly and intuitive, making it
          easy for you to find what you need and accomplish your goals.
        </p>
      </div>
    </div>
  );
};

export default ContentScroll2;
