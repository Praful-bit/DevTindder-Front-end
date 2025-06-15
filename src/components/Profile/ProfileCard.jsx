import React, { useState } from "react";
import { Heart, X, Star, Zap, Send } from "lucide-react";

const ProfileCard = () => {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
    setSwipeDirection(diff > 0 ? 'right' : 'left');
  };

  const handleTouchEnd = () => {
    if (Math.abs(offsetX) > 100) {
      // Threshold for swipe action
      if (swipeDirection === 'right') {
        alert('You liked the profile! 💜');
      } else {
        alert('You rejected the profile 👎');
      }
    }
    setOffsetX(0);
    setSwipeDirection(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
     
      <div 
        className="w-[370px] rounded-2xl overflow-hidden shadow-lg bg-black text-white relative transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-2xl animate-float select-none"
        style={{
          transform: `translateX(${offsetX}px) rotate(${offsetX * 0.02}deg)`,
          transition: offsetX === 0 ? 'transform 0.5s ease-out' : 'none',
          animation: 'float 6s ease-in-out infinite',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
        {/* Swipe Indicators */}
        <div className={`absolute inset-0 bg-green-500/20 transition-opacity duration-200 z-10 ${swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 bg-red-500/20 transition-opacity duration-200 z-10 ${swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'}`} />

        {/* Image with hover effect */}
        <div className="relative h-[480px] w-full group">
          <img
            src="https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="w-full h-[500px] object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* Info with animations */}
        <div className="absolute bottom-20 left-4 z-10">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-white">Recently Active</span>
          </div>
          <h2 className="text-2xl font-bold mt-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Anushka <span className="text-xl font-normal text-white">19</span>
          </h2>
          <p className="text-sm text-purple-300 mt-1">Interests</p>

          {/* Interests with hover effects */}
          <div className="flex flex-wrap gap-2 mt-2 max-w-[320px]">
            {[
              { label: "DIY", color: "bg-gradient-to-r from-pink-500 to-purple-500" },
              { label: "Baking", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
              "Instagram",
              "Animated movies",
              "Mountains",
              "Content Creation",
              "Cars",
              "Street Food",
              "Badminton",
              "Disney",
            ].map((interest, idx) =>
              typeof interest === "string" ? (
                <span
                  key={idx}
                  className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-purple-500/30 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  {interest}
                </span>
              ) : (
                <span
                  key={idx}
                  className={`${interest.color} text-white text-xs px-3 py-1 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50`}
                >
                  {interest.label}
                </span>
              )
            )}
          </div>
        </div>

        {/* Action Icons with animations */}
        <div className="absolute bottom-3 w-full flex justify-around items-center px-6 z-20">
          <button 
            className="bg-yellow-500 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/50 hover:-translate-y-1 active:scale-95"
            onClick={() => alert('Super Like! ⚡')}
          >
            <Zap className="text-white" size={20} />
          </button>
          <button 
            className="bg-red-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 hover:-translate-y-1 active:scale-95"
            onClick={() => alert('You rejected the profile 👎')}
          >
            <X className="text-white" size={20} />
          </button>
          <button 
            className="bg-blue-600 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95"
            onClick={() => alert('Added to favorites! ⭐')}
          >
            <Star className="text-white" size={24} />
          </button>
          <button 
            className="bg-green-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 hover:-translate-y-1 active:scale-95"
            onClick={() => alert('You liked the profile! 💜')}
          >
            <Heart className="text-white" size={20} />
          </button>
          <button 
            className="bg-blue-500 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95"
            onClick={() => alert('Message sent! 📨')}
          >
            <Send className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
