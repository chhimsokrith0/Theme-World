"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const AllGames: React.FC = () => {

    const { t } = useTranslation();

    const games = [
        { title: t("allGames.games.ninjaRaccoonFrenzy.name"), provider: t("allGames.games.ninjaRaccoonFrenzy.provider"), image: "/img-allgames/1.png" },
        { title: t("allGames.games.treasuresOfAztec.name"), provider: t("allGames.games.treasuresOfAztec.provider"), image: "/img-allgames/2.png" },
        { title: t("allGames.games.mahjongWays2.name"), provider: t("allGames.games.mahjongWays2.provider"), image: "/img-allgames/3.png" },
        { title: t("allGames.games.luckyNeko.name"), provider: t("allGames.games.luckyNeko.provider"), image: "/img-allgames/4.png" },
        { title: t("allGames.games.mahjongWays.name"), provider: t("allGames.games.mahjongWays.provider"), image: "/img-allgames/5.png" },
        { title: t("allGames.games.wildBountyShowdown.name"), provider: t("allGames.games.wildBountyShowdown.provider"), image: "/img-allgames/6.png" },
        { title: t("allGames.games.waysOfTheQilin.name"), provider: t("allGames.games.waysOfTheQilin.provider"), image: "/img-allgames/7.png" },
        { title: t("allGames.games.wildBandito.name"), provider: t("allGames.games.wildBandito.provider"), image: "/img-allgames/8.png" },
        { title: t("allGames.games.fortuneRabbit.name"), provider: t("allGames.games.fortuneRabbit.provider"), image: "/img-allgames/9.png" },
        { title: t("allGames.games.caishenWins.name"), provider: t("allGames.games.caishenWins.provider"), image: "/img-allgames/10.png" },
        { title: t("allGames.games.fortuneOx.name"), provider: t("allGames.games.fortuneOx.provider"), image: "/img-allgames/11.png" },
        { title: t("allGames.games.ganeshaFortune.name"), provider: t("allGames.games.ganeshaFortune.provider"), image: "/img-allgames/12.png" },
    ];

    return (
        <section className="pt-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-4">
                <div className="flex items-center space-x-2">
                    <span className="text-pink-400 text-xl">🔲</span>
                    <h2 className="text-white text-2xl font-bold"> { t("allGames.title") } </h2>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
                    <span>{ t("allGames.seeAll") }</span>
                    <span>➔</span>
                </button>
            </div>

            {/* Games Grid */}
            <div className="md:hidden flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
                {games.map((game, index) => (
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
                            <h3 className="text-white text-sm font-bold truncate">{game.title}</h3>
                            <p className="text-gray-400 text-xs">{game.provider}</p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-4 px-4">
                {games.map((game, index) => (
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
                            <h3 className="text-white text-sm font-bold truncate">{game.title}</h3>
                            <p className="text-gray-400 text-xs">{game.provider}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllGames;
