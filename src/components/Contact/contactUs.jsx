import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Twitter,
  Linkedin,
  Heart,
  Code,
  Users,
  MessageCircle,
} from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_PORT_URL;
export default function DevTinderContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/contact`, formData, {
        withCredentials: true,
      });
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}

      {/* Main Content */}
      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              DevTinder 💜
            </h2>
            <p className="text-purple-300/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions about DevTinder? Want to collaborate or share
              feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                  Send us a Message
                </h3>
                <p className="text-purple-300/70 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-lg active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Contact Info & Stats */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Information */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Email
                      </p>
                      <p className="text-purple-300/70 text-xs sm:text-sm">
                        prafulgahlot10@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Phone
                      </p>
                      <p className="text-purple-300/70 text-xs sm:text-sm">
                        +91 8979012764
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Location
                      </p>
                      <p className="text-purple-300/70 text-xs sm:text-sm">
                        Binor, U.P, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Platform Stats
                </h3>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      10K+
                    </p>
                    <p className="text-purple-300/70 text-xs sm:text-sm">
                      Developers
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      50K+
                    </p>
                    <p className="text-purple-300/70 text-xs sm:text-sm">
                      Matches
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Code className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      100+
                    </p>
                    <p className="text-purple-300/70 text-xs sm:text-sm">
                      Projects
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      1M+
                    </p>
                    <p className="text-purple-300/70 text-xs sm:text-sm">
                      Messages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  DevTinder
                </h3>
                <span className="text-xl sm:text-2xl ml-2">💜</span>
              </div>
              <p className="text-purple-300/70 text-sm sm:text-base leading-relaxed">
                Connecting developers worldwide through code, collaboration, and
                creativity.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                <Link
                  to="https://github.com/Praful-bit"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </Link>
                <Link
                  to="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/praful-gahlot-9a6329268/"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Resources
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-300/70 hover:text-purple-300 text-sm sm:text-base transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-500/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-purple-300/60 text-xs sm:text-sm">
                © 2025 DevTinder. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-purple-300/60 text-xs sm:text-sm">
                <span>Made with</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
                <span>for developers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
          <div
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </footer>
    </div>
  );
}
