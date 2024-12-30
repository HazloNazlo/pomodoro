import React from 'react';
import PostActionsMenu from '../post/PostActionsMenu';
import type { CalendarPost as CalendarPostType } from '../../types';

interface CalendarPostProps {
  post: CalendarPostType;
}

const CalendarPost: React.FC<CalendarPostProps> = ({ post }) => {
  return (
    <div className="border-b last:border-b-0 pb-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">{post.title}</p>
          <p className="text-xs text-gray-500">{post.description}</p>
        </div>
        <PostActionsMenu />
      </div>
    </div>
  );
};

export default CalendarPost;