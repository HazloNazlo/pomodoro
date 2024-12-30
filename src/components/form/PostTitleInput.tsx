import React from 'react';

interface PostTitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostTitleInput({ value, onChange }: PostTitleInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-custom focus:border-custom"
      placeholder="Post title"
    />
  );
}