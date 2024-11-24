"use client";

import React from "react";

const JackpotBanner: React.FC = () => {
  return (
    <section className="px-8 py-12">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/home_jackpot_background_desktop.png')", // Replace with your new full image path
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-72">
          {/* Centered Jackpot Content */}
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold uppercase" style={{marginTop: 130, fontSize:30}}>46M</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JackpotBanner;
