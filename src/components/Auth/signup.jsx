import React, { useState } from "react";
import { Mail, Eye, EyeOff, User } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_PORT_URL;
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const navigate = useNavigate()
 const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  console.log("before api call", formData);
  try {
    const response = await axios.post(`${API_URL}/signup`, formData, {
      withCredentials: true,
    });
    dispatch(addUser(response.data))
    navigate("/home")
  } catch (err) {
    console.log("Signup error", err?.response?.data?.message);
  }
};


  return (
    <div className="space-y-3">
      {/* Name Fields Row */}
      <div className="grid grid-cols-2 gap-3">
        {/* First Name field */}
        <div className="relative group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 pl-10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 group-hover:border-purple-400/50"
            required
          />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 w-4 h-4 group-hover:text-purple-400 transition-colors" />
        </div>

        {/* Last Name field */}
        <div className="relative group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 pl-10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 group-hover:border-purple-400/50"
            required
          />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 w-4 h-4 group-hover:text-purple-400 transition-colors" />
        </div>
      </div>

      {/* Email Field */}
      <div className="relative group">
        <input
          type="email"
          name="emailId"
          placeholder="Email Address"
          value={formData.emailId}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 pl-10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 group-hover:border-purple-400/50"
          required
        />
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 w-4 h-4 group-hover:text-purple-400 transition-colors" />
      </div>

      {/* Password Field */}
      <div className="relative group">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 pl-10 pr-10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 group-hover:border-purple-400/50"
          required
        />
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 w-4 h-4 group-hover:text-purple-400 transition-colors" />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 hover:text-purple-400 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Confirm Password Field */}
      {/* <div className="relative group">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 py-2 pl-10 pr-10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 group-hover:border-purple-400/50"
          required
        />
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 w-4 h-4 group-hover:text-purple-400 transition-colors" />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400/60 hover:text-purple-400 transition-colors"
        >
          {showConfirmPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div> */}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-lg active:scale-[0.98] mt-2"
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;
