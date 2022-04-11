import Banner from "@/components/banner/Banner";
import React, { useEffect } from "react";
import { cardsApi } from "@/api";

export default function Cards() {
  useEffect(() => {
    console.log("Calling...");
    cardsApi.getApiV1GetCards();
  }, []);

  return (
    <div>
      <Banner title="Cards" />
    </div>
  );
}
