"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const NavbarGame: React.FC = () => {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/" passHref>
          <span className="hover:text-white cursor-pointer">Home</span>
        </Link>{" "}
        / <span className="text-white">Games</span>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Games</h1>
        <p className="text-sm text-gray-400">216 Games</p>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#020617] px-8 py-4 rounded-lg shadow-lg text-gray-300">
        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {/* Demo */}
          <div
            onClick={() => router.push("/game_navbar/demo")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <MdPlayCircleFilled className="text-xl text-green-400" />
            <span className="text-sm font-semibold">Demo</span>
          </div>

          {/* All Games */}
          <div 
          onClick={() => router.push("/game_navbar/allgame")}
          className="flex flex-col items-center text-center cursor-pointer text-white">
            <FaDice className="text-xl text-purple-500" />
            <span className="text-sm font-bold">All Games</span>
          </div>

          {/* Popular Games */}
          <div
            onClick={() => router.push("/game_navbar/PopularGames")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <FaCrown className="text-xl text-yellow-500" />
            <span className="text-sm">Popular Games</span>
          </div>

          {/* New Games */}
          <div
            onClick={() => router.push("/game_navbar/newGame")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <FaStar className="text-xl text-blue-500" />
            <span className="text-sm">New Games</span>
          </div>

          {/* Cash Drop */}
          <div
            onClick={() => router.push("/game_navbar/CashDrop")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <FaMoneyBillWave className="text-xl text-green-500" />
            <span className="text-sm">Cash Drop</span>
          </div>

          {/* Jackpots */}
          <div
            onClick={() => router.push("/game_navbar/Jackpots")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <FaTrophy className="text-xl text-orange-500" />
            <span className="text-sm">Jackpots</span>
          </div>

          {/* Megaways */}
          <div
            onClick={() => router.push("/game_navbar/Megaways")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <span className="text-lg font-bold text-purple-500">M</span>
            <span className="text-sm">Megaways</span>
          </div>

          {/* Table Games */}
          <div
            onClick={() => router.push("/game_navbar/TableGames")}
            className="flex flex-col items-center text-center cursor-pointer hover:text-white"
          >
            <FaTableTennis className="text-xl text-pink-500" />
            <span className="text-sm">Table Games</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-gray-800 text-gray-400 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Find your game"
            className="bg-transparent text-sm outline-none"
          />
          <BiSearch className="text-lg cursor-pointer hover:text-white" />
          <FiSettings onClick={toggleModal} className="text-lg cursor-pointer hover:text-white" />
        </div>
      </div>
      {/* Filter Modal */}
      <FilterModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
    
  );
};

export default NavbarGame;
