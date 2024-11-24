"use client";

import React from "react";
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

const Sidebar: React.FC = () => {
  return (
    <div className="hidden sm:block bg-gray-900 text-white w-64 h-[calc(100vh-64px)] px-4 py-6 fixed top-17 overflow-y-scroll scrollbar-hide z-50 shadow-md">
      {/* Menu Section */}
      <div>
        {/* Home Menu */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-md cursor-pointer">
            <FaHome className="text-white text-lg" />
            <span className="font-medium text-white">Home</span>
          </div>
        </Link>

        {/* Slots Menu */}
        <Link href="/game_sidebar/slots" passHref>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaDice className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">Slots</span>
          </div>
        </Link>

        {/* Live Casino */}
        <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
          <FaGamepad className="text-gray-400 text-lg" />
          <span className="font-medium text-gray-400">Live Casino</span>
        </div>

        {/* Privileges Section */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-400 font-semibold mb-4">Privileges</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Quests */}
            <div
              className="relative p-4 rounded-lg text-center cursor-pointer"
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: "rgb(60, 33, 108)", // Purple background
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={questIcon.src} alt="Quests" className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">Quests</span>
            </div>

            {/* Reward */}
            <div
              className="relative p-4 rounded-lg text-center cursor-pointer"
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: "rgb(36, 68, 38)", // Green background
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={rewardIcon.src} alt="Reward" className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">Reward</span>
            </div>

            {/* Promo */}
            <div
              className="relative p-4 rounded-lg text-center cursor-pointer"
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: "rgb(108, 33, 88)", // Pink background
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={promoIcon.src} alt="Promo" className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">Promo</span>
            </div>

            {/* Levels */}
            <div
              className="relative p-4 rounded-lg text-center cursor-pointer"
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: "rgb(108, 33, 33)", // Red background
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={levelsIcon.src} alt="Levels" className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">Levels</span>
            </div>

            {/* Referral */}
            <div
              className="col-span-2 relative p-4 rounded-lg text-center cursor-pointer"
              style={{
                backgroundImage: `url(${privilegeTexture.src})`,
                backgroundColor: "rgb(108, 88, 33)", // Yellow background
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img src={referralIcon.src} alt="Referral" className="h-8 w-8 mx-auto mb-2" />
              <span className="font-medium text-sm text-white">Referral</span>
            </div>
          </div>
        </div>

        {/* Additional Menu */}
        <div className="mt-6">
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaCubes className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">Providers</span>
          </div>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaChartBar className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">RTP Slots</span>
          </div>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaFutbol className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">Sports</span>
          </div>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaFish className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">Fishing</span>
          </div>
          <div className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaGamepad className="text-gray-400 text-lg" />
            <span className="font-medium text-gray-400">Virtual</span>
          </div>
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
    </div>
  );
};

export default Sidebar;
