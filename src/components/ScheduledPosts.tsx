import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { Post } from '../types';
import Modal from './Modal';
import CreatePostForm from './CreatePostForm';

interface ScheduledPostsProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

const ScheduledPosts: React.FC<ScheduledPostsProps> = ({ posts, onEdit, onDelete }) => {
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleDelete = (id: string) => {
    setDeletingPostId(id);
  };

  const confirmDelete = () => {
    if (deletingPostId) {
      onDelete(deletingPostId);
      setDeletingPostId(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Scheduled Posts</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <div key={post.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={post.platforms.includes('facebook') ? faFacebookF : faTwitter}
                  className={post.platforms.includes('facebook') ? 'text-[#1877F2]' : 'text-[#1DA1F2]'}
                />
                <div>
                  <p className="text-sm text-gray-900">{post.title}</p>
                  <p className="text-xs text-gray-500">
                    Scheduled for {new Date(post.scheduledFor).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => handleEdit(post)}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button 
                  className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => handleDelete(post.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!editingPost}
        onClose={() => setEditingPost(null)}
        title="Edit Post"
      >
        {editingPost && (
          <CreatePostForm
            initialData={editingPost}
            onSubmit={onEdit}
            onClose={() => setEditingPost(null)}
          />
        )}
      </Modal>

      <Modal
        isOpen={!!deletingPostId}
        onClose={() => setDeletingPostId(null)}
        title="Delete Post"
      >
        <div className="p-6">
          <p className="text-gray-700 mb-6">Are you sure you want to delete this post?</p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setDeletingPostId(null)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduledPosts;