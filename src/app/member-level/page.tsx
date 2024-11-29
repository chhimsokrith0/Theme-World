"use client";

import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import ExclusiveBenefits from "./ExclusiveBenefits";

const Member_Level: React.FC = () => {
  return (
    <div className="px-6 py-4">
      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto bg-blue-600 text-white rounded-lg overflow-hidden relative mb-10">
        {/* Background Image */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/img-member-level/banner.webp" // Replace with the actual path of the uploaded image
            alt="Member Level Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mb-8">
        <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
          Join the Levels
        </button>
      </div>

      {/* Carousel Section */}
      <Carousel />

      {/* Exclusive Benefits Section */}
      <ExclusiveBenefits />
    </div>
  );
};

export default Member_Level;
