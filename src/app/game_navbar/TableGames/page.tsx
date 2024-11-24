"use client";

import React from "react";
import NavbarGame from "@/app/components/NavbarGame";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper";

const TableGames: React.FC = () => {
  // Simulated empty games array
  const demoGames: Array<{ title: string; provider: string; image: string }> = [];

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
                  <img
                    src={game.image}
                    alt={game.title}
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
              <div className="w-20 h-20">
                <img
                  src="/nothing_box.webp" // Update this path to your placeholder icon
                  alt="Empty Box"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-lg">There's nothing here yet!</p>
            </div>
          )}
        </ClientLoaderWrapper>

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

export default TableGames;
