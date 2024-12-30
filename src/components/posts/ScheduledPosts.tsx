import React from 'react';
import PostItem from './PostItem';
import type { Post } from '../../types';

interface ScheduledPostsProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

export function ScheduledPosts({ posts, onEdit, onDelete }: ScheduledPostsProps) {
  if (!posts.length) return null;

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Scheduled Posts</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            type="scheduled"
            onEdit={() => onEdit(post)}
            onDelete={() => onDelete(post.id)}
          />
        ))}
      </div>
    </div>
  );
}