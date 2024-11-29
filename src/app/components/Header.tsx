"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignupModal from "@/app/components/SignUp_SingIn_Modal"; // Import the modal
import logo from "@/app/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";

const Header: React.FC = () => {

  const { t } = useTranslation();

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
          {t("header.signUp")}
        </button>

        {/* Sign In Button */}
        <button
          onClick={() => toggleModal("signIn")}
          className="border border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          {t("header.signIn")}
        </button>

        {/* Language Selector */}
        <div className="ml-10">
          <LanguageSwitch />
        </div>
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
            {t("header.signUp")}
          </button>
          <button
            onClick={() => toggleModal("signIn")}
            className="border border-yellow-500 text-yellow-500 font-semibold py-1 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition text-sm"
          >
            {t("header.signIn")}
          </button>
          {/* Language Selector */}
          <div className="ml-10">
            <LanguageSwitch />
          </div>
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
