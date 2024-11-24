"use client";

import React from "react";

const popularGames = [
    { title: "Jewel Mania", provider: "Mancala", image: "/img-popular/1.png" },
    { title: "Hot Fruits on Fire", provider: "Mancala", image: "/img-popular/2.png" },
    { title: "#BarsAndBells", provider: "Mancala", image: "/img-popular/3.png" },
    { title: "Reel Reel Hot", provider: "Mancala", image: "/img-popular/4.png" },
    { title: "Spirit of the Lake", provider: "Mancala", image: "/img-popular/5.png" },
    { title: "The Twin Wins Mystery", provider: "Mancala", image: "/img-popular/6.png" },
];

const PopularGames: React.FC = () => {
    return (
        <section className="px-6 py-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-xl">🔥</span>
                    <h2 className="text-white text-xl font-bold">Popular Games</h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                    <span>See All</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {popularGames.map((game, index) => (
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

export default PopularGames;
