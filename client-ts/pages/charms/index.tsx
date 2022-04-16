import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { charmsApi } from "@/api";
import { Charm as CharmType } from "@/types/typescript-axios";
import Charm from "@/components/charm/Charm";
import CharmContainer from "@/components/charm/CharmContainer";

export default function Charms() {
  const [charms, setCharms] = useState<CharmType[]>([]);

  useEffect(() => {
    const getApiV1Charms = async () => {
      const response = await charmsApi.getApiV1Charms();
      setCharms(response.data);
    };

    getApiV1Charms();
  }, []);

  return (
    <div>
      <Banner title="Charms" />
      <div>
        <CharmContainer>
          <>
            {charms.map((charm: CharmType) => (
              <Charm key={charm.id} charm={charm}></Charm>
            ))}
          </>
        </CharmContainer>
      </div>
    </div>
  );
}
