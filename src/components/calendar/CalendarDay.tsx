import React from 'react';
import { format } from 'date-fns';
import { isToday } from '../../utils/dateUtils';
import type { CalendarPost } from '../../types';
import CalendarPost from './CalendarPost';
import clsx from 'clsx';

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  posts: CalendarPost[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, isCurrentMonth, posts }) => {
  const today = isToday(date);

  return (
    <div 
      className={clsx(
        "min-h-[120px] rounded-lg p-2 border border-gray-200 transition-all duration-200",
        today ? "bg-gray-100" : "bg-gray-50",
        "hover:bg-gray-100 hover:border-custom"
      )}
    >
      <span className={clsx(
        "text-sm",
        isCurrentMonth ? "text-gray-900" : "text-gray-400",
        today && "font-semibold"
      )}>
        {format(date, 'd')}
      </span>
      {posts.length > 0 && (
        <div className="mt-2 bg-custom/10 rounded p-1 cursor-pointer group relative hover:bg-custom/20 transition-all duration-200 hover:shadow-md">
          <span className="text-xs text-custom">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </span>
          <div className="hidden group-hover:block absolute z-10 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64 left-0 mt-2">
            <div className="space-y-3">
              {posts.map((post) => (
                <CalendarPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;