import React, { useState, useEffect } from "react";
import {
  UserPlus,
  RefreshCw,
  Search,
  ArrowLeft,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_PORT_URL;

export default function ConnectionsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/connection`, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="min-h-screen p-24 bg-gradient-to-br from-[#180038] via-[#310062] to-[#4f0d86] text-white ">
      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      {/* Header */}
     <div className="w-full max-w-5xl mx-auto p-6">
       <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
            <Users />
            Your Connections
          </h2>
          <p className="text-sm text-slate-300">
            Stay connected with fellow developers
          </p>
        </div>

        {/* Search and Refresh */}
        <div className="flex gap-3">
          <div className="flex items-center bg-slate-800 px-3 py-1 rounded-md">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search connections..."
              className="bg-transparent outline-none text-sm text-white placeholder-slate-400"
            />
          </div>
          <button
            onClick={() => {
              setLoading(true);
              fetchConnections();
            }}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-md text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>
     </div>

      {/* Conditional rendering */}
      {loading ? (
        <div className="text-center py-24 text-white text-lg">Loading...</div>
      ) : data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {data.data.map((user) => (
            <div
              key={user?._id}
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                {user?.firstName} {user?.lastName}
              </h3>
              <p className="text-sm text-purple-200 mt-1">
                Skills:{" "}
                {user?.skills?.length > 0
                  ? user?.skills.join(", ")
                  : "No skills listed"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-800 rounded-xl p-10 flex flex-col items-center justify-center max-w-5xl mx-auto">
          <div className="bg-slate-700 p-6 rounded-full mb-4">
            <UserPlus className="w-10 h-10 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No connections yet</h3>
          <p className="text-slate-400 text-sm mb-6 text-center">
            Start swiping to match with other developers and build your network!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Find Developers
          </button>
        </div>
      )}
    </div>
  );
}
