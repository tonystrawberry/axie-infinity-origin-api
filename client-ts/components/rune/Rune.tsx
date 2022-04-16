import { Rune } from "@/types/typescript-axios";
import React from "react";
import classes from "./Rune.module.scss";

function Rune(props: { rune: Rune }) {
  const { rune } = props;

  return (
    <div className={classes.rune}>
      <div className={classes.runeSubElement}>
        <div className={classes.runeBackground}>
          <img
            src="/images/templates/rune/backgrounds/background.png"
            alt="Rune background"
          />
        </div>
        <div className={classes.runeArt}>
          <img
            src={`/images/templates/rune/arts/${rune.id}.jpg`}
            alt="Adaptive Program"
          />
        </div>
        <div className={classes.runeFrame}>
          <img
            src="/images/templates/rune/frame/frame.png"
            alt="Rune background"
          />
        </div>
        <span className={classes.runeDescription}>{rune.description}</span>
        <span className={classes.runeName}>{rune.name}</span>
        <div className={classes.runeClass}>
          <img
            src={`/images/templates/rune/class/${rune.class}.jpg`}
            alt="mech class charm"
          />
        </div>
      </div>
    </div>
  );
}

export default Rune;
