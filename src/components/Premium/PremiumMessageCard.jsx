import React from "react";
import { Crown } from "lucide-react";

const PremiumMessageCard = ({ name, preview, time }) => {
  return (
    <div className="bg-black p-[2px] rounded-xl shadow-md border hover:border-purple-700 transition-all duration-300">
      <div className="bg-black rounded-xl p-4 flex items-center gap-4 text-white">
        {/* Avatar + Crown */}
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-700 to-purple-700 flex items-center justify-center font-bold text-lg shadow-md">
            {name.charAt(0).toUpperCase()}
          </div>
          <Crown className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 drop-shadow" />
        </div>

        {/* Name & Message */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-white">
              {name}{" "}
              <span className="text-xs text-yellow-400 ml-1">(Premium)</span>
            </h4>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1 truncate">{preview}</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumMessageCard;
