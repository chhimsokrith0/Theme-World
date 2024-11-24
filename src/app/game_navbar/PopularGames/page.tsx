"use client";

import React from "react";
import Image from "next/image";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const PopularGames: React.FC = () => {
  const demoGames = [
    { title: "Ways of the Qilin", provider: "PGSoft", image: "/img-popular/1.png" },
    { title: "Anubis Wrath", provider: "PGSoft", image: "/img-popular/2.png" },
    { title: "Fortune Dragon", provider: "PGSoft", image: "/img-popular/3.png" },
    { title: "Tsar Treasures", provider: "PGSoft", image: "/img-popular/4.png" },
    { title: "Chicky Run", provider: "PGSoft", image: "/img-popular/5.png" },
    { title: "Three Crazy Piggies", provider: "PGSoft", image: "/img-popular/6.png" },
    { title: "Gemstones Gold", provider: "PGSoft", image: "/img-popular/7.png" },
    { title: "Zombie Outbreak", provider: "PGSoft", image: "/img-popular/8.png" },
    { title: "Oishi Delights", provider: "PGSoft", image: "/img-popular/9.png" },
    { title: "Mystic Potion", provider: "PGSoft", image: "/img-popular/10.png" },
    { title: "Museum Mystery", provider: "PGSoft", image: "/img-popular/11.png" },
    { title: "Dragon Hatch 2", provider: "PGSoft", image: "/img-popular/12.png" },
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
              <p className="text-lg">No popular games available</p>
            </div>
          )}
        </ClientLoaderWrapper>

        {/* Load More Button */}
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

export default PopularGames;
