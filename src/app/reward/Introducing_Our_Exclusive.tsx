


"use client";

import React from "react";
import Image from "next/image";


const introducingOurExclusive = () => {

    const features = [
        {
            id: 1,
            title: "Activation",
            description: "Level up by quests, and challenges on your way to the highest level of achievement.",
            icon: "/img-reward/cashback1.iBfsM5Qu.png", // Replace with your actual image path
        },
        {
            id: 2,
            title: "Bonus",
            description: "Claim your well-earned bonus daily and weekly as you complete the tasks consistently.",
            icon: "/img-reward/cashback2.iAzhN3sC.png", // Replace with your actual image path
        },
        {
            id: 3,
            title: "Reward Tier",
            description: "Elevate your status and enjoy richer rewards as you climb through our reward tiers.",
            icon: "/img-reward/cashback3.Cqv5f9E6.png", // Replace with your actual image path
        },
    ];
    return (
        <div className="px-6 py-10">
            <div className="max-w-[1200px] mx-auto rounded-lg overflow-hidden text-white">
                {/* Header Section */}
                <div className="p-8 lg:flex lg:justify-between lg:items-center">
                    {/* Left Section */}
                    <div className="lg:w-1/2">
                        <Image
                            src="/img-reward/cashback.DxM8kuXg.png" // Replace with your actual image path
                            alt="Rocket"
                            width={1000}
                            height={1000}
                            className="object-contain"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <h2 className="text-4xl font-bold mb-4 leading-snug">
                            Introducing Our Exclusive <span className="text-yellow-400">Rebate</span> & <span className="text-yellow-400">Cashback</span> Program
                        </h2>
                        <p className="text-lg mb-6 text-gray-300">
                            Join us in the excitement and start earning rebate & cashback today with our exclusive recharge program.
                            Don&apos;t miss out on these fantastic rewards!
                        </p>
                        <a
                            href="#"
                            className="inline-block text-green-400 font-semibold hover:text-green-500 transition"
                        >
                            Join PlayGame168 Today →
                        </a>
                    </div>
                </div>

                {/* Features Section */}
                <div
                    className="bg-gradient-to-r bg-gray-900/90 via-gray-900 to-gray-800 rounded-b-lg flex justify-around items-center space-x-6 transition-opacity duration-300"
                    style={{
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)", // Adds a shadow for depth
                        backgroundImage: "url('/img-features/feature-bg.png')", // Replace with your actual image path
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        marginTop: "-100px",
                    }}
                >
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col items-center text-center p-4 rounded-lg shadow-md"
                        >
                            {/* Icon */}
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={70}
                                height={70}
                                className="mb-4"
                            />
                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            {/* Description */}
                            <p className="text-gray-300 text-sm max-w-[250px]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default introducingOurExclusive;