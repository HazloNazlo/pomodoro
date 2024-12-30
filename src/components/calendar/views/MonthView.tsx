import React from 'react';
import CalendarDay from '../CalendarDay';
import { isCurrentMonth } from '../../../utils/dateUtils';
import type { CalendarPost } from '../../../types';

interface MonthViewProps {
  days: Date[];
  currentMonth: Date;
  posts: Record<string, CalendarPost[]>;
}

const MonthView: React.FC<MonthViewProps> = ({ days, currentMonth, posts }) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <div className="grid grid-cols-7 gap-3 mb-6">
        {weekDays.map((day) => (
          <div key={day} className="text-sm font-medium text-gray-500 text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-6">
        {days.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            isCurrentMonth={isCurrentMonth(date, currentMonth)}
            posts={posts[date.toISOString().split('T')[0]] || []}
          />
        ))}
      </div>
    </>
  );
};

export default MonthView;