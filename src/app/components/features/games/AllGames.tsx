"use client";

import React from "react";

const games = [
    { title: "Ninja Raccoon Frenzy", provider: "PGSoft", image: "/img-allgames/1.png" },
    { title: "Treasures of Aztec", provider: "PGSoft", image: "/img-allgames/2.png" },
    { title: "Mahjong Ways 2", provider: "PGSoft", image: "/img-allgames/3.png" },
    { title: "Lucky Neko", provider: "PGSoft", image: "/img-allgames/4.png" },
    { title: "Mahjong Ways", provider: "PGSoft", image: "/img-allgames/5.png" },
    { title: "Wild Bounty Showdown", provider: "PGSoft", image: "/img-allgames/6.png" },
    { title: "Ways of the Qilin", provider: "PGSoft", image: "/img-allgames/7.png" },
    { title: "Wild Bandito", provider: "PGSoft", image: "/img-allgames/8.png" },
    { title: "Fortune Rabbit", provider: "PGSoft", image: "/img-allgames/9.png" },
    { title: "Caishen Wins", provider: "PGSoft", image: "/img-allgames/10.png" },
    { title: "Fortune Ox", provider: "PGSoft", image: "/img-allgames/11.png" },
    { title: "Ganesha Fortune", provider: "PGSoft", image: "/img-allgames/12.png" },
];

const AllGames: React.FC = () => {
    return (
        <section className="px-8 py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <span className="text-pink-400 text-2xl">🔲</span>
                    <h2 className="text-white text-2xl font-bold">All Games</h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                    <span>See All</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
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
                            <h3 className="text-white text-sm font-bold truncate">{game.title}</h3>
                            <p className="text-gray-400 text-xs">{game.provider}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllGames;
