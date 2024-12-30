import { useState } from 'react';
import type { Post } from '../types';

export const usePostActions = (onDelete: (id: string) => void) => {
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleDelete = (id: string) => {
    setDeletingPostId(id);
  };

  const handleCloseEdit = () => {
    setEditingPost(null);
  };

  const handleCloseDelete = () => {
    setDeletingPostId(null);
  };

  const confirmDelete = () => {
    if (deletingPostId) {
      onDelete(deletingPostId);
      setDeletingPostId(null);
    }
  };

  return {
    editingPost,
    deletingPostId,
    handleEdit,
    handleDelete,
    handleCloseEdit,
    handleCloseDelete,
    confirmDelete
  };
};