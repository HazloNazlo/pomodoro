import React from 'react';

const Calendar: React.FC = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = Array.from({ length: 42 }, (_, i) => {
    const day = i - 4; // Start from November 25
    return {
      date: day,
      posts: day === 3 || day === 5 || day === 9 || day === 12 || day === 16 ? Math.floor(Math.random() * 3) + 1 : 0
    };
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Calendar</h3>
      <div className="calendar-widget">
        <h4 className="text-lg font-medium text-gray-900 mb-4">December 2024</h4>
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium mb-4">
          {days.map((day) => (
            <div key={day} className="text-gray-600">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 mt-2">
          {dates.map((date, i) => (
            <div
              key={i}
              className={`p-2 text-center text-sm ${
                date.posts > 0 ? 'bg-custom/10 rounded-lg' : ''
              }`}
            >
              {date.date > 0 && date.date <= 31 ? date.date : ''}
              {date.posts > 0 && (
                <div className="text-xs text-custom">{date.posts}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;