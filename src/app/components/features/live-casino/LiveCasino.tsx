"use client";

import React from "react";
import { useTranslation } from "react-i18next";


const LiveCasino: React.FC = () => {

    const { t } = useTranslation();
    const liveCasinoGames = [
        {
            title: t("liveCasino.games.pragmaticLive"),
            provider: t("liveCasino.providers.pragmaticPlay"),
            image: "/img-live-casino/1.png",
        },
        {
            title: t("liveCasino.games.baccaratC08"),
            provider: t("liveCasino.providers.sa"),
            image: "/img-live-casino/2.jpg",
        },
        {
            title: t("liveCasino.games.baccarat"),
            provider: t("liveCasino.providers.aeSexy"),
            image: "/img-live-casino/3.jpg",
        },
        {
            title: t("liveCasino.games.dreamGaming"),
            provider: t("liveCasino.providers.dreamGaming"),
            image: "/img-live-casino/4.png",
        },
        {
            title: t("liveCasino.games.topGamesLobby"),
            provider: t("liveCasino.providers.evolutionGaming"),
            image: "/img-live-casino/5.png",
        },
        {
            title: t("liveCasino.games.liveCasino"),
            provider: t("liveCasino.providers.weGaming"),
            image: "/img-live-casino/6.png",
        },
    ];
    return (
        <section className="pt-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-4">
                <div className="flex items-center space-x-2">
                    <span className="text-blue-400 text-xl">🎲</span>
                    <h2 className="text-white text-xl font-bold"> { t("liveCasino.title") } </h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
                    <span>{ t("liveCasino.seeAll") }</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="md:hidden flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
                {liveCasinoGames.map((game, index) => (
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
                {liveCasinoGames.map((game, index) => (
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

export default LiveCasino;
