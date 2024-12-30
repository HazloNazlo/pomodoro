import { startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

export function getCalendarDays(date: Date, view: 'month' | 'week' | 'day'): Date[] {
  switch (view) {
    case 'month': {
      const start = startOfWeek(startOfMonth(date));
      const end = endOfWeek(endOfMonth(date));
      return eachDayOfInterval({ start, end });
    }
    case 'week': {
      const start = startOfWeek(date);
      const end = endOfWeek(date);
      return eachDayOfInterval({ start, end });
    }
    case 'day':
      return [date];
  }
}

export function isCurrentMonth(date: Date, currentMonth: Date): boolean {
  return date.getMonth() === currentMonth.getMonth();
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}