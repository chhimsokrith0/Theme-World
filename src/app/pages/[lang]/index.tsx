// src/app/[lang]/page.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function generateStaticParams() {
  const languages = [
    "en", "zh", "kh", "th", "id", "ms", "sg", "vi", "ph", "mm",
    "lo", "hi", "ur", "bn", "tw", "hk", "ko", "pt", "au", "ca"
  ];

  return languages.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang || "en";
  const translations = await serverSideTranslations(lang, ["common"]);

  return <div>{translations ? "Welcome to the homepage!" : "Loading..."}</div>;
}
