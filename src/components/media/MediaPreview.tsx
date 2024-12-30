import React from 'react';
import clsx from 'clsx';

interface MediaPreviewProps {
  media: File[];
  existingUrls?: string[];
}

export default function MediaPreview({ media, existingUrls = [] }: MediaPreviewProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {existingUrls.map((url, index) => (
        <div
          key={`existing-${index}`}
          className={clsx(
            "relative aspect-square rounded-lg overflow-hidden",
            "border border-gray-200"
          )}
        >
          <img
            src={url}
            alt={`Existing media ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {media.map((file, index) => (
        <div
          key={`new-${index}`}
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
}