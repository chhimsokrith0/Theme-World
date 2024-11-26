"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGift, faDice, faGem } from "@fortawesome/free-solid-svg-icons";
import { FaUserPlus } from "react-icons/fa";
import Sidebar from "./Sidebar";

const MobileNavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={toggleSidebar} // Close sidebar on overlay click
          ></div>
          {/* Sidebar Component */}
          <div className="relative z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      <nav className="sticky bottom-0 left-0 w-full bg-[#020617] py-3 shadow-lg z-50 sm:hidden">
        <div className="flex justify-between items-center px-6">
          {/* Menu Icon */}
          <div
            className="flex flex-col items-center text-gray-400 hover:text-white cursor-pointer"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
            <span className="text-xs mt-1">Menu</span>
          </div>

          {/* Slots Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGem} className="text-2xl" />
            <span className="text-xs mt-1">Slots</span>
          </div>

          {/* Sign Up Icon */}
          <div className="flex flex-col items-center text-yellow-500">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaUserPlus className="text-xl text-white" />
            </div>
            <span className="text-xs mt-1 text-white">Sign Up</span>
          </div>

          {/* Live Casino Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faDice} className="text-2xl" />
            <span className="text-xs mt-1">Live Casino</span>
          </div>

          {/* Promo Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGift} className="text-2xl" />
            <span className="text-xs mt-1">Promo</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavBar;
