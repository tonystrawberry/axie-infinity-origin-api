import {
  CardsApi,
  CharmsApi,
  CursesApi,
  EffectsApi,
  RunesApi,
  ToolsApi,
} from "@/types/typescript-axios/api";

import { Configuration } from "@/types/typescript-axios/configuration";

const { NEXT_PUBLIC_API_BASE_URL } = process.env;
console.log("process.env", process.env);
console.log("NEXT_PUBLIC_API_BASE_URL", NEXT_PUBLIC_API_BASE_URL);

const config = new Configuration({
  basePath: NEXT_PUBLIC_API_BASE_URL,
});

const cardsApi = new CardsApi(config, "");
const charmsApi = new CharmsApi(config, "");
const cursesApi = new CursesApi(config, "");
const effectsApi = new EffectsApi(config, "");
const runesApi = new RunesApi(config, "");
const toolsApi = new ToolsApi(config, "");

export { cardsApi, charmsApi, cursesApi, effectsApi, runesApi, toolsApi };
