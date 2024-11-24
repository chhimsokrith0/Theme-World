"use client";

import React from "react";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const newGame: React.FC = () => {
    const demoGames = [
        { title: "Ways of the Qilin", provider: "PGSoft", image: "/img-newgames/1.png" },
        { title: "Anubis Wrath", provider: "PGSoft", image: "/img-newgames/2.png" },
    ];

    return (
        <div className="px-6 py-4">
            <div className="max-w-[1200px] mx-auto p-4">
                {/* Filters */}
                <NavbarGame />
                {/* Games Grid */}
                <ClientLoaderWrapper>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {demoGames.map((game, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                            >
                                <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
                                <div className="p-3">
                                    <h3 className="text-sm text-white truncate">{game.title}</h3>
                                    <p className="text-xs text-gray-400">{game.provider}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ClientLoaderWrapper>

                <div className="flex justify-center mt-6">
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-medium shadow-md hover:from-yellow-500 hover:to-yellow-600 transition"
                    >
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default newGame;
