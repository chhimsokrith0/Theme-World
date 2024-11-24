
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
            <div className="px-6">
                {/* Carousel Section */}
                <section className="mb-6">
                    <Carousel />
                </section>

                {/* Navigation Bar Section */}
                <section className="max-w-[1200px] mx-auto p-4 border-t border-gray-700">
                    <Navbar />
                </section>

                {/* PopularGames Section */}
                <section className="max-w-[1200px] mx-auto p-4 border-t border-gray-700">
                    <PopularGames />
                </section>

                {/* NewGames Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <NewGames />
                </section>

                {/* Promotions Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <Promotions />
                </section>

                {/* LiveCasino Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <LiveCasino />
                </section>

                {/* GameProviders Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <GameProviders />
                </section>

                {/* JackpotBanner Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <JackpotBanner />
                </section>

                {/* AllGames Section */}
                <section className="max-w-[1200px] mx-auto p-4">
                    <AllGames />
                </section>
            </div>
        </>
    );
};

export default HomePage;
