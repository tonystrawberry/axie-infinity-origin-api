import React from "react";
import classes from "./Banner.module.scss";

function Banner(props) {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.bannerContent}>
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
