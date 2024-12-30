import React from 'react';
import { format } from 'date-fns';
import CalendarDay from '../CalendarDay';
import type { CalendarPost } from '../../../types';

interface WeekViewProps {
  days: Date[];
  posts: Record<string, CalendarPost[]>;
}

const WeekView: React.FC<WeekViewProps> = ({ days, posts }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-4">
        {days.map((date) => (
          <div key={date.toString()} className="text-center">
            <div className="text-sm font-medium text-gray-500">
              {format(date, 'EEEE')}
            </div>
            <div className="text-lg font-semibold">
              {format(date, 'd')}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4">
        {days.map((date) => (
          <CalendarDay
            key={date.toString()}
            date={date}
            isCurrentMonth={true}
            posts={posts[date.toISOString().split('T')[0]] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekView;