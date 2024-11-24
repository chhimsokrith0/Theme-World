"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const carouselItems = [
  { image: "/images/banner1.webp", alt: "Slide 1" },
  { image: "/images/banner2.webp", alt: "Slide 2" },
  { image: "/images/banner3.webp", alt: "Slide 3" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return; // Skip if paused

    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [isPaused]);

  const goToPrevious = () => {
    setTransitionClass("opacity-0 translate-x-full"); // Transition effect for previous
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setTransitionClass("opacity-100 translate-x-0");
    }, 300); // Matches the CSS transition duration
  };

  const goToNext = () => {
    setTransitionClass("opacity-0 -translate-x-full"); // Transition effect for next
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setTransitionClass("opacity-100 translate-x-0");
    }, 300); // Matches the CSS transition duration
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div
        className={`relative w-full h-[300px] md:h-[420px] lg:h-[420px] transform transition-transform duration-300 ${transitionClass}`}
      >
        <Image
          src={carouselItems[currentIndex].image}
          alt={carouselItems[currentIndex].alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
