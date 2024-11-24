"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ProviderModalProps {
    providers: { name: string; logo: string }[]; // Each provider has a name and logo
    isOpen: boolean;
    onClose: () => void;
}

const ProviderModal: React.FC<ProviderModalProps> = ({ providers, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-[#1A202C] text-gray-300 rounded-lg w-[90%] max-w-6xl p-6 relative"
                onClick={(e) => e.stopPropagation()} // Prevent click propagation to background
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl focus:outline-none"
                >
                    <AiOutlineClose />
                </button>


                {/* Modal Title */}
                <h2 className="text-white text-2xl font-bold mb-6 text-center">
                    All Providers
                </h2>

                {/* Provider List */}
                <div className="grid grid-cols-5 gap-6">
                    {providers.map((provider, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-2 p-4 hover:bg-gray-700 rounded-lg cursor-pointer transition"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                <img src={provider.logo} alt={provider.name} className="w-8 h-8" />
                            </div>
                            <span className="text-sm text-gray-300 text-center">{provider.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProviderModal;
