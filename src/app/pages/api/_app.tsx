import { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "@/app/config/i18n";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
