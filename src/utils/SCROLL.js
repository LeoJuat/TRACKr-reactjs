import React from "react";

import classes from "./SCROLL.module.css";

const SCROLL = () => {
  return (
    <div className={classes.mouse_scroll}>
      <div className={classes.mouse}>
        <div className={classes.wheel}></div>
      </div>
      <div>
        <span className={classes.m_scroll_arrows}></span>
        <span className={classes.m_scroll_arrows2}></span>
        <span className={classes.m_scroll_arrows3}></span>
      </div>
    </div>
  );
};

export default SCROLL;
