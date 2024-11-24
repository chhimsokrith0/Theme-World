"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import logo from "@/app/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons"; 
import { FaFlagUsa } from "react-icons/fa"; 
import { FaHeadphonesAlt } from "react-icons/fa"; 

const Header: React.FC = () => {
    const [languageDropdown, setLanguageDropdown] = useState(false);

    // Toggle the dropdown
    const toggleLanguageDropdown = () => {
        setLanguageDropdown(!languageDropdown);
    };

    return (
        <header className="bg-gray-900 px-4 sm:px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-10">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* Menu Icon */}
                <button className="text-white text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Logo */}
                <Image src={logo} alt="PlayGame168" width={100} height={50} className="h-auto w-auto" />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
                {/* Sign Up Button */}
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90">
                    Sign Up
                </button>

                {/* Sign In Button */}
                <button className="border border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition">
                    Sign In
                </button>

                {/* Headphones Icon */}
                <FaHeadphonesAlt className="text-white h-6 w-6 cursor-pointer hover:opacity-80" />

                {/* Language Selector */}
                <div className="relative">
                    <div
                        className="flex items-center space-x-2 bg-gray-800 py-2 px-3 rounded-full cursor-pointer"
                        onClick={toggleLanguageDropdown}
                    >
                        <FaFlagUsa className="text-white h-5 w-5 rounded-full" />
                        <span className="text-white font-medium">ENG</span>
                        <FontAwesomeIcon icon={faChevronDown} className="text-white h-4 w-4" />
                    </div>
                    {languageDropdown && (
                        <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                            {/* English Option */}
                            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                <FaFlagUsa className="text-white h-5 w-5 rounded-full" />
                                <span className="text-white text-sm">English</span>
                            </div>

                            {/* Thai Option */}
                            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                <FaFlagUsa className="text-white h-5 w-5 rounded-full" /> 
                                <span className="text-white text-sm">Thai</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header; 