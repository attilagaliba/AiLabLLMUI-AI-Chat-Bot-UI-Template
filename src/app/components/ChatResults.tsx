import React, { useState } from 'react';
import Image from 'next/image';
import {
  imageGenerationChat,
  userAnalysisChat,
  aiSearchChat,
  cacAnalysisChat,
  ltvAnalysisChat,
  marketingStrategyChat,
  productReviewChat,
  codeExampleChat,
  translationChat,
  aiFeaturesChat,
  jsExamplesChat
} from './ChatArea';

interface ChatResultsProps {
  onSelectChat: (messages: any[]) => void;
  onToggleVisibility: () => void;
}

const ChatResults: React.FC<ChatResultsProps> = ({ onSelectChat, onToggleVisibility }) => {
  return (
    <div className="flex flex-col h-screen animate-fade-in">
      {/* Üst Başlık */}
      <div className="flex justify-between items-center py-4 px-1">
        <div className="flex items-center gap-2">
          <button 
            onClick={onToggleVisibility}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">Chat Results</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Sohbet İçeriği */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        <div className="animate-slide-in-right">
          <h2 className="text-lg font-semibold mb-4">Today</h2>
          <div className="space-y-3">
            <div 
              onClick={() => onSelectChat(imageGenerationChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-all duration-200 cursor-pointer group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Image Generation</h3>
                  <p className="text-sm text-gray-500">Today • 16 October</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                  alt="Mountain"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                      alt="Thumbnail"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                      alt="Thumbnail"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white relative">
                    <Image
                      src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                      alt="Thumbnail"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                      +3
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-1">Parrot images</p>
                <p>Ara parrot, photorealistic, grey background</p>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(userAnalysisChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">User Analysis</h3>
                  <p className="text-sm text-gray-500">Today • 14:30</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(codeExampleChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">React Custom Hooks</h3>
                  <p className="text-sm text-gray-500">Today • 10:15</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(translationChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 5h7M2 9h7M2 13h4M13 17l-4-8M9 17h8M17 17l-4-8M21 5h-7M21 9h-7M21 13h-4"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Multi-Language Translation</h3>
                  <p className="text-sm text-gray-500">Today • 11:20</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(aiFeaturesChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 1 10 10c0 4.42-2.87 8.17-6.84 9.5-1.08.36-2.75.71-3.16-.73"/>
                    <path d="M2 10a10 10 0 0 1 10-8"/>
                    <path d="M12 2v10l6.36-3.18"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">AI Features Demo</h3>
                  <p className="text-sm text-gray-500">Today • 13:45</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(jsExamplesChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
                    <path d="M7 8h10M7 12h10M7 16h10"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">JavaScript Examples</h3>
                  <p className="text-sm text-gray-500">Today • 15:20</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
          <h2 className="text-lg font-semibold mb-4">Yesterday</h2>
          <div className="space-y-3">
            <div 
              onClick={() => onSelectChat(aiSearchChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">AI Search</h3>
                  <p className="text-sm text-gray-500">Yesterday • 16 October</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(cacAnalysisChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">How to decrease CAC?</h3>
                  <p className="text-sm text-gray-500">Customer acquisition cost could be decr...</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(ltvAnalysisChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10M18 20V4M6 20v-4"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">How to increase LTV?</h3>
                  <p className="text-sm text-gray-500">Lifetime value optimization strateg...</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
          <h2 className="text-lg font-semibold mb-4">Last Week</h2>
          <div className="space-y-3">
            <div 
              onClick={() => onSelectChat(marketingStrategyChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Marketing Strategy</h3>
                  <p className="text-sm text-gray-500">10 October • 15:45</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div 
              onClick={() => onSelectChat(productReviewChat)}
              className="bg-[#F8F9FC] hover:bg-[#F1F3F9] rounded-2xl p-4 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Product Review</h3>
                  <p className="text-sm text-gray-500">9 October • 11:20</p>
                </div>
                <button className="p-2 hover:bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatResults; 