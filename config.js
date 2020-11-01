import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "http://soblog.con"
  : "http://localhost:800";
export const APP_NAME = publicRuntimeConfig.APP_NAME;
