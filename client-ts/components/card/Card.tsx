import { Card as CardType } from "@/types/typescript-axios";
import React from "react";
import classes from "./Card.module.scss";

function Card(props: { card: CardType }) {
  const { card } = props;

  const effectImgSrc = `/images/templates/card/stats/${card.effect}.png`;
  const classImgSrc = `/images/templates/card/class-icons/${card.class}.png`;
  const partImgSrc = `/images/templates/card/body-parts/${card.part}.png`;
  const gradientImgSrc = `/images/templates/card/gradients/${card.class}.png`;
  const artImgSrc = `/images/templates/card/arts/${card.id}.jpg`;
  const backgroundImgSrc = `/images/templates/card/backgrounds/${card.class}.jpg`;

  return (
    <div className={classes.card}>
      <div className={classes.cardSubElement}>
        <div className={classes.cardSubSubElement}>
          <div className={classes.cardBackground}>
            <img src={backgroundImgSrc} alt="Axie Card - Background" />
          </div>
          <div className={classes.cardArt}>
            <img src={artImgSrc} alt="Axie Card - Art" />
          </div>
          <div className={classes.cardGradient}>
            <img src={gradientImgSrc} alt="Axie Card - Gradient" />
          </div>
          <div className={classes.cardFrame}></div>
          {card.effect && (
            <div className={classes.cardValue}>
              <img src={effectImgSrc} alt={`Axie Card - Effect`} />
              <span>{card.value}</span>
            </div>
          )}
          <div className={classes.cardEnergyCost}>
            <div className={classes.cardEnergyCostFrame}>
              <img
                src="/images/templates/card/frame/frame-energy.png"
                alt="Axie Card - Energy Cost - Frame"
              />
            </div>
            <div className={classes.cardEnergyCostIcon}>
              <img
                src="/images/templates/card/frame/energy-icon.png"
                alt="Axie Card - Energy Cost - Icon"
              />
            </div>
            <span className={classes.cardEnergyCostValue}>
              {card.energyCost}
            </span>
          </div>
          <div className={classes.cardPart}>
            <div className={classes.cardPartFrame}>
              <img
                src="/images/templates/card/frame/frame-owner-plate.png"
                alt="Axie Card - Frame"
              />
            </div>
            <div className={classes.cardPartIcon}>
              <img src={partImgSrc} alt="Axie Card - Body Part" />
            </div>
          </div>
          <span className={classes.cardName}>{card.name}</span>
          <div className={classes.cardTags}>
            {card.abilities &&
              card.abilities.map((ability) => {
                const abilityImgSrc = `/images/templates/card/tags/${ability}.png`;
                return (
                  <img
                    key={`${card.id}_${ability}`}
                    src={abilityImgSrc}
                    alt="Axie Card - Ability"
                  />
                );
              })}
          </div>
          <span className={classes.cardDescription}>{card.description}</span>
          <div className={classes.cardClass}>
            <img src={classImgSrc} alt="Axie Card - Class" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
