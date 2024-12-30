import React, { useState } from 'react';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarGrid from '../components/calendar/CalendarGrid';
import Modal from '../components/Modal';
import CreatePostForm from '../components/CreatePostForm';
import { getCalendarDays, getNextDate, getPreviousDate } from '../utils/dateUtils';
import type { CalendarPost } from '../types';

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  // Sample posts data
  const posts: Record<string, CalendarPost[]> = {
    '2024-12-03': [
      {
        id: 'post-1',
        title: 'Instagram Post',
        description: 'New Product Launch',
        platform: 'instagram',
        scheduledFor: '2024-12-03 10:00:00'
      }
    ],
    '2024-12-05': [
      {
        id: 'post-2',
        title: 'Facebook Post',
        description: 'Weekly Update',
        platform: 'facebook',
        scheduledFor: '2024-12-05 14:00:00'
      }
    ]
  };

  const handlePrevDate = () => {
    setCurrentDate(getPreviousDate(currentDate, view));
  };

  const handleNextDate = () => {
    setCurrentDate(getNextDate(currentDate, view));
  };

  const calendarDays = getCalendarDays(currentDate, view);

  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CalendarHeader
            currentDate={currentDate}
            onPrevMonth={handlePrevDate}
            onNextMonth={handleNextDate}
            onNewPost={() => setIsCreatePostOpen(true)}
            view={view}
            onViewChange={setView}
          />
          <CalendarGrid
            days={calendarDays}
            currentMonth={currentDate}
            posts={posts}
            view={view}
          />
        </div>
      </div>

      <Modal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        title="Create Post"
      >
        <CreatePostForm
          onSubmit={() => setIsCreatePostOpen(false)}
          onSaveDraft={() => setIsCreatePostOpen(false)}
        />
      </Modal>
    </main>
  );
};

export default CalendarPage;