"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaDice,
  FaCrown,
  FaStar,
  FaMoneyBillWave,
  FaTrophy,
  FaTableTennis,
} from "react-icons/fa";
import { MdPlayCircleFilled } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import ProviderModal from "@/app/components/ProviderModal";
import SearchModal from "@/app/components/SearchModal";

const Navbar: React.FC = () => {
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const providers = [
    { name: "PGSoft", logo: "/logos/pgsoft.png" },
    { name: "Joker", logo: "/logos/joker.png" },
    { name: "JILI", logo: "/logos/jili.png" },
    { name: "PragmaticPlay", logo: "/logos/pragmatic.png" },
    { name: "Habanero", logo: "/logos/habanero.png" },
    { name: "Evolution Gaming", logo: "/logos/evolution.png" },
  ];
  const games = [
    { title: "Jewel Mania", provider: "Mancala", image: "/img-search/1.png" },
    { title: "Hot Fruits on Fire", provider: "Mancala", image: "/img-search/2.png" },
    { title: "#BarsAndBells", provider: "Mancala", image: "/img-search/3.png" },
    { title: "Reel Reel Hot", provider: "Mancala", image: "/img-search/4.png" },
    { title: "Spirit of the Lake", provider: "Mancala", image: "/img-search/5.png" },
    { title: "The Twin Wins Mystery", provider: "Mancala", image: "/img-search/6.png" },
  ];

  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#020617] text-gray-300 shadow-lg">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center px-6 py-3">
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <div
              onClick={() => router.push("/game_navbar/demo")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <MdPlayCircleFilled className="text-xl" />
              <span className="text-sm">Demo</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/allgame")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white text-white"
            >
              <FaDice className="text-xl text-red-500" />
              <span className="text-sm font-bold">All Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/PopularGames")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <FaCrown className="text-xl" />
              <span className="text-sm">Popular Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/newGame")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <FaStar className="text-xl" />
              <span className="text-sm">New Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/CashDrop")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <FaMoneyBillWave className="text-xl" />
              <span className="text-sm">Cash Drop</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/Jackpots")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <FaTrophy className="text-xl" />
              <span className="text-sm">Jackpots</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/Megaways")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <span className="text-lg font-bold">M</span>
              <span className="text-sm">Megaways</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/TableGames")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white"
            >
              <FaTableTennis className="text-xl" />
              <span className="text-sm">Table Games</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsProviderModalOpen(true)}
              className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:text-white transition"
            >
              Providers
            </button>
            <div
              onClick={() => setIsSearchModalOpen(true)}
              className="cursor-pointer hover:text-white"
            >
              <BiSearch className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex flex-col bg-[#020617] text-gray-300">
          <div className="flex overflow-x-auto space-x-4 px-4 py-3 scrollbar-hide">
            <div
              onClick={() => router.push("/game_navbar/demo")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <MdPlayCircleFilled className="text-xl" />
              <span className="text-sm">Demo</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/allgame")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px] text-white"
            >
              <FaDice className="text-xl text-red-500" />
              <span className="text-sm font-bold">All Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/PopularGames")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <FaCrown className="text-xl" />
              <span className="text-sm">Popular Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/newGame")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <FaStar className="text-xl" />
              <span className="text-sm">New Games</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/CashDrop")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <FaMoneyBillWave className="text-xl" />
              <span className="text-sm">Cash Drop</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/Jackpots")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <FaTrophy className="text-xl" />
              <span className="text-sm">Jackpots</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/Megaways")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <span className="text-lg font-bold">M</span>
              <span className="text-sm">Megaways</span>
            </div>
            <div
              onClick={() => router.push("/game_navbar/TableGames")}
              className="flex flex-col items-center text-center cursor-pointer hover:text-white min-w-[80px]"
            >
              <FaTableTennis className="text-xl" />
              <span className="text-sm">Table Games</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProviderModal
        providers={providers}
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
      />
      <SearchModal
        games={games}
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
