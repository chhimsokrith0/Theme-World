"use client";

import React from "react";

const AllGame: React.FC = () => {
  const demoGames = [
    { title: "Ways of the Qilin", provider: "PGSoft", image: "/games/ways-of-the-qilin.jpg" },
    { title: "Anubis Wrath", provider: "PGSoft", image: "/games/anubis-wrath.jpg" },
    { title: "Fortune Dragon", provider: "PGSoft", image: "/games/fortune-dragon.jpg" },
    { title: "Tsar Treasures", provider: "PGSoft", image: "/games/tsar-treasures.jpg" },
    { title: "Chicky Run", provider: "PGSoft", image: "/games/chicky-run.jpg" },
    { title: "Three Crazy Piggies", provider: "PGSoft", image: "/games/three-crazy-piggies.jpg" },
    { title: "Gemstones Gold", provider: "PGSoft", image: "/games/gemstones-gold.jpg" },
    { title: "Zombie Outbreak", provider: "PGSoft", image: "/games/zombie-outbreak.jpg" },
    { title: "Oishi Delights", provider: "PGSoft", image: "/games/oishi-delights.jpg" },
    { title: "Mystic Potion", provider: "PGSoft", image: "/games/mystic-potion.jpg" },
    { title: "Museum Mystery", provider: "PGSoft", image: "/games/museum-mystery.jpg" },
    { title: "Dragon Hatch 2", provider: "PGSoft", image: "/games/dragon-hatch-2.jpg" },
  ];

  return (
    <div className="px-6 py-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        Home / <span className="text-white">Games</span>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Games</h1>
        <p className="text-sm text-gray-400">216 Games</p>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-6 mb-6">
        <button className="text-green-400 text-sm flex items-center space-x-1">
          <span className="text-lg">●</span>
          <span>Demo</span>
        </button>
        <button className="text-gray-400 hover:text-white text-sm">All Games</button>
        <button className="text-gray-400 hover:text-white text-sm">Popular Games</button>
        <button className="text-gray-400 hover:text-white text-sm">New Games</button>
        <button className="text-gray-400 hover:text-white text-sm">Cash Drop</button>
        <button className="text-gray-400 hover:text-white text-sm">Jackpots</button>
        <button className="text-gray-400 hover:text-white text-sm">Megaways</button>
        <button className="text-gray-400 hover:text-white text-sm">Table Games</button>
      </div>

      {/* Games Grid */}
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
    </div>
  );
};

export default AllGame;
