import React from "react";
import classes from "./CardContainer.module.scss";

function CardContainer(props: { children: JSX.Element }) {
  const { children } = props;
  return <div className={classes.cardContainer}>{children}</div>;
}

export default CardContainer;
