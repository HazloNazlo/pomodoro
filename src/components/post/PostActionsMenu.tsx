import React, { useRef, useState, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import clsx from 'clsx';

interface PostAction {
  label: string;
  onClick: () => void;
  variant?: 'danger' | 'default';
}

interface PostActionsMenuProps {
  actions?: PostAction[];
}

const defaultActions: PostAction[] = [
  { label: 'Publish Now', onClick: () => console.log('Publish Now clicked') },
  { label: 'Edit', onClick: () => console.log('Edit clicked') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
  { label: 'Update Category', onClick: () => console.log('Update Category clicked') },
  { label: 'Share', onClick: () => console.log('Share clicked') },
  { label: 'Preview', onClick: () => console.log('Preview clicked') },
  { label: 'Change History', onClick: () => console.log('Change History clicked') },
  { 
    label: 'Delete', 
    onClick: () => console.log('Delete clicked'),
    variant: 'danger'
  }
];

const PostActionsMenu: React.FC<PostActionsMenuProps> = ({ actions = defaultActions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="More actions"
      >
        <MoreVertical className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                className={clsx(
                  'w-full text-left px-4 py-2 text-sm',
                  action.variant === 'danger' 
                    ? 'text-red-600 hover:bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50',
                  'transition-colors duration-150'
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostActionsMenu;