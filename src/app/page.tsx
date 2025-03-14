"use client";
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatResults from './components/ChatResults';
import ChatArea from './components/ChatArea';

export default function Home() {
  const [isChatResultsVisible, setIsChatResultsVisible] = useState(true);
  const [currentMessages, setCurrentMessages] = useState<any[]>([]);

  const handleSelectChat = (messages: any[]) => {
    setCurrentMessages(messages);
  };

  const handleToggleChatResults = () => {
    setIsChatResultsVisible(!isChatResultsVisible);
  };

  return (
    <main className="flex h-screen bg-gradient-to-br from-[#F8F7FC] to-[#F1EFFA] p-4">
      <div className="flex w-full gap-4 max-w-[1800px] mx-auto">
        <Sidebar />
        <div className="flex-1 flex gap-4 relative">
          {isChatResultsVisible && (
            <div className="w-[30%]">
              <ChatResults 
                onSelectChat={handleSelectChat}
                onToggleVisibility={handleToggleChatResults}
              />
            </div>
          )}

          {!isChatResultsVisible && (
            <button
              onClick={handleToggleChatResults}
              className="absolute left-4 top-6 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all group animate-fade-in"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Chat Results'ı Aç
              </span>
            </button>
          )}

          <div 
            className={`flex-1 transition-all duration-300 ease-in-out ${
              isChatResultsVisible ? 'ml-4' : 'ml-0'
            }`}
          >
            <ChatArea currentMessages={currentMessages} />
          </div>
        </div>
      </div>
    </main>
  );
}
