import React, { useEffect, useState } from "react";
import { RefreshCw, Users, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_PORT_URL;

export default function ConnectionRequestsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // null initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConnectionReq = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/request`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getConnectionReq();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setData(null);
    // Call the effect again manually
    const getConnectionReq = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/request`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getConnectionReq();
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      >
        <ArrowLeft className="h-4 w-4 text-white" />
        <span className="text-sm text-white">Back</span>
      </button>

      <div className="w-full max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-purple-300" />
              <h1 className="text-xl font-semibold text-purple-300">
                Connection Requests
              </h1>
            </div>
            <p className="text-purple-100">
              Accept or reject developers who want to connect with you
            </p>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-white/20 rounded-lg transition-colors"
          >
            <RefreshCw className="h-4 w-4 text-white animate-spin" />
            <span className="text-sm text-white">Refresh</span>
          </button>
        </div>

        {/* Conditional Rendering */}
        {loading ? (
          <div className="text-center py-24">Loading...</div>
        ) : data && data.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.data.map((user, index) => (
              <div
                key={user?._id}
                className="p-4 bg-white/10 rounded-lg shadow hover:bg-white/20 transition"
              >
                <h2 className="text-lg font-semibold">{user?.firstName || "Unnamed User"}</h2>
                <p className="text-sm text-purple-100">{user?.emailId}</p>
                {/* Add Accept / Reject buttons here */}
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 text-white text-sm">
                    Accept
                  </button>
                  <button className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-white text-sm">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-slate-800">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <div className="relative">
                <Users className="h-8 w-8 text-purple-300" />
                <Clock className="h-4 w-4 text-slate-300 absolute -bottom-1 -right-1" />
              </div>
            </div>
            <h2 className="text-xl font-medium mb-3 text-white">
              No pending requests
            </h2>
            <p className="text-purple-100 text-center max-w-md">
              When developers want to connect with you, they'll appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
