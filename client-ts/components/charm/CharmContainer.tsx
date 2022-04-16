import React from "react";
import classes from "./CharmContainer.module.scss";

function CharmContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.charmContainer}>{children}</div>;
}

export default CharmContainer;
