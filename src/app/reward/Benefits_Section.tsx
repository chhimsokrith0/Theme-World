

"use client";

import React from "react";
import Image from "next/image";

const Benefits_Section = () => {
    const benefits = [
        {
            id: 1,
            title: "QUEST HUB",
            description: "Conquer daily and weekly challenges to rapidly boost your earnings.",
            tag: "Everyday & Week",
            image: "/img-reward/quests.DwK5Hzgb.png", // Replace with your actual image path
            gradient: "bg-gradient-to-b from-[#25262c] to-[#3a1981]",
        },
        {
            id: 2,
            title: "LOYALTY VIP",
            description: "Unlock elite benefits as you progress through our Loyalty VIP Club levels.",
            tag: "Everyday & Week",
            image: "/img-reward/vip.DKryrErV.png", // Replace with your actual image path
            gradient: "bg-gradient-to-b from-[#25262c] to-[#64187e]",
        },
        {
            id: 3,
            title: "TOURNAMENT",
            description:
                "Compete, rise to the challenge, and claim victory in our thrilling tournament games.",
            tag: "Every Week",
            image: "/img-reward/roll.CJ25fKZ7.png", // Replace with your actual image path
            gradient: "bg-gradient-to-b from-[#25262c] to-[#60410f]",
        },
    ];
    return (
        <div className="px-6 py-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            OBTAIN NUMEROUS COMPLIMENTARY <span className="text-yellow-400">BENEFITS</span>
          </h2>

          {/* Benefits Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="relative w-full lg:w-1/3 h-60 overflow-hidden rounded-[20px] shadow-lg"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-[20px] ${benefit.gradient}`}
                ></div>
                {/* Tag */}
                <div className="absolute top-1 left-0 px-4 py-2.5 bg-gray-700 bg-opacity-40 rounded-tl-[20px] rounded-br-[20px]">
                  <div className="text-sm font-semibold leading-snug text-gray-300">
                    {benefit.tag}
                  </div>
                </div>
                {/* Image */}
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={160}
                  height={140}
                  className="absolute right-0 top-[10%] object-contain"
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-start lg:items-left justify-center">
                  <h3 className="text-center text-white text-2xl font-bold uppercase leading-[35px]">
                    {benefit.title}
                  </h3><br />
                  <p className="text-sm font-medium leading-snug text-gray-300 lg:text-center">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Benefits_Section;