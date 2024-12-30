import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { Post } from '../types';
import Modal from './Modal';
import CreatePostForm from './CreatePostForm';

interface DraftsProps {
  drafts: Post[];
  onDelete: (id: string) => void;
  onEdit: (post: Post) => void;
}

const Drafts: React.FC<DraftsProps> = ({ drafts, onDelete, onEdit }) => {
  const [editingDraft, setEditingDraft] = useState<Post | null>(null);
  const [deletingDraftId, setDeletingDraftId] = useState<string | null>(null);

  if (drafts.length === 0) return null;

  const handleEdit = (draft: Post) => {
    setEditingDraft(draft);
  };

  const handleDelete = (id: string) => {
    setDeletingDraftId(id);
  };

  const confirmDelete = () => {
    if (deletingDraftId) {
      onDelete(deletingDraftId);
      setDeletingDraftId(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow mt-8">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Drafts</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {drafts.map((draft) => (
          <div key={draft.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900">{draft.title || 'Untitled Draft'}</p>
                <p className="text-xs text-gray-500">
                  Last edited {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => handleEdit(draft)}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button 
                  className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => handleDelete(draft.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!editingDraft}
        onClose={() => setEditingDraft(null)}
        title="Edit Draft"
      >
        {editingDraft && (
          <CreatePostForm
            initialData={editingDraft}
            onSubmit={onEdit}
            onSaveDraft={onEdit}
            onClose={() => setEditingDraft(null)}
          />
        )}
      </Modal>

      <Modal
        isOpen={!!deletingDraftId}
        onClose={() => setDeletingDraftId(null)}
        title="Delete Draft"
      >
        <div className="p-6">
          <p className="text-gray-700 mb-6">Are you sure you want to delete this draft?</p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setDeletingDraftId(null)}
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

export default Drafts;