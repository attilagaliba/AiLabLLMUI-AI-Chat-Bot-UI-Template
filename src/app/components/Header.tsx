import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4">
      <h1 className="text-xl font-bold">Chat Results</h1>
      <button className="text-blue-500">+ New Chat</button>
    </header>
  );
} 