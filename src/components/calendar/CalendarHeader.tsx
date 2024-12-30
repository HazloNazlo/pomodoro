import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatMonthYear } from '../../utils/dateUtils';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onNewPost: () => void;
  view: 'month' | 'week' | 'day';
  onViewChange: (view: 'month' | 'week' | 'day') => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onNewPost,
  view,
  onViewChange
}) => {
  return (
    <div className="flex items-center gap-6 mb-8 flex-wrap">
      <div className="flex items-center gap-4 order-2">
        <button onClick={onPrevMonth} className="text-gray-600 hover:text-gray-900">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={onNextMonth} className="text-gray-600 hover:text-gray-900">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 order-3">{formatMonthYear(currentDate)}</h2>
      <h2 className="text-2xl font-bold text-gray-900 order-1">Content Calendar</h2>
      <div className="flex items-center space-x-2 ml-auto order-4">
        <button
          onClick={onNewPost}
          className="rounded-lg bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-custom/90"
        >
          New Post
        </button>
        <div className="flex bg-gray-100 rounded-lg p-1 ml-3">
          {(['month', 'week', 'day'] as const).map((viewType) => (
            <button
              key={viewType}
              onClick={() => onViewChange(viewType)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                view === viewType
                  ? 'bg-white shadow text-gray-700'
                  : 'text-gray-600'
              }`}
            >
              {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;