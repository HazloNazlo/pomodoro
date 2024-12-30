import React from 'react';

interface ScheduleInputsProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const ScheduleInputs: React.FC<ScheduleInputsProps> = ({
  date,
  time,
  onDateChange,
  onTimeChange
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Schedule for</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          className="block w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
        <input
          type="time"
          className="block w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ScheduleInputs;