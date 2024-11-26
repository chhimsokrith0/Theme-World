"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignupModal from "@/app/components/SignUp_SingIn_Modal"; // Import the modal
import logo from "@/app/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaFlagUsa } from "react-icons/fa";
import LanguageSwitch from "./LanguageSwitch";
// import Sidebar from "./Sidebar";

const Header: React.FC = () => {

  

  const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);

  // Function to toggle modal with type
  const toggleModal = (type: "signUp" | "signIn") => setModalType(type);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="bg-gray-900 sticky top-0 z-[9999] px-4 sm:px-6 py-3 shadow-md flex items-center justify-between">
      {/* Desktop View - Left Section */}
      <div className="hidden sm:flex items-center space-x-4">
        <button className="text-white text-xl" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Logo */}
        <Image
          src={logo}
          alt="PlayGame168"
          width={100}
          height={50}
          className="h-auto w-auto"
        />
      </div>

      {/* Desktop View - Right Section */}
      <div className="hidden sm:flex items-center space-x-6">
        {/* Sign Up Button */}
        <button
          onClick={() => toggleModal("signUp")}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90"
        >
          Sign Up
        </button>

        {/* Sign In Button */}
        <button
          onClick={() => toggleModal("signIn")}
          className="border border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          Sign In
        </button>

        {/* Language Selector */}
        <LanguageSwitch />
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex items-center justify-between w-full">
        {/* Mobile Logo */}
        <Image
          src={logo}
          alt="PlayGame168"
          width={60}
          height={30}
          className="h-auto w-auto"
        />
        {/* Mobile Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleModal("signUp")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-1 px-4 rounded-full hover:opacity-90 text-sm"
          >
            Sign Up
          </button>
          <button
            onClick={() => toggleModal("signIn")}
            className="border border-yellow-500 text-yellow-500 font-semibold py-1 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition text-sm"
          >
            Sign In
          </button>
          <FaFlagUsa className="text-white h-5 w-5" />
        </div>
      </div>



      {/* Render Modal */}
      {modalType && (
        <SignupModal
          activeTab={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </header>
  );
};

export default Header;
