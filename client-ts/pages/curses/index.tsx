import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { cursesApi } from "@/api";
import { Curse as CurseType } from "@/types/typescript-axios";
import Curse from "@/components/curse/Curse";
import CurseContainer from "@/components/curse/CurseContainer";
import { WithLoading } from "@/components/with-loading/WithLoading";
import Head from "next/head";

export default function Curses() {
  const [curses, setCurses] = useState<CurseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getApiV1Curses = async () => {
      const response = await cursesApi.getApiV1Curses();
      setCurses(response.data);
      setIsLoading(false);
    };

    getApiV1Curses();
  }, []);

  const CurseWithLoading = WithLoading(() => (
    <CurseContainer>
      <>
        {curses.map((curse: CurseType) => (
          <Curse key={curse.id} curse={curse}></Curse>
        ))}
      </>
    </CurseContainer>
  ));

  return (
    <div>
      <Head>
        <title>AxieDex | Curses</title>
      </Head>
      <Banner title="Curses" />
      <CurseWithLoading isLoading={isLoading}></CurseWithLoading>
    </div>
  );
}
