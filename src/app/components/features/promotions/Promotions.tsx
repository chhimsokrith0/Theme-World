"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Promotions: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center space-x-2">
          {/* Icon */}
          <span className="text-purple-400 text-xl">🎁</span>
          {/* Title */}
          <h2 className="text-white text-2xl font-bold"> { t("promotions.title") } </h2>
        </div>
        {/* See All Button */}
        <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium bg-transparent border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <span>{ t("promotions.seeAll") }</span>
          <span>➔</span>
        </button>
      </div>
    </section>
  );
};

export default Promotions;
