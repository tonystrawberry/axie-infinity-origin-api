import { Charm } from "@/types/typescript-axios";
import React from "react";
import classes from "./Charm.module.scss";

function Charm(props: { charm: Charm }) {
  const { charm } = props;

  return (
    <div className={classes.charm}>
      <div className={classes.charmSubElement}>
        <div className={classes.charmBackground}>
          <img
            src="/images/templates/charm/backgrounds/background.png"
            alt="Charm Card - Background"
          />
        </div>
        <div className={classes.charmArt}>
          <img
            src={`/images/templates/charm/arts/${charm.id}.png`}
            alt="Charm Card - Art"
          />
        </div>
        <div className={classes.charmFrame}>
          <img
            src="/images/templates/charm/frame/frame.png"
            alt="Charm Card - Frame"
          />
        </div>
        <span className={classes.charmValue}>{charm.value}</span>
        <span className={classes.charmDescription}>{charm.description}</span>
        <span className={classes.charmName}>{charm.name}</span>
        <div className={classes.charmClass}>
          <img
            src={`/images/templates/charm/class/${charm.class}.jpg`}
            alt="Charm Card - Class"
          />
        </div>
      </div>
    </div>
  );
}

export default Charm;
