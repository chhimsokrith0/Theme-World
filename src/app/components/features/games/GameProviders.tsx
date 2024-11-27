"use client";

import React from "react";
import { useTranslation } from "react-i18next";



const GameProviders: React.FC = () => {

  const { t } = useTranslation();

  const gameProviders = [
    {
      title: t("gameProviders.providers.pg.name"),
      provider: t("gameProviders.providers.pg.description"),
      image: "/img-gameprovider/1.webp",
    },
    {
      title: t("gameProviders.providers.joker.name"),
      provider: t("gameProviders.providers.joker.description"),
      image: "/img-gameprovider/2.webp",
    },
    {
      title: t("gameProviders.providers.jili.name"),
      provider: t("gameProviders.providers.jili.description"),
      image: "/img-gameprovider/3.webp",
    },
    {
      title: t("gameProviders.providers.pragmaticPlay.name"),
      provider: t("gameProviders.providers.pragmaticPlay.description"),
      image: "/img-gameprovider/4.webp",
    },
  ];
  return (
    <section className="pt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl">📚</span>
          <h2 className="text-white text-2xl font-bold"> { t("gameProviders.title") } </h2>
        </div>
        <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <span>{ t("gameProviders.seeAll") }</span>
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
                <span> { t("gameProviders.providers.pragmaticPlay.play") } </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameProviders;
