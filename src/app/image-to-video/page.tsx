"use client";
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ImageUpload from '../components/ImageUpload';
import VideoPreview from '../components/VideoPreview';

export default function ImageToVideo() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleImageUpload = (images: File[]) => {
    setUploadedImages(images);
  };

  const handleGenerateVideo = async () => {
    // Logic to generate video from images
    // For now, we'll just simulate this with a timeout
    setTimeout(() => {
      setGeneratedVideo('path/to/generated/video.mp4');
    }, 2000);
  };

  return (
    <main className="flex h-screen bg-gradient-to-br from-[#F8F7FC] to-[#F1EFFA] p-4">
      <div className="flex w-full gap-4 max-w-[1800px] mx-auto">
        <Sidebar />
        <div className="flex-1 flex gap-4">
          <div className="w-1/2 flex flex-col gap-4 items-center">
            <ImageUpload onUpload={handleImageUpload} />
            <button
              onClick={handleGenerateVideo}
              className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              Generate Video
            </button>
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-center">
            {generatedVideo && (
              <div className="w-full max-w-3xl mt-4">
                <VideoPreview videoSrc={generatedVideo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
