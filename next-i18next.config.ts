import { UserConfig } from "next-i18next";

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th", "hindi"], // List all your locales here
  },
  reloadOnPrerender: process.env.NODE_ENV === "development", // Useful for dev mode
  react: {
    useSuspense: false, // Disable suspense in React
  },
};

export default i18nConfig;
