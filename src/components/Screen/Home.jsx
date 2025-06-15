import React from "react";
import ModernNavbar from "../Navbar/navbar";
import ProfileCard from "../Profile/ProfileCard";


const Home = () => {
  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      {/* Left: Navbar (40%) */}
      <div className="w-2/5 flex items-center justify-center border-r border-purple-800">
        <ModernNavbar />
      </div>

      {/* Right: Profile Card (60%) */}
      <div className="w-3/4 p-6 flex items-center justify-center">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Home;
