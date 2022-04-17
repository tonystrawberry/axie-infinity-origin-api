import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { cardsApi } from "@/api";
import { Card as CardType } from "@/types/typescript-axios";
import Card from "@/components/card/Card";
import CardContainer from "@/components/card/CardContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Cards() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getApiV1Cards = async () => {
      const response = await cardsApi.getApiV1Cards();
      setCards(response.data);
      setIsLoading(false);
    };

    getApiV1Cards();
  }, []);

  const CardWithLoading = WithLoading(() => (
    <CardContainer>
      <>
        {cards.map((card: CardType) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </>
    </CardContainer>
  ));

  return (
    <div>
      <Head>
        <title>AxieDex | Cards</title>
      </Head>
      <Banner title="Cards" />
      <CardWithLoading isLoading={isLoading}></CardWithLoading>
    </div>
  );
}
