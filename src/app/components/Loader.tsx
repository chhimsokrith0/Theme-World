import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-[#020617]">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.6s" }}></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.8s" }}></div>
      </div>
    </div>
  );
};

export default Loader;
