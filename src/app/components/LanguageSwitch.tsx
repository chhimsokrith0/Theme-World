"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const languageOptions = [
  { id: 1, name: "ENG", flag: "/icon-us.png", url: "/en" },
  { id: 2, name: "Chinese", flag: "/language/chinese.png", url: "/chinese" },
  { id: 3, name: "KR", flag: "/language/kh.jpg", url: "/kh" },
  { id: 4, name: "TH", flag: "/icon-th.png", url: "/th" },
  { id: 5, name: "Indonesian", flag: "/language/indo.png", url: "/indonesian" },
  { id: 6, name: "Malay", flag: "/language/malay.svg", url: "/malay" },
  { id: 7, name: "Singapore", flag: "/language/singapore.png", url: "/singapore" },
  { id: 8, name: "Vietnamese", flag: "/language/vietnamese.jpg", url: "/vietnamese" },
  { id: 9, name: "Philippines", flag: "/language/philippines.png", url: "/philippines" },
  { id: 10, name: "Myammar", flag: "/language/myammar.webp", url: "/myammar" },
  { id: 11, name: "Lao", flag: "/language/lao.png", url: "/lao" },
  { id: 12, name: "Hindi", flag: "/language/hindi.webp", url: "/hindi" },
  { id: 13, name: "Urdu", flag: "/language/urdu.jpg", url: "/urdu" },
  { id: 14, name: "Bengali", flag: "/language/bengali.png", url: "/bengali" },
  { id: 15, name: "Taiwan", flag: "/language/Taiwan.webp", url: "/taiwan" },
  { id: 16, name: "Hong Kong", flag: "/language/hongkong.png", url: "/hongkong" },
  { id: 17, name: "Korea", flag: "/language/korea.webp", url: "/korea" },
  { id: 18, name: "Portugal", flag: "/language/portugal.png", url: "/portugal" },
  { id: 19, name: "Australia", flag: "/language/australia.webp", url: "/australia" },
  { id: 20, name: "Canada", flag: "/language/canada.webp", url: "/canada" },
];

const LanguageSwitch: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter(); // Move useRouter outside of conditional checks.

  const changeLanguage = (url: string) => {
    setIsDropdownOpen(false); // Close dropdown
    router.push(url); // Navigate to the selected language URL
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        className="flex items-center space-x-2 bg-gray-800 mr-10 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <Image
          src={languageOptions[0].flag}
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
        <div className="absolute bg-gray-900 text-white mt-2 rounded-lg shadow-lg w-40 py-2 z-50 overflow-auto max-h-96">
          {languageOptions.map((lang) => (
            <div
              key={lang.id}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md transition"
              onClick={() => changeLanguage(lang.url)}
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
