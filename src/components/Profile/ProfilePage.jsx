import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Calendar,
  UserCheck,
  Sparkles,
  Star,
  Trophy,
  Zap,
  Edit3,
  Clock,
  Shield,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_PORT_URL;

const colorClassMap = {
  purple: "bg-purple-500/10 text-purple-400 group-hover:text-purple-300",
  blue: "bg-blue-500/10 text-blue-400 group-hover:text-blue-300",
  green: "bg-green-500/10 text-green-400 group-hover:text-green-300",
  pink: "bg-pink-500/10 text-pink-400 group-hover:text-pink-300",
  indigo: "bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300",
};

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_URL}/profile/view`, {
          withCredentials: true,
        });
        setUser(response.data);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 200);
      } catch (err) {
        setError("Failed to load profile data.");
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-400 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
          <p className="text-purple-300 text-lg mt-6 text-center font-medium">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/20 shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
            <UserCheck className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Access Denied</h2>
          <p className="text-purple-300 text-lg">
            {error || "Please log in to view your profile."}
          </p>
        </div>
      </div>
    );
  }

  const { firstName, lastName, emailId, createdAt, about, updatedAt, skills, gender } = user;

  const profileStats = [
    {
      icon: Trophy,
      label: "Skills",
      value: skills.length,
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: new Date(createdAt).getFullYear(),
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Zap,
      label: "Profile Score",
      value: "95%",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const profileFields = [
    {
      icon: User,
      label: "Full Name",
      value: `${firstName} ${lastName}`,
      color: "purple",
    },
    { icon: Mail, label: "Email", value: emailId, color: "blue" },
    { icon: User, label: "About", value: about, color: "green" },
    {
      icon: Shield,
      label: "Gender",
      value: gender || "Not specified",
      color: "pink",
    },
    {
      icon: Clock,
      label: "Last Updated",
      value: new Date(updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      color: "indigo",
    },
  ];

  return (
     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div
        className={`relative z-10 py-12 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      > 
      <div>
        <button className="p-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors">
            <ArrowLeft size={20} onClick={() => navigate("/home")} />
          </button>
      </div>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <User className="text-white" size={36} />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={14} />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3">
              {firstName} {lastName}
            </h1>
            <p className="text-purple-300 text-xl font-medium">
              Welcome back to your dashboard
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {profileStats.map((stat, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Info */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Profile Information</h2>
              <button onClick={()=>navigate("/profile/edit")} className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition">
                <Edit3 className="text-purple-300 group-hover:text-white" size={16} />
                <span className="text-purple-300 group-hover:text-white font-medium">Edit</span>
              </button>
            </div>

            <div className="p-8 space-y-6">
              {profileFields.map((field, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${colorClassMap[field.color].split(" ")[0]} transition shadow-lg`}
                    >
                      <field.icon className={colorClassMap[field.color].split(" ").slice(1).join(" ")} size={20} />
                    </div>
                    <span className="font-semibold text-white/80 group-hover:text-white transition text-lg">
                      {field.label}
                    </span>
                  </div>
                  <span className="text-white font-bold text-right max-w-xs truncate bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {field.value}
                  </span>
                </div>
              ))}

              {/* Skills */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-white/20 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition shadow-lg">
                    <Star className="text-purple-400 group-hover:text-purple-300" size={20} />
                  </div>
                  <span className="font-semibold text-white/80 group-hover:text-white transition text-lg">
                    Skills & Expertise
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-200 font-medium hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50 hover:text-white transition shadow-lg hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50 border-t border-white/10 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-3 text-purple-300 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg" />
                <span>Profile is up to date and verified</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
