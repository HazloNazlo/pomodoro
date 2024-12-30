import React from 'react';
import Modal from '../Modal';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: 'scheduled' | 'draft';
}

export const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  type
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Delete ${type === 'draft' ? 'Draft' : 'Post'}`}
    >
      <div className="p-6">
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this {type === 'draft' ? 'draft' : 'post'}?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};
