import React from "react";
import ModernNavbar from "../Navbar/navbar";
import ProfileCard from "../Profile/ProfileCard";
import MessageCard from "../Messages/MessageCard";
import PremiumMessageCard from "../Premium/PremiumMessageCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="flex min-h-screen h-screen overflow-hidden">
        {/* Left: Navbar (40%) */}
        <div className="w-2/5 flex flex-col items-center border-r border-purple-800 py-4">
          <ModernNavbar />

          {/* Message section under navbar */}
          <div className="w-full px-4 mt-24">
            <MessageCard />
          </div>
          <div className="w-full px-8 mt-10">
            <PremiumMessageCard
              name="Anushka"
              preview="Hey! I just unlocked premium 😉"
              time="1m"
            />
          </div>
        </div>

        {/* Right: Profile Card (60%) */}
        <div className="w-3/4 p-6 flex items-center justify-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
