import { 
  addMinutes,
  addMonths,
  subMonths, 
  format, 
  isToday as dateFnsIsToday, 
  isSameMonth,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval
} from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

const MOSCOW_TIMEZONE = 'Europe/Moscow';

export function getPreviousDate(currentDate: Date): Date {
  return subMonths(currentDate, 1);
}

export function getNextDate(currentDate: Date): Date {
  return addMonths(currentDate, 1);
}

export function getCalendarDays(month: Date = new Date()): Date[] {
  const start = startOfWeek(startOfMonth(month));
  const end = endOfWeek(endOfMonth(month));
  
  return eachDayOfInterval({ start, end });
}

export function isCurrentMonth(date: Date): boolean {
  const today = new Date();
  return isSameMonth(date, today);
}

export function isToday(date: Date): boolean {
  return dateFnsIsToday(date);
}

export function formatMonthYear(date: Date): string {
  return format(date, 'MMMM yyyy');
}

export function getDefaultScheduleTime(): { date: string; time: string } {
  const now = new Date();
  const moscowDate = utcToZonedTime(now, MOSCOW_TIMEZONE);
  const thirtyMinutesLater = addMinutes(moscowDate, 30);
  
  return {
    date: format(thirtyMinutesLater, 'yyyy-MM-dd'),
    time: format(thirtyMinutesLater, 'HH:mm')
  };
}

export function formatScheduledDate(isoString: string | null): { date: string; time: string } | null {
  if (!isoString) return null;
  
  try {
    const date = new Date(isoString);
    const moscowDate = utcToZonedTime(date, MOSCOW_TIMEZONE);
    
    return {
      date: format(moscowDate, 'yyyy-MM-dd'),
      time: format(moscowDate, 'HH:mm')
    };
  } catch (err) {
    console.error('Error formatting scheduled date:', err);
    return null;
  }
}
