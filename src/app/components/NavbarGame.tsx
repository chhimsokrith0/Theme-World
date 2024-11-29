"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import { FiSettings } from "react-icons/fi";
import FilterModal from "./FilterModal";
import { useTranslation } from "react-i18next";

const NavbarGame: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("All Games");

  const toggleFilterModal = () => setIsFilterModalOpen(!isFilterModalOpen);

  const handleMenuClick = (menu: string, route: string) => {
    setActiveMenu(menu);
    router.push(route);
  };

  const menuItems = [
    { label: t("navbar.demo"), icon: <MdPlayCircleFilled />, path: "/game_navbar/demo" },
    { label: t("navbar.allGames"), icon: <FaDice />, path: "/game_navbar/allgame" },
    { label: t("navbar.popularGames"), icon: <FaCrown />, path: "/game_navbar/PopularGames" },
    { label: t("navbar.newGames"), icon: <FaStar />, path: "/game_navbar/newGame" },
    { label: t("navbar.cashDrop"), icon: <FaMoneyBillWave />, path: "/game_navbar/CashDrop" },
    { label: t("navbar.jackpots"), icon: <FaTrophy />, path: "/game_navbar/Jackpots" },
    { label: t("navbar.megaways"), icon: <span className="text-lg font-bold">M</span>, path: "/game_navbar/Megaways" },
    { label: t("navbar.tableGames"), icon: <FaTableTennis />, path: "/game_navbar/TableGames" },
  ];

  return (
    <>
      <div className="px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-2 flex items-center space-x-2">
          <Link href="/" passHref>
            <span className="hover:text-white cursor-pointer">Home</span>
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-white">{activeMenu}</span>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white">Games</h1>
          <p className="text-sm text-gray-400">221 Games</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Find your game"
            className="w-full px-4 py-3 rounded-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
            <BiSearch className="text-xl text-gray-400 cursor-pointer hover:text-white" />
            <FiSettings
              onClick={toggleFilterModal}
              className="text-xl text-gray-400 cursor-pointer hover:text-white"
            />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between bg-[#020617] px-6 py-4 rounded-lg shadow-lg text-gray-300">
          <div className="flex items-center space-x-6">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleMenuClick(item.label, item.path)}
                className={`flex flex-col items-center text-center cursor-pointer ${
                  activeMenu === item.label ? "text-white" : "hover:text-white"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex flex-col bg-[#020617] text-gray-300">
          <div className="flex overflow-x-auto space-x-6 px-4 py-3 scrollbar-hide">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleMenuClick(item.label, item.path)}
                className={`flex flex-col items-center text-center cursor-pointer ${
                  activeMenu === item.label ? "text-white" : "hover:text-white"
                }`}
              >
                <div className="mb-1 text-xl">{item.icon}</div>
                <span className="text-xs font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} />
    </>
  );
};

export default NavbarGame;
