import React from 'react';
import type { Post } from '../../types';
import { PostItem } from './PostItem';
import { DeleteConfirmationModal } from '../modals/DeleteConfirmationModal';
import { EditPostModal } from '../modals/EditPostModal';
import { usePostActions } from '../../hooks/usePostActions';

interface PostListProps {
  title: string;
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
  type: 'scheduled' | 'draft';
}

export const PostList: React.FC<PostListProps> = ({ 
  title, 
  posts, 
  onEdit, 
  onDelete,
  type
}) => {
  const {
    editingPost,
    deletingPostId,
    handleEdit,
    handleDelete,
    handleCloseEdit,
    handleCloseDelete,
    confirmDelete
  } = usePostActions(onDelete);

  if (posts.length === 0) return null;

  return (
    <div className={`bg-white rounded-lg shadow ${type === 'draft' ? 'mt-8' : ''}`}>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            type={type}
            onEdit={() => handleEdit(post)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>

      <EditPostModal
        post={editingPost}
        isOpen={!!editingPost}
        onClose={handleCloseEdit}
        onSubmit={onEdit}
        type={type}
      />

      <DeleteConfirmationModal
        isOpen={!!deletingPostId}
        onClose={handleCloseDelete}
        onConfirm={confirmDelete}
        type={type}
      />
    </div>
  );
};