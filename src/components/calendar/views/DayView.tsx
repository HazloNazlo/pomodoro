import React from 'react';
import { format } from 'date-fns';
import type { CalendarPost } from '../../../types';

interface DayViewProps {
  date: Date;
  posts: CalendarPost[];
}

const DayView: React.FC<DayViewProps> = ({ date, posts }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">
        {format(date, 'EEEE, MMMM d, yyyy')}
      </h3>
      <div className="space-y-2">
        {hours.map((hour) => {
          const hourPosts = posts.filter(post => {
            const postHour = new Date(post.scheduledFor).getHours();
            return postHour === hour;
          });

          return (
            <div
              key={hour}
              className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-20 text-sm text-gray-500">
                {format(new Date().setHours(hour, 0), 'h:mm a')}
              </div>
              <div className="flex-1 min-h-[2rem]">
                {hourPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-custom/10 rounded-lg p-2 mb-2"
                  >
                    <div className="text-sm font-medium">{post.title}</div>
                    <div className="text-xs text-gray-500">{post.description}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayView;