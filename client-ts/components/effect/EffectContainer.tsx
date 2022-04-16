import React from "react";
import classes from "./EffectContainer.module.scss";

function EffectContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.effectContainer}>{children}</div>;
}

export default EffectContainer;
