import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { charmsApi } from "@/api";
import { Charm as CharmType } from "@/types/typescript-axios";
import Charm from "@/components/charm/Charm";
import CharmContainer from "@/components/charm/CharmContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Charms() {
  const [charms, setCharms] = useState<CharmType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getApiV1Charms = async () => {
      const response = await charmsApi.getApiV1Charms();
      setCharms(response.data);
      setIsLoading(false);
    };

    getApiV1Charms();
  }, []);

  const CharmWithLoading = WithLoading(() => (
    <CharmContainer>
      <>
        {charms.map((charm: CharmType) => (
          <Charm key={charm.id} charm={charm}></Charm>
        ))}
      </>
    </CharmContainer>
  ));

  return (
    <div>
      <Head>
        <title>AxieDex | Charms</title>
      </Head>
      <Banner title="Charms" />
      <CharmWithLoading isLoading={isLoading}></CharmWithLoading>
    </div>
  );
}
