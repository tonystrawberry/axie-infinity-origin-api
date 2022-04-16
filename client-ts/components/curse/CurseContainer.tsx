import React from "react";
import classes from "./CurseContainer.module.scss";

function CurseContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.curseContainer}>{children}</div>;
}

export default CurseContainer;
