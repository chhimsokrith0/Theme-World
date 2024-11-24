"use client";

import React from "react";

const newGames = [
    {
        title: "Spirit of the Lake",
        provider: "Mancala",
        image: "/img-newgames/1.png",
    },
    {
        title: "The Twin Wins Mystery",
        provider: "Mancala",
        image: "/img-newgames/2.png",
    },
    {
        title: "Spirit of the Lake",
        provider: "Mancala",
        image: "/img-newgames/1.png",
    },

];

const NewGames: React.FC = () => {
    return (
        <section className="pt-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-4">
                <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-xl">⚡</span>
                    <h2 className="text-white text-2xl font-bold">New Games</h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
                    <span>See All</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="md:hidden flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
                {newGames.map((game, index) => (
                    <div
                        key={index}
                        className="min-w-[140px] bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all"
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

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-4 px-4">
                {newGames.map((game, index) => (
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

export default NewGames;
