"use client";

import React, { useState } from "react";
import Link from "next/link";
import privilegeTexture from "@/app/assets/privilege-texture.webp";
import questIcon from "@/app/assets/Property 1=quests.svg";
import rewardIcon from "@/app/assets/Property 1=open-box 1.svg";
import promoIcon from "@/app/assets/Property 1=megaphone 2.svg";
import levelsIcon from "@/app/assets/Property 1=crown 1.svg";
import referralIcon from "@/app/assets/affiliate-marketing 1.svg";
import Line from "@/app/assets/Line.png";
import telegramIcon from "@/app/assets/telegram.png";
import chatIcon from "@/app/assets/chat-icon.png";
import {
  FaHome,
  FaDice,
  FaGamepad,
  FaFish,
  FaFutbol,
  FaCubes,
  FaChartBar,
  FaLanguage,
  FaChevronDown,
} from "react-icons/fa";

// Menu data for the sidebar
const mainMenu = [
  { id: 1, title: "Home", icon: <FaHome />, bgColor: "hover:bg-gray-800", link: "/" },
  { id: 2, title: "Slots", icon: <FaDice />, bgColor: "hover:bg-gray-800", link: "/game_sidebar/slots" },
  { id: 3, title: "Live Casino", icon: <FaGamepad />, bgColor: "hover:bg-gray-800", link: "#" },
];

// Privileges data
const privileges = [
  { id: 1, title: "Quests", icon: questIcon.src, bgColor: "rgb(60, 33, 108)" },
  { id: 2, title: "Reward", icon: rewardIcon.src, bgColor: "rgb(36, 68, 38)" },
  { id: 3, title: "Promo", icon: promoIcon.src, bgColor: "rgb(108, 33, 88)" },
  { id: 4, title: "Levels", icon: levelsIcon.src, bgColor: "rgb(108, 33, 33)" },
  { id: 5, title: "Referral", icon: referralIcon.src, bgColor: "rgb(108, 88, 33)", isFullWidth: true },
];

// Additional menu data
const additionalMenu = [
  { id: 1, title: "Providers", icon: <FaCubes /> },
  { id: 2, title: "RTP Slots", icon: <FaChartBar /> },
  { id: 3, title: "Sports", icon: <FaFutbol /> },
  { id: 4, title: "Fishing", icon: <FaFish /> },
  { id: 5, title: "Virtual", icon: <FaGamepad /> },
];

const Sidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // State to track active menu

  const handleMenuClick = (id: number) => {
    setActiveMenu(id); // Update the active menu state
  };

  return (
    <div className="bg-gray-900 text-white w-64 h-[calc(100vh-64px)] px-4 py-6 fixed top-17 overflow-y-scroll scrollbar-hide z-[9999] shadow-md">
      {/* Main Menu */}
      <div>
        {mainMenu.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <div
              className={`flex items-center space-x-3 py-2 px-4 rounded-lg shadow-md cursor-pointer ${
                activeMenu === item.id ? "bg-yellow-500" : item.bgColor
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              <div className="text-lg text-white">{item.icon}</div>
              <span className="font-medium text-white">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Privileges Section */}
      <div className="mt-6">
        <h3 className="text-sm text-gray-400 font-semibold mb-4">Privileges</h3>
        <div className="grid grid-cols-2 gap-4">
          {privileges.map((item) => (
            <div
              key={item.id}
              className={`relative p-4 rounded-lg text-center cursor-pointer ${
                item.isFullWidth ? "col-span-2" : ""
              }`}
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: item.bgColor,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={item.icon} alt={item.title} className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Menu */}
      <div className="mt-6">
        {additionalMenu.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer ${
              activeMenu === item.id + 3 ? "bg-yellow-500" : "hover:bg-gray-800"
            }`}
            onClick={() => handleMenuClick(item.id + 3)} // Adjust IDs for uniqueness
          >
            <div className="text-lg text-gray-400">{item.icon}</div>
            <span className="font-medium text-gray-400">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Language Option */}
      <div className="mt-6">
        <h3 className="text-sm text-gray-400 font-semibold mb-4">Language Option</h3>
        <div className="flex items-center space-x-3 py-2 px-4 bg-gray-800 rounded-lg cursor-pointer">
          <FaLanguage className="text-gray-400 text-lg" />
          <span>English</span>
          <FaChevronDown className="text-gray-400" />
        </div>

        {/* Line Option */}
        <div className="flex items-center space-x-3 py-2 px-4 bg-gray-800 rounded-lg cursor-pointer mt-4">
          <img src={Line.src} alt="Line" className="h-5 w-5 rounded-full" />
          <span>Line</span>
        </div>
      </div>

      {/* Contact & Social Media Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="text-sm text-gray-400 font-semibold mb-4">Contact & Social Media</h3>
        <div className="flex items-center space-x-4">
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 p-2"
          >
            <img src={Line.src} alt="Line" className="h-6 w-6" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-500 p-2"
          >
            <img src={telegramIcon.src} alt="Telegram" className="h-6 w-6" />
          </a>
          <a href="#" className="rounded-full bg-red-500 p-2">
            <img src={chatIcon.src} alt="Chat" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
