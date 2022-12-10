import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "../../utils/Scroll";
import Header from "./Header";

import classes from "./Main.module.css";
import ContentScroll from "./Scroll/ContentScroll";
import ContentScroll2 from "./Scroll/ContentScroll2";

const Main = () => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (img === 3) {
        setImg(0);
      } else {
        setImg(img + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [img]);

  return (
    <>
      <div className={classes.grid}>
        <div className={classes.left}>
          <Header />
          <Scroll />
          <div className={classes.container}>
            <h1 className="font-sans font-bold">Welcome to TRACKr!</h1>
            <p className={classes.numHeader}>01</p>
            <p>
              TRACKr is a fitness site to help track everything from workouts to
              calories. Our goal is to help you track your progression in AND
              out of the gym! Track your calories, macros, and your progression
              every single day all in one place.
            </p>
          </div>
          <Link to="/sign-up" className={classes.button}>
            Join now!
          </Link>
        </div>
        {img === 0 && <div className={classes.another}></div>}
        {img === 1 && <div className={classes.right}></div>}
        {img === 2 && <div className={classes.next}></div>}
        {img === 3 && <div className={classes.again}></div>}
      </div>
      <ContentScroll />
      <ContentScroll2 />
    </>
  );
};

export default Main;
