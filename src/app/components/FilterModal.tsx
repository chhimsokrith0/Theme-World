import React from "react";
import { FiX } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            {/* Modal Container with Animation */}
            <div className="w-80 bg-gray-900 h-full shadow-lg p-6 relative animate-slide-down">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <FiX className="text-2xl" />
                </button>

                {/* Modal Title */}
                <h2 className="text-xl font-bold text-white mb-6 animate-fade-in">
                    Filters
                </h2>

                {/* Sort By Section */}
                <div className="mb-6 animate-fade-in">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Sort By</h3>
                    <div className="flex space-x-2">
                        <button className="px-5 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700">
                            A-Z
                        </button>
                        <button className="px-5 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700">
                            Z-A
                        </button>
                        <button className="px-5 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700">
                            Newest
                        </button>
                    </div>
                </div>

                {/* Providers Section */}
                <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-gray-400">Providers</h3>
                        <button
                            className="text-sm text-gray-400 hover:text-white"
                            onClick={() => console.log("Clear all clicked")}
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Search Provider */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search Provider"
                            className="w-full px-4 py-3 bg-gray-800 text-sm text-white rounded-full outline-none"
                        />
                        <BiSearch className="absolute right-5 top-3.5 text-gray-400 text-xl" />
                    </div>

                    {/* Hot and New Buttons */}
                    <div className="flex justify-between mb-4">
                        <button className="px-6 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700">
                            Hot
                        </button>
                        <button className="px-6 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700">
                            New
                        </button>
                    </div>

                    {/* Providers List */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "PG", tag: "New" },
                            { name: "JOKER", tag: "Hot" },
                            { name: "JILI", tag: "Hot" },
                            { name: "Pragmatic", tag: "Hot" },
                            { name: "Habanero", tag: "Hot" },
                            { name: "Naga", tag: "New" },
                            { name: "Nolimit", tag: "Hot" },
                        ].map((provider, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700"
                            >
                                <span className="text-sm text-white font-semibold">
                                    {provider.name}
                                </span>
                                <span className="text-xs text-red-500 bg-gray-900 px-2 py-1 rounded-full">
                                    {provider.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
