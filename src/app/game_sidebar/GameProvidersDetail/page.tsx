"use client";

import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const GameProvidersDetail: React.FC = () => {
    // List of providers
    const providers = [
        {
            name: "PGSoft",
            image: "/img-gameprovider/1.webp",
            badge: ["NEW", "HOT"],
        },
        {
            name: "JOKER",
            image: "/img-gameprovider/2.webp",
            badge: ["HOT"],
        },
        {
            name: "JILI",
            image: "/img-gameprovider/3.webp",
            badge: ["HOT"],
        },
        {
            name: "Pragmatic Play",
            image: "/img-gameprovider/4.webp",
            badge: ["HOT"],
        },
        {
            name: "Habanero",
            image: "/img-gameprovider/5.webp",
            badge: [],
        },
        {
            name: "Pegasus",
            image: "/img-gameprovider/6.webp",
            badge: [],
        },
    ];

    return (
        <div className="px-6 py-4">
            <div className="max-w-[1200px] mx-auto p-4">
                {/* Breadcrumb and Search Bar */}
                <div className="flex items-center justify-between mb-6">
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-400">
                        <span className="hover:text-white cursor-pointer">Home</span> /{" "}
                        <span className="text-white">Providers</span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center bg-gray-800 text-gray-400 px-4 py-2 rounded-full shadow-md max-w-sm w-full">
                        <input
                            type="text"
                            placeholder="Find your provider"
                            className="flex-grow bg-transparent text-sm outline-none placeholder-gray-400"
                        />
                        <BiSearch className="text-lg cursor-pointer hover:text-white" />
                        <FiSettings className="text-lg cursor-pointer hover:text-white ml-2" />
                    </div>
                </div>

                {/* Title */}
                <div className="flex items-start space-x-4 mb-4">
                    {/* Icon */}
                    <div className="text-4xl text-white">
                        <i className="fas fa-book"></i>
                    </div>

                    {/* Title and Subtitle */}
                    <div>
                        <h1 className="text-3xl font-bold text-white">Providers</h1>
                        <p className="text-sm text-gray-400">33 Providers</p>
                    </div>
                </div>



                {/* Providers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {providers.map((provider, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
                        >
                            {/* Image */}
                            <div className="relative h-40 flex items-center justify-center bg-gray-800">
                                <Image
                                    src={provider.image}
                                    alt={provider.name}
                                    width={300}
                                    height={200}
                                    className="object-contain"
                                />
                                {/* Badge */}
                                <div className="absolute top-2 left-2 flex space-x-2">
                                    {provider.badge.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`text-xs px-2 py-1 font-semibold rounded-full ${tag === "NEW"
                                                ? "bg-red-500 text-white"
                                                : "bg-yellow-400 text-black"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 flex flex-col items-center">
                                <h3 className="text-lg font-bold text-white">{provider.name}</h3>
                                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition">
                                    Play
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
};

export default GameProvidersDetail;
