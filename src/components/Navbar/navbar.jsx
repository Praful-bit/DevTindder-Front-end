import React from "react";
import { UserPlus, Heart, Phone, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../Utils/userSlice";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_PORT_URL;

const NavItem = ({
  children,
  isProfile = false,
  isLabel = false,
  onClick,
  user,
}) => {
  if (isLabel) {
    return (
      <div className="px-4 py-2 font-semibold text-base text-purple-300">
        {children}
      </div>
    );
  }

  if (isProfile) {
    const initial = user?.firstName?.charAt(0)?.toUpperCase() || "U";
    return (
      <div
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-white font-bold text-lg">
          {initial}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer relative overflow-hidden group bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/40 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
      onClick={onClick}
    >
      <div className="transition-transform duration-300 group-hover:scale-110 text-purple-300">
        {children}
      </div>
      <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 transition-transform duration-500"></div>
    </div>
  );
};

const ModernNavbar = () => {
  const user = useSelector((store) => store.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickLogOut = async () => {
    console.log("Handle click is working");
    try {
      await axios.post(`${API_URL}/logout`, {}, {
        withCredentials: true,
      });

      dispatch(removeUser()); 

      navigate("/login");
      console.log("Logged out successfully");
    } catch (err) {
      console.error(err);
      console.error(
        err.response?.data?.message || "Failed to logout. Please try again."
      );
    }
  };

  return (
    <div className="w-full flex justify-center pt-4 fixed top-0 z-50">
      <nav className="flex flex-row items-center gap-6 px-6 py-4 rounded-xl shadow-xl bg-gradient-to-r from-gray-900 to-purple-900 border border-purple-500/30">
        <NavItem isProfile user={user} onClick={() => navigate("/profile")} />
        <NavItem isLabel>You</NavItem>
        <NavItem onClick={() => navigate("/connection")}>
          <Heart className="w-6 h-6" />
        </NavItem>
        <NavItem onClick={() =>navigate("/request")}>
          <UserPlus className="w-6 h-6" />
        </NavItem>
        <NavItem onClick={() =>navigate("/contact")}>
          <Phone className="w-6 h-6" />
        </NavItem>
        <NavItem onClick={handleClickLogOut}>
          <LogOut className="w-6 h-6" />
        </NavItem>
      </nav>
    </div>
  );
};


export default ModernNavbar;
