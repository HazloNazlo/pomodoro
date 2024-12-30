import React from 'react';
import type { Post } from '../../types';
import { PostActions } from './PostActions';
import { PostContent } from './PostContent';

interface PostItemProps {
  post: Post;
  type: 'scheduled' | 'draft';
  onEdit: () => void;
  onDelete: () => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, type, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <PostContent post={post} type={type} />
        <PostActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};
