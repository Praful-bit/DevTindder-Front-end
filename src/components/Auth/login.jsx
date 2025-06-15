import React, { useState } from "react";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import Signup from "./signup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../Utils/userSlice";
import {  useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_PORT_URL;

export default function DevTinderLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await axios.post(`${API_URL}/login`, formData, {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
      navigate("/home")
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/25">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  DevTinder
                </h1>
                <span className="text-2xl sm:text-3xl lg:text-4xl ml-2">
                  💜
                </span>
              </div>
              <p className="text-purple-300/80 text-xs sm:text-sm lg:text-base">
                Connect with developers worldwide
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex bg-black/30 rounded-lg p-1 mb-4 sm:mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="space-y-3 sm:space-y-4">
              {isLogin ? (
                <>
                  {/* Email Field */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="emailId"
                      placeholder="Email address"
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

                  {/* Forgot Password */}
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-500 text-sm text-center">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-lg active:scale-[0.98] ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </>
              ) : (
                <Signup />
              )}

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-purple-500/20"></div>
                <span className="px-3 text-purple-300/60 text-xs">or</span>
                <div className="flex-1 border-t border-purple-500/20"></div>
              </div>

              {/* Social Login */}
              <button className="w-full bg-black/30 hover:bg-black/50 border border-purple-500/30 hover:border-purple-500/50 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.98] hover:shadow-lg">
                <Github className="w-4 h-4" />
                <span>Continue with GitHub</span>
              </button>

              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-purple-300/60 text-xs">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-purple-400 hover:text-purple-300 ml-1 font-medium transition-colors"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Anime Image Section */}
        <div className="hidden lg:block w-full max-w-2xl">
          <div className="relative bg-gradient-to-br from-purple-900/10 to-black/10 rounded-2xl p-4 backdrop-blur-sm border border-purple-500/10 transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Anime Developer"
              className="w-full h-[600px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Find Your Perfect Match
              </h3>
              <p className="text-sm text-purple-200/90">
                Connect with developers who share your passion for coding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
