"use client";

import React from "react";
import Image from "next/image";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const RtpSlots: React.FC = () => {
    const demoGames = [
        {
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "/img-allgames/1.png",
            rtp: "46.16%",
            trend: "down",
        },
        {
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "/img-allgames/2.png",
            rtp: "42.4%",
            trend: "down",
        },
        {
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "/img-allgames/3.png",
            rtp: "18.49%",
            trend: "down",
        },
        {
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "/img-allgames/4.png",
            rtp: "71.16%",
            trend: "up",
        },
        {
            title: "Mahjong Ways",
            provider: "PGSoft",
            image: "/img-allgames/5.png",
            rtp: "35.83%",
            trend: "down",
        },
        {
            title: "Wild Bounty Showdown",
            provider: "PGSoft",
            image: "/img-allgames/6.png",
            rtp: "62.71%",
            trend: "up",
        },


        {
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "/img-allgames/7.png",
            rtp: "46.16%",
            trend: "down",
        },
        {
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "/img-allgames/8.png",
            rtp: "42.4%",
            trend: "down",
        },
        {
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "/img-allgames/9.png",
            rtp: "18.49%",
            trend: "down",
        },
        {
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "/img-allgames/10.png",
            rtp: "71.16%",
            trend: "up",
        },
        {
            title: "Mahjong Ways",
            provider: "PGSoft",
            image: "/img-allgames/11.png",
            rtp: "35.83%",
            trend: "down",
        },
        {
            title: "Wild Bounty Showdown",
            provider: "PGSoft",
            image: "/img-allgames/12.png",
            rtp: "62.71%",
            trend: "up",
        },


        {
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "/img-allgames/26.png",
            rtp: "46.16%",
            trend: "down",
        },
        {
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "/img-allgames/27.png",
            rtp: "42.4%",
            trend: "down",
        },
        {
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "/img-allgames/28.png",
            rtp: "18.49%",
            trend: "down",
        },
        {
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "/img-allgames/29.png",
            rtp: "71.16%",
            trend: "up",
        },
        {
            title: "Mahjong Ways",
            provider: "PGSoft",
            image: "/img-allgames/30.png",
            rtp: "95.83%",
            trend: "up",
        },
        {
            title: "Wild Bounty Showdown",
            provider: "PGSoft",
            image: "/img-allgames/31.png",
            rtp: "62.71%",
            trend: "up",
        },


        {
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "/img-allgames/32.png",
            rtp: "46.16%",
            trend: "down",
        },
        {
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "/img-allgames/33.png",
            rtp: "42.4%",
            trend: "down",
        },
        {
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "/img-allgames/34.png",
            rtp: "18.49%",
            trend: "down",
        },
        {
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "/img-allgames/35.png",
            rtp: "71.16%",
            trend: "up",
        },
        {
            title: "Mahjong Ways",
            provider: "PGSoft",
            image: "/img-allgames/36.png",
            rtp: "35.83%",
            trend: "down",
        },
        {
            title: "Wild Bounty Showdown",
            provider: "PGSoft",
            image: "/img-allgames/37.png",
            rtp: "62.71%",
            trend: "up",
        },
    ];

    return (
        <div className="px-6 py-4">
            <div className="max-w-[1200px] mx-auto p-4">
                {/* Filters */}
                <NavbarGame />

                {/* Games Grid */}
                <ClientLoaderWrapper>
                    {demoGames.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {demoGames.map((game, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
                                >
                                    <Image
                                        src={game.image}
                                        alt={game.title}
                                        width={160}
                                        height={160}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-sm text-white truncate">{game.title}</h3>
                                        <p className="text-xs text-gray-400">{game.provider}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span
                                                className={`text-xs font-bold px-2 py-1 rounded-full ${game.trend === "up"
                                                    ? "bg-green-600 text-white"
                                                    : "bg-yellow-500 text-black"
                                                    }`}
                                            >
                                                {game.rtp}
                                            </span>
                                            <span
                                                className={`text-xs font-bold ${game.trend === "up" ? "text-green-500" : "text-yellow-500"
                                                    }`}
                                            >
                                                {game.trend === "up" ? "⬆️" : "⬇️"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <p className="text-lg">No games available</p>
                        </div>
                    )}
                </ClientLoaderWrapper>

                {demoGames.length > 0 && (
                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-medium shadow-md hover:from-yellow-500 hover:to-yellow-600 transition">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RtpSlots;
