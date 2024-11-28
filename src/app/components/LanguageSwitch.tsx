"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation"; // Use the new `next/navigation` router

const languageOptions = [
  { id: 1, name: "ENG", flag: "/icon-us.png", code: "en" },
  { id: 2, name: "Chinese", flag: "/language/chinese.png", code: "zh" },
  { id: 3, name: "KH", flag: "/language/kh.jpg", code: "kh" },
  { id: 4, name: "TH", flag: "/icon-th.png", code: "th" },
  { id: 5, name: "Indonesian", flag: "/language/indo.png", code: "id" },
  { id: 6, name: "Malay", flag: "/language/malay.svg", code: "ms" },
  { id: 7, name: "Singapore", flag: "/language/singapore.png", code: "sg" },
  { id: 8, name: "Vietnamese", flag: "/language/vietnamese.jpg", code: "vi" },
  { id: 9, name: "Philippines", flag: "/language/philippines.png", code: "ph" },
  { id: 10, name: "Myanmar", flag: "/language/myammar.webp", code: "mm" },
  { id: 11, name: "Lao", flag: "/language/lao.png", code: "lo" },
  { id: 12, name: "Hindi", flag: "/language/hindi.webp", code: "hi" },
  { id: 13, name: "Urdu", flag: "/language/urdu.jpg", code: "ur" },
  { id: 14, name: "Bengali", flag: "/language/bengali.png", code: "bn" },
  { id: 15, name: "Taiwan", flag: "/language/Taiwan.webp", code: "tw" },
  { id: 16, name: "Hong Kong", flag: "/language/hongkong.png", code: "hk" },
  { id: 17, name: "Korea", flag: "/language/korea.webp", code: "ko" },
  { id: 18, name: "Portugal", flag: "/language/portugal.png", code: "pt" },
  { id: 19, name: "Australia", flag: "/language/australia.webp", code: "au" },
  { id: 20, name: "Canada", flag: "/language/canada.webp", code: "ca" },
];

const LanguageSwitch: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation(); // Access i18n instance
  const router = useRouter(); // Use router navigation

  const changeLanguage = (langCode: string) => {
    setIsDropdownOpen(false); // Close dropdown
    i18n.changeLanguage(langCode); // Update i18next language
    router.push(`/${langCode}`); // Navigate to the correct language route
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <Image
          src={
            languageOptions.find((lang) => lang.code === i18n.language)?.flag ||
            languageOptions[0].flag
          }
          alt="Current language flag"
          width={20}
          height={20}
          className="rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 text-white transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.07a.75.75 0 011.12.997l-4 4.5a.75.75 0 01-1.12 0l-4-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute bg-gray-900 text-white mt-2 rounded-lg shadow-lg w-56 py-2 z-50 overflow-auto max-h-96">
          {languageOptions.map((lang) => (
            <div
              key={lang.id}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md transition"
              onClick={() => changeLanguage(lang.code)}
            >
              <Image
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="ml-2 text-sm">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
