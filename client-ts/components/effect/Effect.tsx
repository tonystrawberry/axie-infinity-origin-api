import { Effect } from "@/types/typescript-axios";
import React from "react";
import classes from "./Effect.module.scss";

function Effect(props: { effect: Effect }) {
  const { effect } = props;

  return (
    <div className={classes.effect}>
      <div className={classes.effectSubElement}>
        <img
          src={`/images/templates/effect/arts/${effect.id}.png`}
          alt="Effect Card - Art"
        />
        <div className={classes.effectContent}>
          <div className={classes.effectName}>
            <h3>{effect.name}</h3>
          </div>
          <p className={classes.effectDescription}>{effect.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Effect;
