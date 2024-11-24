"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Game {
    title: string;
    provider: string;
    image: string;
}

interface SearchModalProps {
    games: Game[];
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ games, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-[#1A202C] text-gray-300 rounded-lg w-[90%] max-w-4xl p-6 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl focus:outline-none"
                >
                    <AiOutlineClose />
                </button>

                {/* Search Bar */}
                <div className="w-full relative mb-4">
                    <input
                        type="text"
                        placeholder="Search Games"
                        className="w-full px-5 py-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none"
                    />
                </div>

                {/* "Find your games" Text */}
                <p className="text-gray-400 text-center text-sm mb-8">Find your games</p>

                {/* Recommended Games Section */}
                <h2 className="text-white text-lg font-bold mb-4">Recommended for you</h2>
                <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-40 p-4 bg-gray-800 rounded-lg hover:scale-105 transition-transform"
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="rounded-lg mb-2"
                            />
                            <h3 className="text-sm text-white truncate">{game.title}</h3>
                            <p className="text-xs text-gray-400">{game.provider}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination Arrows */}
                <div className="flex justify-end mt-4 space-x-2">
                    <button className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">{'<'}</span>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">{'>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
