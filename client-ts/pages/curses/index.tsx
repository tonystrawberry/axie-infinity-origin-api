import Banner from "@/components/banner/Banner";
import React, { useEffect, useState } from "react";
import { cursesApi } from "@/api";
import { Curse as CurseType } from "@/types/typescript-axios";
import Curse from "@/components/curse/Curse";
import CurseContainer from "@/components/curse/CurseContainer";

export default function Curses() {
  const [curses, setCurses] = useState<CurseType[]>([]);

  useEffect(() => {
    const getApiV1Curses = async () => {
      const response = await cursesApi.getApiV1Curses();
      setCurses(response.data);
    };

    getApiV1Curses();
  }, []);

  return (
    <div>
      <Banner title="Curses" />
      <div>
        <CurseContainer>
          <>
            {curses.map((curse: CurseType) => (
              <Curse key={curse.id} curse={curse}></Curse>
            ))}
          </>
        </CurseContainer>
      </div>
    </div>
  );
}
