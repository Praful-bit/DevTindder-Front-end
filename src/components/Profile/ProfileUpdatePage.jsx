import React, { useState, useEffect } from "react";
import {
  User,
  UserCheck,
  Save,
  ArrowLeft,
  Plus,
  X,
  GraduationCap,
  Globe,
  Github,
  Linkedin,
  Camera,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_PORT_URL;
const ProfileUpdatePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  emailId: "",
  dob: "", 
  gender: "",
  about: "",
  skills: ["JavaScript", "React"],
  linkDinUrl: "", 
  gitHubUrl: "",
  imageUrl: null, 
});


  const navigate = useNavigate();
  const [newSkill, setNewSkill] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }));
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = axios.patch(`${API_URL}/profile/edit`, formData, {
        withCredentials: true,
      });
      navigate("/profile")
    } catch (err) {
      console.log(err);
    }
  };

  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#180038] via-[#310062] to-[#4f0d86] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors">
            <ArrowLeft size={20} onClick={() => navigate("/profile")} />
          </button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Update Profile
            </h1>
            <p className="text-purple-300 mt-1">
              Keep your information up to date
            </p>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300">
            <div className="flex items-center gap-2">
              <UserCheck size={20} />
              Profile updated successfully!
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Profile Image Section */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Camera className="text-purple-400" size={24} />
              Profile Photo
            </h2>

            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="text-white" size={32} />
                  )}
                </div>
                <label className="absolute -bottom-2 -right-2 p-2 rounded-full bg-purple-600 text-white cursor-pointer hover:bg-purple-700 transition-colors">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <p className="text-white font-medium">Upload a new photo</p>
                <p className="text-purple-300 text-sm">
                  JPG, PNG or GIF. Max size 5MB
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <User className="text-purple-400" size={24} />
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                >
                  {genderOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-gray-900"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* About & Skills */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-purple-400" size={24} />
              About & Skills
            </h2>

            <div className="space-y-6">
              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  About Yourself
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself, your interests, and what drives you..."
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2">
                  Skills
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                    className="flex-1 p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                    placeholder="Add a skill"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-6 py-4 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-purple-400 hover:text-white transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Globe className="text-purple-400" size={24} />
              Social Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2 flex items-center gap-2">
                  <Linkedin size={16} />
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkDinUrl"
                  value={formData.linkDinUrl}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className=" text-purple-300 text-sm font-medium mb-2 flex items-center gap-2">
                  <Github size={16} />
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="gitHubUrl"
                  value={formData.gitHubUrl}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={()=>navigate("/profile")}
              className="px-8 py-4 rounded-xl text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
