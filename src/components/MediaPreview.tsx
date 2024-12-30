import React from 'react';
import clsx from 'clsx';

interface MediaPreviewProps {
  media: File[];
}

const MediaPreview: React.FC<MediaPreviewProps> = ({ media }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {media.map((file, index) => (
        <div
          key={index}
          className={clsx(
            "relative aspect-square rounded-lg overflow-hidden",
            "border border-gray-200"
          )}
        >
          <img
            src={URL.createObjectURL(file)}
            alt={`Selected media ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MediaPreview;