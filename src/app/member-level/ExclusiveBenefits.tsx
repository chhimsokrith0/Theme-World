"use client";

import React from "react";

const ExclusiveBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Levels & Rewards",
      description: "The more you play, the higher you gain",
      icon: "/img-member-level/trophy-star.svg", // Replace with the actual path for the icon
    },
    {
      title: "Exclusive Promotions",
      description: "Reached a higher rank to unlock benefits.",
      icon: "/img-member-level/bonus.svg", // Replace with the actual path for the icon
    },
    {
      title: "Higher Cashback",
      description: "Get up to 12% cashback rewards",
      icon: "/img-member-level/nofee.svg", // Replace with the actual path for the icon
    },
    {
      title: "Royalty Club",
      description: "Join the VIP Club for exclusive bonuses.",
      icon: "/img-member-level/vip.svg", // Replace with the actual path for the icon
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8">
          Exclusive VIP Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
            >
              {/* Icon */}
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-25 h-25 mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
