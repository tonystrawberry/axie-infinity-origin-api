import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { cardsApi } from "@/api";
import { Card as CardType } from "@/types/typescript-axios";
import Card from "@/components/card/Card";
import CardContainer from "@/components/card/CardContainer";

export default function Cards() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const getApiV1Cards = async () => {
      const response = await cardsApi.getApiV1Cards();
      setCards(response.data);
    };

    getApiV1Cards();
  }, []);

  return (
    <div>
      <Banner title="Cards" />
      <div>
        <CardContainer>
          <>
            {cards.map((card: CardType) => (
              <Card key={card.id} card={card}></Card>
            ))}
          </>
        </CardContainer>
      </div>
    </div>
  );
}
