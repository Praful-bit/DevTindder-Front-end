import React from "react";
import { MessageCircle } from "lucide-react";

const MessageCard = ({ messages = [] }) => {
  const hasMessages = messages.length > 0;

  return (
    <div className="mt-6 mx-4">
      {hasMessages ? (
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-purple-800/30 hover:bg-purple-700/50 cursor-pointer rounded-xl p-3 shadow-md text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{msg.name}</h4>
                  <p className="text-xs text-gray-300 truncate">{msg.preview}</p>
                </div>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-purple-900/40 rounded-xl p-6 text-center shadow-lg text-white flex flex-col items-center justify-center min-h-[200px]">
          <div className="bg-purple-700/40 rounded-full p-4 mb-4">
            <MessageCircle className="w-8 h-8 text-purple-300" />
          </div>
          <h2 className="text-lg font-semibold text-white">No messages yet</h2>
          <p className="text-sm text-gray-400 mt-1">New messages will appear here</p>
        </div>
      )}
    </div>
  );
};

export default MessageCard;
