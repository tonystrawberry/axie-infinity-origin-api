import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { runesApi } from "@/api";
import { Rune as RuneType } from "@/types/typescript-axios";
import Rune from "@/components/rune/Rune";
import RuneContainer from "@/components/rune/RuneContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Runes() {
  const [runes, setRunes] = useState<RuneType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getApiV1Runes = async () => {
      const response = await runesApi.getApiV1Runes();
      setRunes(response.data);

      setIsLoading(false);
    };

    getApiV1Runes();
  }, []);

  const RuneWithLoading = WithLoading(() => (
    <RuneContainer>
      <>
        {runes.map((rune: RuneType) => (
          <Rune key={rune.id} rune={rune}></Rune>
        ))}
      </>
    </RuneContainer>
  ));

  return (
    <div>
      <Head>
        <title>AxieDex | Runes</title>
      </Head>
      <Banner title="Runes" />
      <RuneWithLoading isLoading={isLoading}></RuneWithLoading>
    </div>
  );
}
