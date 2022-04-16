import { Curse } from "@/types/typescript-axios";
import React from "react";
import classes from "./Curse.module.scss";

function Curse(props: { curse: Curse }) {
  const { curse } = props;

  return (
    <div className={classes.curse}>
      <div className={classes.curseSubElement}>
        <div className={classes.curseSubSubElement}>
          <div className={classes.curseBackground}>
            <img
              src="/images/templates/curse/backgrounds/curse.jpg"
              alt="curse Axie Card Background"
            />
          </div>
          <div className={classes.curseArt}>
            <img src={`/images/templates/curse/arts/${curse.id}.jpg`} />
          </div>
          <div className={classes.curseGradient}>
            <img
              src="/images/templates/curse/gradients/curse.png"
              alt="curse Axie Card"
            />
          </div>
          <div className={classes.curseFrame}></div>
          <div className={classes.curseEnergyCost}>
            <div className={classes.curseEnergyCostFrame}>
              <img
                src="/images/templates/curse/frame/frame-energy.png"
                alt="Card frame"
              />
            </div>
            <div className={classes.curseEnergyCostIcon}>
              <img
                src="/images/templates/curse/frame/energy-icon.png"
                alt="Energy icon"
              />
            </div>
            <span className={classes.curseEnergyCostValue}>X</span>
          </div>
          <span className={classes.curseName}>{curse.name}</span>
          <div className={classes.curseTags}>
            {curse.abilities &&
              curse.abilities.map((ability) => {
                const abilityImgSrc = `/images/templates/curse/tags/${ability}.png`;
                return (
                  <img
                    key={`${curse.id}_${ability}`}
                    src={abilityImgSrc}
                    alt={`${ability} Curse Tag`}
                  />
                );
              })}
          </div>
          <span className={classes.curseDescription}>{curse.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Curse;
