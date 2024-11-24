"use client";

import React from "react";
import Image from "next/image";

interface SignupModalProps {
    activeTab: "signUp" | "signIn";
    onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ activeTab, onClose }) => {
    const [tab, setTab] = React.useState(activeTab);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="flex h-[900px] w-full max-w-6xl bg-transparent justify-center rounded-lg overflow-hidden">
                {/* Left Side: Full Image */}
                <div className="relative flex-1 h-full max-w-[60vw]">
                    <Image
                        src="/img-login/Signup.webp"
                        alt="Welcome Banner"
                        className="object-cover rounded-l-lg"
                        fill // This makes the image responsive and fills the container
                        priority
                    />
                </div>


                {/* Right Side: Form */}
                <div className="flex flex-col w-full bg-gray-800 lg:w-[450px] lg:min-w-[450px] h-full rounded-r-lg relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-300 hover:text-white text-2xl focus:outline-none"
                    >
                        &times;
                    </button>

                    {/* Tab Switcher */}
                    <div className="flex font-bold w-full">
                        {/* Sign Up Tab */}
                        <button
                            onClick={() => setTab("signUp")}
                            className={`w-1/2 py-4 text-center text-base font-bold relative ${tab === "signUp"
                                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                                    : "bg-gray-800 text-white"
                                }`}
                        >
                            Sign Up
                            {tab === "signUp" && (
                                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
                            )}
                        </button>

                        {/* Sign In Tab */}
                        <button
                            onClick={() => setTab("signIn")}
                            className={`w-1/2 py-4 text-center text-base font-bold relative ${tab === "signIn"
                                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                                    : "bg-gray-800 text-white"
                                }`}
                        >
                            Sign In
                            {tab === "signIn" && (
                                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
                            )}
                        </button>
                    </div>


                    {/* Form Header */}
                    <div className="text-center py-6">
                        <h2 className="text-white text-lg md:text-xl font-bold">Welcome to</h2>
                        <h3 className="text-yellow-500 text-2xl md:text-3xl font-bold tracking-wide uppercase">
                            ICG Gaming
                        </h3>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-4 px-6 md:px-10">
                        {/* Mobile Phone Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter mobile phone"
                                className="w-full h-12 bg-gray-700 rounded-full px-5 text-base font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full h-12 bg-gray-700 rounded-full px-5 text-base font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                required
                            />
                            <svg
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.883 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A11 11 0 0 1 4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415zM5.936 7.35A8.97 8.97 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604zm6.978 6.978l-3.242-3.241a2.5 2.5 0 0 0 3.241 3.241m7.893 2.265l-1.431-1.431A8.9 8.9 0 0 0 20.778 12A9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.95 10.95 0 0 1-2.012 4.593m-9.084-9.084Q11.86 7.5 12 7.5a4.5 4.5 0 0 1 4.492 4.778z"></path>
                            </svg>
                        </div>

                        {/* Confirm Password */}
                        {tab === "signUp" && (
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full h-12 bg-gray-700 rounded-full px-5 text-base font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    required
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:opacity-90 transition"
                        >
                            {tab === "signUp" ? "Next Step" : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
