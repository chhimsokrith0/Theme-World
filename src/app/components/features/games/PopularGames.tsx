"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const PopularGames: React.FC = () => {

    const { t } = useTranslation();


    const popularGames = [
        { title: t("popularGames.games.jewelMania"), provider: t("popularGames.provider"), image: "/img-popular/1.png" },
        { title: t("popularGames.games.hotFruitsOnFire"), provider: t("popularGames.provider"), image: "/img-popular/2.png" },
        { title: t("popularGames.games.barsAndBells"), provider: t("popularGames.provider"), image: "/img-popular/3.png" },
        { title: t("popularGames.games.reelReelHot"), provider: t("popularGames.provider"), image: "/img-popular/4.png" },
        { title: t("popularGames.games.spiritOfTheLake"), provider: t("popularGames.provider"), image: "/img-popular/5.png" },
        { title: t("popularGames.games.twinWinsMystery"), provider: t("popularGames.provider"), image: "/img-popular/6.png" },
    ];



    return (
        <section className="pt-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-4">
                <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-xl">🔥</span>
                    <h2 className="text-white text-xl font-bold"> {t("popularGames.title")} </h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
                    <span> {t("popularGames.seeAll")} </span>
                    <span>➔</span>
                </button>
            </div>

            {/* Mobile Scrollable Layout */}
            <div className="md:hidden flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
                {popularGames.map((game, index) => (
                    <div
                        key={index}
                        className="min-w-[140px] bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all"
                    >
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-36 object-cover"
                        />
                        <div className="p-2">
                            <h3 className="text-white text-sm font-semibold truncate">
                                {game.title}
                            </h3>
                            <p className="text-gray-400 text-xs">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-4 px-4">
                {popularGames.map((game, index) => (
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

export default PopularGames;
