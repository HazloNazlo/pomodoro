import React from 'react';
import MonthView from './views/MonthView';
import WeekView from './views/WeekView';
import DayView from './views/DayView';
import type { CalendarPost } from '../../types';

interface CalendarGridProps {
  days: Date[];
  currentMonth: Date;
  posts: Record<string, CalendarPost[]>;
  view: 'month' | 'week' | 'day';
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ days, currentMonth, posts, view }) => {
  if (view === 'day') {
    return (
      <DayView
        date={days[0]}
        posts={posts[days[0].toISOString().split('T')[0]] || []}
      />
    );
  }

  if (view === 'week') {
    return <WeekView days={days} posts={posts} />;
  }

  return (
    <MonthView
      days={days}
      currentMonth={currentMonth}
      posts={posts}
    />
  );
};

export default CalendarGrid;