import { Card } from "@/types/typescript-axios";
import React from "react";
import classes from "./Card.module.scss";

function Card(props: { card: Card }) {
  const { card } = props;
  return (
    <div className={classes.card}>
      <div className={classes.cardSubElement}>
        <div className={classes.cardSubSubElement}>
          <div className={classes.cardBackground}>
            <img
              src="/images/templates/card/backgrounds/dawn.jpg"
              alt="dawn Axie Card Background"
            />
          </div>
          <div className={classes.cardArt}>
            <img
              src="/images/templates/card/art/dawn-tail-03.jpg"
              alt="Aegis Talisman"
            />
          </div>
          <div className={classes.cardGradient}>
            <img
              src="/images/templates/card/gradients/dawn.png"
              alt="dawn Axie Card"
            />
          </div>
          <div className={classes.cardFrame}></div>
          <div className={classes.cardValue}>
            <img
              src="/images/templates/card/stats/shield.png"
              alt="Shield Card"
            />
            <span>65</span>
          </div>
          <div className={classes.cardEnergyCost}>
            <div className={classes.cardEnergyCostFrame}>
              <img
                src="/images/templates/card/frame/frame-energy.png"
                alt="Card frame"
              />
            </div>
            <div className={classes.cardEnergyCostIcon}>
              <img
                src="/images/templates/card/frame/energy-icon.png"
                alt="Energy icon"
              />
            </div>
            <span className={classes.cardEnergyCostValue}>1</span>
          </div>
          <div className={classes.cardPart}>
            <div className={classes.cardPartFrame}>
              <img
                src="/images/templates/card/frame/frame-owner-plate.png"
                alt="Axie card frame"
              />
            </div>
            <div className={classes.cardPartIcon}>
              <img
                src="/images/templates/card/body-parts/tail.png"
                alt="Axie card - tail body part"
              />
            </div>
          </div>
          <span className={classes.cardName}>Aegis Talisman</span>
          <div className={classes.cardTags}>
            <img
              src="/images/templates/card/tags/skill.png"
              alt="skill card tag"
            />
          </div>
          <span className={classes.cardDescription}>Target any ally.</span>
          <div className={classes.cardClass}>
            <img
              src="/images/templates/card/class-icons/dawn.png"
              alt="dawn class card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
