import { UserConfig } from "next-i18next";

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "kh", "th", "id", "ms", "sg", "vi", "ph", "mm", "lo", "hi", "ur", "bn", "tw", "hk", "ko", "pt", "au", "ca"],
  },
  localePath: "./public/locales", // Path to your locales folder
  reloadOnPrerender: process.env.NODE_ENV === "development", // Reload translations in development
  react: {
    useSuspense: false, // Avoid React suspense for translations
  },
};

export default i18nConfig;
