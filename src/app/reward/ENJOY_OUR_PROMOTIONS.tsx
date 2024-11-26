"use client";

import React from "react";
import Image from "next/image";


const ENJOY_OUR_PROMOTIONS = () => {
    return (

        <div className="px-6 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden p-8">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">ENJOY OUR PROMOTIONS!</h2>
                    <p className="text-gray-400 mb-6">
                        Deposit today and unlock a world of exclusive rewards like never before with
                        our exclusive rewards program.
                    </p>
                    <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                        Claim Your Reward
                    </button>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
                    <Image
                        src="/img-reward/step2.Cae0iGKU.svg" // Replace with the correct path for your image
                        alt="Promotions Illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default ENJOY_OUR_PROMOTIONS;