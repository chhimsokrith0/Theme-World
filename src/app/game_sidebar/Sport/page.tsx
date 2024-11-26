"use client";

import React from "react";
import Image from "next/image";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const LiveCasino: React.FC = () => {
    

    const liveCasinoGames = [
        {
            title: "SportsBook",
            provider: "Sbobet",
            image: "/img-sport/1.png",
        },
        {
            title: "Sport",
            provider: "We Gaming",
            image: "/img-sport/2.png",
        },
    ];
    return (
        <div className="px-6 py-4">
            <div className="max-w-[1200px] mx-auto p-4">
                {/* Filters */}
                <NavbarGame />

                {/* Games Grid */}
                <ClientLoaderWrapper>
                    {liveCasinoGames.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {liveCasinoGames.map((game, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
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

                
            </div>
        </div>
    );
};

export default LiveCasino;
