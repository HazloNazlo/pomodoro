import React from 'react';
import CreatePostForm from './CreatePostForm';

const CreatePost: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Create Post</h2>
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;