"use client";

import React from "react";
import Image from "next/image";
import StepsSection from "@/app/reward/Steps_Section";
import ENJOY_OUR_GAMES from "./ENJOY_OUR_GAMES";
import ENJOY_OUR_PROMOTIONS from "./ENJOY_OUR_PROMOTIONS";
import Benefits_Section from "./Benefits_Section";
import Introducing_Our_Exclusive from "./Introducing_Our_Exclusive";

const RewardSection: React.FC = () => {
  return (
    <div className="px-6 py-4">
      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto bg-purple-600 text-white rounded-lg overflow-hidden relative mb-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img-reward/bg-header-sm.svg" // Replace with the correct path for your background image
            alt="Reward Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="p-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            UNLOCK <span className="text-yellow-400">ENDLESS BENEFITS</span>
          </h1>
          <p className="text-lg mb-6">
            Sign up now and embark on an exhilarating journey of perks. Open the
            door to limitless rewards.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            Join PlayGame168
          </button>
        </div>
      </div>


      {/* Steps Section */}
      <StepsSection />

      {/* ENJOY OUR GAMES */}
      <ENJOY_OUR_GAMES />

      {/* ENJOY_OUR_PROMOTIONS */}
      <ENJOY_OUR_PROMOTIONS />

      {/* Benefits Section */}
      <Benefits_Section />

      {/* Introducing Our Exclusive */}
      <Introducing_Our_Exclusive />



      <div className=" py-10">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-center text-white rounded-lg p-8 shadow-md">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            We are delighted to offer you the most deluxe gaming experience
          </h2>
          {/* Button */}
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition">
            Sign Up
          </button>
        </div>
      </div>

    </div>
  );
};

export default RewardSection;
