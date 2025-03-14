import React from 'react';

export default function ChatInput() {
  return (
    <div className="flex items-center border-t border-gray-300 p-4">
      <input 
        type="text"
        placeholder="Ask me anything..."
        className="flex-1 border-none focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 ml-4 rounded">
        Send
      </button>
    </div>
  );
} 