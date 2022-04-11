import { CardsApi } from "@/typescript-axios/api";

import { Configuration } from "@/typescript-axios/configuration";

const { API_BASE_URL } = process.env;

const config = new Configuration({
  basePath: API_BASE_URL,
});

const cardsApi = new CardsApi(config, "");

export { cardsApi };
