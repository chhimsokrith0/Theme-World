"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Carousel items
const carouselItems = [
  { image: "/images/banner1.webp", alt: "Slide 1" },
  { image: "/images/banner2.webp", alt: "Slide 2" },
  { image: "/images/banner3.webp", alt: "Slide 3" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigate to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Common View for Both Mobile and Desktop */}
      <div>
        <div className="relative h-[150px] md:h-[200px] lg:h-[300px]">
          <Image
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].alt}
            fill
            className="object-cover rounded-xl animate-fade-in"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition animate-bounce"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition animate-bounce"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                index === currentIndex ? "bg-yellow-500 animate-scale-up" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
