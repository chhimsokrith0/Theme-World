"use client";

import React from "react";

const liveCasinoGames = [
    {
        title: "Pragmatic Live",
        provider: "PragmaticPlay",
        image: "/img-live-casino/1.png",
    },
    {
        title: "Baccarat C08",
        provider: "SA",
        image: "/img-live-casino/2.jpg",
    },
    {
        title: "Baccarat",
        provider: "Ae Sexy",
        image: "/img-live-casino/3.jpg",
    },
    {
        title: "DreamGaming",
        provider: "DreamGaming",
        image: "/img-live-casino/4.png",
    },
    {
        title: "Top Games Lobby",
        provider: "Evolution Gaming",
        image: "/img-live-casino/5.png",
    },
    {
        title: "Live Casino",
        provider: "We Gaming",
        image: "/img-live-casino/6.png",
    },
];

const LiveCasino: React.FC = () => {
    return (
        <section className="px-8 py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <span className="text-blue-400 text-xl">🎲</span>
                    <h2 className="text-white text-xl font-bold">Live Casino</h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                    <span>See All</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {liveCasinoGames.map((game, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all"
                    >
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-white text-sm font-semibold truncate">
                                {game.title}
                            </h3>
                            <p className="text-gray-400 text-xs">{game.provider}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiveCasino;
