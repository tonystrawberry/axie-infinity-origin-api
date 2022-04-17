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
            alt="Rune Card - Background"
          />
        </div>
        <div className={classes.runeArt}>
          <img
            src={`/images/templates/rune/arts/${rune.id}.jpg`}
            alt="Rune Card - Art"
          />
        </div>
        <div className={classes.runeFrame}>
          <img
            src="/images/templates/rune/frame/frame.png"
            alt="Rune Card - Frame"
          />
        </div>
        <span className={classes.runeDescription}>{rune.description}</span>
        <span className={classes.runeName}>{rune.name}</span>
        <div className={classes.runeClass}>
          <img
            src={`/images/templates/rune/class/${rune.class}.jpg`}
            alt="Rune Card - Class"
          />
        </div>
      </div>
    </div>
  );
}

export default Rune;
