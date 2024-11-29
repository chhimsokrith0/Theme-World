"use client";

import React, { useState } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const levels = [
    {
      level: "Bronze",
      cashback: "2",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/bronze.png",
    },
    {
      level: "Silver",
      cashback: "3",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/silver.png",
    },
    {
      level: "Gold",
      cashback: "4",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/gold.png",
    },
    {
      level: "Diamond",
      cashback: "5",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/diamond.png",
    },
    {
      level: "Platinum",
      cashback: "6",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/platinum.png",
    },
    {
      level: "Black",
      cashback: "7",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/black.png",
    },
  ];

  const itemsPerView = 3; // Number of visible cards
  const maxIndex = levels.length - itemsPerView;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="max-w-[1200px] mx-auto text-center py-8 relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="carousel__viewport flex transition-transform ease-in-out duration-300"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {/* Ranking Cards */}
          {levels.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-lg p-6 shadow-md w-[33.333%] h-[430px] flex flex-col items-center mx-2"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`${item.level} Icon`}
                className="w-auto h-[129px] mx-auto mb-3"
              />
              {/* Details */}
              <h3 className="font-bold text-[24px] text-center mt-2">
                {item.level}
              </h3>
              <div className="text-center px-7">
                <div className="flex justify-between items-center text-md mt-4 mb-1">
                  <span>Cashback (%)</span>
                  <span className="text-yellow-400">{item.cashback}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className={`absolute left-4 top-[50%] transform -translate-y-1/2 bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500 transition ${
          currentIndex === 0 && "opacity-50 cursor-not-allowed"
        }`}
        aria-label="Previous"
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-4 top-[50%] transform -translate-y-1/2 bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500 transition ${
          currentIndex === maxIndex && "opacity-50 cursor-not-allowed"
        }`}
        aria-label="Next"
        disabled={currentIndex === maxIndex}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
