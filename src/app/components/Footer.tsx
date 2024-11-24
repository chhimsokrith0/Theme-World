"use client";

import React from "react";
import { FaTelegramPlane, FaLine, FaCircle } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F17] text-gray-300 px-8 py-10">
      <div className="grid grid-cols-5 gap-8 mb-6">
        {/* Game Category */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Game Category</h3>
          <ul className="space-y-2 text-sm">
            <li>Demo</li>
            <li>New Games</li>
            <li>Popular</li>
            <li>Cash Drops</li>
            <li>Jackpots</li>
            <li>Megaways</li>
            <li>Table Games</li>
            <li>All Games</li>
          </ul>
        </div>

        {/* Live Casino */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Live Casino</h3>
          <ul className="space-y-2 text-sm">
            <li>All Live Casino</li>
          </ul>
        </div>

        {/* Specials */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Specials</h3>
          <ul className="space-y-2 text-sm">
            <li>Quests</li>
            <li>Reward</li>
            <li>Referral</li>
            <li>Level</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400">
              <FaLine size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaTelegramPlane size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaCircle size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        Powered By <span className="text-yellow-400 font-bold">PlayGame168</span>
      </div>
    </footer>
  );
};

export default Footer;
