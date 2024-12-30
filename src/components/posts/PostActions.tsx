import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

interface PostActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const PostActions: React.FC<PostActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center space-x-2">
      <button 
        className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
        onClick={onEdit}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      <button 
        className="rounded-lg p-2 text-gray-400 hover:text-gray-500"
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};