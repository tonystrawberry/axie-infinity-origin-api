import React from "react";
import classes from "./ToolContainer.module.scss";

function ToolContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.toolContainer}>{children}</div>;
}

export default ToolContainer;
