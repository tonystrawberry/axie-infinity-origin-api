import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { effectsApi } from "@/api";
import { Effect as EffectType } from "@/types/typescript-axios";
import Effect from "@/components/effect/Effect";
import EffectContainer from "@/components/effect/EffectContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Effects() {
  const [effects, setEffects] = useState<EffectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getApiV1Effects = async () => {
      const response = await effectsApi.getApiV1Effects();
      setEffects(response.data);
      setIsLoading(false);
    };

    getApiV1Effects();
  }, []);

  const EffectWithLoading = WithLoading(() => (
    <EffectContainer>
      <>
        {effects.map((effect: EffectType) => (
          <Effect key={effect.id} effect={effect}></Effect>
        ))}
      </>
    </EffectContainer>
  ));

  return (
    <div>
      <Head>
        <title>AxieDex | Effects</title>
      </Head>
      <Banner title="Effects" />
      <EffectWithLoading isLoading={isLoading}></EffectWithLoading>
    </div>
  );
}
