import React, { useState } from "react";
import { Heart, X } from "lucide-react";

const ProfileCard = () => {
  const [startX, setStartX] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleStart = (clientX) => {
    setStartX(clientX);
  };

  const handleMove = (clientX) => {
    if (startX === null) return;
    const diffX = clientX - startX;
    setOffsetX(diffX);
    setSwipeDirection(diffX > 0 ? "right" : "left");
  };

  const handleEnd = () => {
    if (Math.abs(offsetX) > 100) {
      if (swipeDirection === "right") {
        console.log("Interested ✅");
      } else {
        console.log("Ignored ❌");
      }
    }

    setStartX(null);
    setOffsetX(0);
    setSwipeDirection(null);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (startX !== null) {
      handleEnd();
    }
  };

  return (
    <div
      className="w-[370px] rounded-2xl overflow-hidden shadow-lg bg-black text-white relative transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-2xl animate-float select-none cursor-grab active:cursor-grabbing"
      style={{
        transform: `translateX(${offsetX}px) rotate(${offsetX * 0.02}deg)`,
        transition: offsetX === 0 ? "transform 0.5s ease-out" : "none",
        animation: offsetX === 0 ? "float 6s ease-in-out infinite" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        `}
      </style>

      {/* Visual feedback */}
      <div
        className={`absolute inset-0 bg-green-500/20 transition-opacity duration-200 z-10 ${
          swipeDirection === "right" ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 bg-red-500/20 transition-opacity duration-200 z-10 ${
          swipeDirection === "left" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Card Content */}
      <div className="relative h-[480px] w-full group">
        <img
          src="https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg"
          alt="Profile"
          className="w-full h-[500px] object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-20 left-4 z-10">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white">Recently Active</span>
        </div>
        <h2 className="text-2xl font-bold mt-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Anushka <span className="text-xl font-normal text-white">19</span>
        </h2>

        <div className="flex flex-wrap gap-2 mt-2 max-w-[320px]">
          {[
            { label: "DIY", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
            { label: "Baking", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
            "Instagram",
            "Mountains",
            "Content Creation",
            "Street Food",
          ].map((item, idx) =>
            typeof item === "string" ? (
              <span
                key={idx}
                className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-purple-500/30"
              >
                {item}
              </span>
            ) : (
              <span
                key={idx}
                className={`${item.color} text-white text-xs px-3 py-1 rounded-full`}
              >
                {item.label}
              </span>
            )
          )}
        </div>
      </div>

      {/* Buttons (optional click) */}
      <div className="absolute bottom-3 w-full flex justify-around items-center px-6 z-20">
        <button
          className="bg-red-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 hover:-translate-y-1 active:scale-95"
          onClick={() => console.log("Ignored ❌")}
        >
          <X className="text-white" size={20} />
        </button>
        <button
          className="bg-green-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 hover:-translate-y-1 active:scale-95"
          onClick={() => console.log("Interested ✅")}
        >
          <Heart className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
