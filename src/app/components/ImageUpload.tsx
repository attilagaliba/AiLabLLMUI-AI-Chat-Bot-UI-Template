import React, { useState } from 'react';

interface ImageUploadProps {
  onUpload: (images: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      onUpload(filesArray);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="flex flex-wrap gap-2">
        {selectedFiles.map((file, index) => (
          <div key={index} className="w-24 h-24 bg-gray-200 flex items-center justify-center">
            <img src={URL.createObjectURL(file)} alt={`preview-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
