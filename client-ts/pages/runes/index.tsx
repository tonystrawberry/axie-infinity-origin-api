import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { runesApi } from "@/api";
import { Rune as RuneType } from "@/types/typescript-axios";
import Rune from "@/components/rune/Rune";
import RuneContainer from "@/components/rune/RuneContainer";

export default function Runes() {
  const [runes, setRunes] = useState<RuneType[]>([]);

  useEffect(() => {
    const getApiV1Runes = async () => {
      const response = await runesApi.getApiV1Runes();
      setRunes(response.data);
    };

    getApiV1Runes();
  }, []);

  return (
    <div>
      <Banner title="Runes" />
      <div>
        <RuneContainer>
          <>
            {runes.map((rune: RuneType) => (
              <Rune key={rune.id} rune={rune}></Rune>
            ))}
          </>
        </RuneContainer>
      </div>
    </div>
  );
}
