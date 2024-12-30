import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MOSCOW_TIMEZONE } from './constants';

export function formatMonthYear(date: Date): string {
  const moscowDate = utcToZonedTime(date, MOSCOW_TIMEZONE);
  return format(moscowDate, 'MMMM yyyy');
}

export function formatScheduledDate(isoString: string | null): { date: string; time: string } {
  if (!isoString) {
    const now = new Date();
    return {
      date: format(now, 'yyyy-MM-dd'),
      time: format(now, 'HH:mm')
    };
  }
  
  try {
    const date = new Date(isoString);
    const moscowDate = utcToZonedTime(date, MOSCOW_TIMEZONE);
    
    return {
      date: format(moscowDate, 'yyyy-MM-dd'),
      time: format(moscowDate, 'HH:mm')
    };
  } catch (err) {
    console.error('Error formatting scheduled date:', err);
    const now = new Date();
    return {
      date: format(now, 'yyyy-MM-dd'),
      time: format(now, 'HH:mm')
    };
  }
}