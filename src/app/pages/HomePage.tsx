"use client";

import React from "react";


import Carousel from "@/app/components/Carousel";
import Navbar from "@/app/components/Navbar";
import PopularGames from "@/app/components/features/games/PopularGames";
import NewGames from "@/app/components/features/games/NewGames";
import Promotions from "@/app/components/features/promotions/Promotions";
import LiveCasino from "@/app/components/features/live-casino/LiveCasino";
import GameProviders from "@/app/components/features/games/GameProviders";
import JackpotBanner from "@/app/components/features/jackpots/JackpotBanner";
import AllGames from "@/app/components/features/games/AllGames";



const HomePage: React.FC = () => {


  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Carousel Section */}
        <section className="mb-6">
          <Carousel />
        </section>

        {/* Navigation Bar Section */}
        <section className="max-w-[1200px] mx-auto border-t border-gray-700">
          <Navbar />
        </section>

        {/* Popular Games Section */}
        <section className="max-w-[1200px] mx-auto border-t border-gray-700">
          
          <PopularGames />
        </section>

        {/* New Games Section */}
        <section className="max-w-[1200px] mx-auto">
         
          <NewGames />
        </section>

        {/* Promotions Section */}
        <section className="max-w-[1200px] mx-auto">
          <Promotions />
        </section>

        {/* Live Casino Section */}
        <section className="max-w-[1200px] mx-auto">
          <LiveCasino />
        </section>

        {/* Game Providers Section */}
        <section className="max-w-[1200px] mx-auto">
          <GameProviders />
        </section>

        {/* Jackpot Banner Section */}
        <section className="max-w-[1200px] mx-auto">
          <JackpotBanner />
        </section>

        {/* All Games Section */}
        <section className="max-w-[1200px] mx-auto">
          <AllGames />
        </section>
      </div>
    </>
  );
};

export default HomePage;



