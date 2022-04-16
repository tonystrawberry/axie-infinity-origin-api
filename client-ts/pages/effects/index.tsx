import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { effectsApi } from "@/api";
import { Effect as EffectType } from "@/types/typescript-axios";
import Effect from "@/components/effect/Effect";
import EffectContainer from "@/components/effect/EffectContainer";

export default function Effects() {
  const [effects, setEffects] = useState<EffectType[]>([]);

  useEffect(() => {
    const getApiV1Effects = async () => {
      const response = await effectsApi.getApiV1Effects();
      setEffects(response.data);
    };

    getApiV1Effects();
  }, []);

  return (
    <div>
      <Banner title="Effects" />
      <div>
        <EffectContainer>
          <>
            {effects.map((effect: EffectType) => (
              <Effect key={effect.id} effect={effect}></Effect>
            ))}
          </>
        </EffectContainer>
      </div>
    </div>
  );
}
