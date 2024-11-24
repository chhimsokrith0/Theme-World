"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const DemoPage: React.FC = () => {
  const allGames = [
    { title: "Ways of the Qilin", provider: "PGSoft", image: "/img-allgames/1.png" },
    { title: "Anubis Wrath", provider: "PGSoft", image: "/img-allgames/2.png" },
    { title: "Fortune Dragon", provider: "PGSoft", image: "/img-allgames/3.png" },
    { title: "Tsar Treasures", provider: "PGSoft", image: "/img-allgames/4.png" },
    { title: "Chicky Run", provider: "PGSoft", image: "/img-allgames/5.png" },
    { title: "Three Crazy Piggies", provider: "PGSoft", image: "/img-allgames/6.png" },
    { title: "Gemstones Gold", provider: "PGSoft", image: "/img-allgames/7.png" },
    { title: "Zombie Outbreak", provider: "PGSoft", image: "/img-allgames/8.png" },
    { title: "Oishi Delights", provider: "PGSoft", image: "/img-allgames/9.png" },
    { title: "Mystic Potion", provider: "PGSoft", image: "/img-allgames/10.png" },
    { title: "Museum Mystery", provider: "PGSoft", image: "/img-allgames/11.png" },
    { title: "Dragon Hatch 2", provider: "PGSoft", image: "/img-allgames/12.png" },
    { title: "Haunted Harbor", provider: "Habanero", image: "/img-allgames/13.png" },
    { title: "Glory of Rome", provider: "Habanero", image: "/img-allgames/14.png" },
    { title: "Gold Rush", provider: "Pegasus", image: "/img-allgames/15.png" },
    { title: "Train Robber", provider: "Pegasus", image: "/img-allgames/16.png" },
    { title: "Tianhou Mazu", provider: "Pegasus", image: "/img-allgames/17.png" },
    { title: "Blossom of Fortune", provider: "Pegasus", image: "/img-allgames/18.png" },
  ];

  const [visibleGames, setVisibleGames] = useState(12); // Number of games to show initially

  const loadMoreGames = () => {
    setVisibleGames((prev) => prev + 6); // Load 6 more games on each click
  };

  return (
    <div className="px-6 py-4">
      <div className="max-w-[1200px] mx-auto p-4">

        {/* Filters */}
        <NavbarGame />

        {/* Games Grid */}
        <ClientLoaderWrapper>
          {allGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allGames.slice(0, visibleGames).map((game, index) => (
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

        {/* Load More Button */}
        {visibleGames < allGames.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMoreGames}
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-medium shadow-md hover:from-yellow-500 hover:to-yellow-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoPage;
