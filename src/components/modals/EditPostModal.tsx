import React from 'react';
import Modal from '../Modal';
import CreatePostForm from '../CreatePostForm';
import type { Post } from '../../types';

interface EditPostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Post) => void;
  type: 'scheduled' | 'draft';
}

export const EditPostModal: React.FC<EditPostModalProps> = ({
  post,
  isOpen,
  onClose,
  onSubmit,
  type
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Edit ${type === 'draft' ? 'Draft' : 'Post'}`}
    >
      {post && (
        <CreatePostForm
          initialData={post}
          onSubmit={onSubmit}
          onSaveDraft={type === 'draft' ? onSubmit : undefined}
          onClose={onClose}
        />
      )}
    </Modal>
  );
};
