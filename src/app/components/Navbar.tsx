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
        // Add more providers here...
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
            <div className="flex items-center justify-between px-12 py-4 bg-[#020617] text-gray-300 shadow-lg">
                {/* Navigation Items */}
                <div className="flex items-center space-x-8">
                    {/* Demo */}
                    <div
                        onClick={() => router.push("/game_navbar/demo")}
                        className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <MdPlayCircleFilled className="text-xl" />
                        <span className="text-sm">Demo</span>
                    </div>

                    {/* All Games */}
                    <div className="flex flex-col items-center text-center cursor-pointer text-white">
                        <FaDice className="text-xl text-red-500" />
                        <span className="text-sm font-bold">All Games</span>
                    </div>

                    {/* Popular Games */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <FaCrown className="text-xl" />
                        <span className="text-sm">Popular Games</span>
                    </div>

                    {/* New Games */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <FaStar className="text-xl" />
                        <span className="text-sm">New Games</span>
                    </div>

                    {/* Cash Drop */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <FaMoneyBillWave className="text-xl" />
                        <span className="text-sm">Cash Drop</span>
                    </div>

                    {/* Jackpots */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <FaTrophy className="text-xl" />
                        <span className="text-sm">Jackpots</span>
                    </div>

                    {/* Megaways */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <span className="text-lg font-bold">M</span>
                        <span className="text-sm">Megaways</span>
                    </div>

                    {/* Table Games */}
                    <div className="flex flex-col items-center text-center cursor-pointer hover:text-white">
                        <FaTableTennis className="text-xl" />
                        <span className="text-sm">Table Games</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    {/* Providers Dropdown */}
                    <button
                        onClick={() => setIsProviderModalOpen(true)}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:text-white transition"
                    >
                        <span>Providers</span>
                        <span>▼</span>
                    </button>

                    {/* Search Icon */}
                    <div
                        onClick={() => setIsSearchModalOpen(true)}
                        className="cursor-pointer hover:text-white"
                    >
                        <BiSearch className="text-2xl" />
                    </div>
                </div>
            </div>

            {/* Provider Modal */}
            <ProviderModal
                providers={providers}
                isOpen={isProviderModalOpen}
                onClose={() => setIsProviderModalOpen(false)}
            />

            {/* Search Modal */}
            <SearchModal
                games={games}
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
