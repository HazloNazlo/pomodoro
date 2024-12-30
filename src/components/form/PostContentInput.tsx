import React from 'react';

interface PostContentInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostContentInput({ value, onChange }: PostContentInputProps) {
  return (
    <textarea
      className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom resize-none"
      placeholder="What's on your mind?"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}