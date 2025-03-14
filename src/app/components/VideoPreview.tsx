import React from 'react';

interface VideoPreviewProps {
  videoSrc: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoSrc }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <video controls className="w-full h-auto">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreview;
