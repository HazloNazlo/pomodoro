import { addMinutes } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { MOSCOW_TIMEZONE } from './constants';

export function getDefaultScheduleTime(): { date: string; time: string } {
  const now = new Date();
  const moscowDate = utcToZonedTime(now, MOSCOW_TIMEZONE);
  const thirtyMinutesLater = addMinutes(moscowDate, 30);
  
  return {
    date: format(thirtyMinutesLater, 'yyyy-MM-dd'),
    time: format(thirtyMinutesLater, 'HH:mm')
  };
}