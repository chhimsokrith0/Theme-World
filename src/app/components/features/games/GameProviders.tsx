"use client";

import React from "react";

const gameProviders = [
  {
    title: "Pocket Games Soft",
    provider: "PG",
    image: "/img-gameprovider/1.webp",
  },
  {
    title: "Joker",
    provider: "Joker",
    image: "/img-gameprovider/2.webp",
  },
  {
    title: "JILI",
    provider: "JILI",
    image: "/img-gameprovider/3.webp",
  },
  {
    title: "Pragmatic Play",
    provider: "Pragmatic Play",
    image: "/img-gameprovider/4.webp",
  },
];

const GameProviders: React.FC = () => {
  return (
    <section className="px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl">📚</span>
          <h2 className="text-white text-2xl font-bold">Game Providers</h2>
        </div>
        <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
          <span>See All</span>
          <span>➔</span>
        </button>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {gameProviders.map((provider, index) => (
          <div
            key={index}
            className="min-w-[300px] h-48 rounded-lg overflow-hidden hover:scale-105 transition transform shadow-lg"
            style={{
              backgroundImage: `url(${provider.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              <div>
                <h3 className="text-white text-lg font-bold">{provider.provider}</h3>
                <p className="text-gray-200 text-sm">{provider.title}</p>
              </div>
              <button className="px-5 py-2 w-24 text-sm font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-400 flex items-center space-x-2 shadow-md">
                <span className="text-lg">🎮</span>
                <span>Play</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameProviders;
