import React from "react";
import classes from "./RuneContainer.module.scss";

function RuneContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.runeContainer}>{children}</div>;
}

export default RuneContainer;
