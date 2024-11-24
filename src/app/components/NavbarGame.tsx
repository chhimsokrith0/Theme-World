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

const NavbarGame: React.FC = () => {

    const router = useRouter();
    return (
        <>
            <div className="text-sm text-gray-400 mb-4">
                <Link href="/" passHref>Home / </Link>
                <span className="text-white">Games</span>
            </div>

            {/* Title */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-white">Games</h1>
                <p className="text-sm text-gray-400">18 Games</p>
            </div>
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
            </div>
        </>
    );
};

export default NavbarGame;
