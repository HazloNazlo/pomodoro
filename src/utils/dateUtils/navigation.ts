import { addDays, addMonths, addWeeks, subDays, subMonths, subWeeks } from 'date-fns';

export function getPreviousDate(date: Date, view: 'month' | 'week' | 'day'): Date {
  switch (view) {
    case 'month':
      return subMonths(date, 1);
    case 'week':
      return subWeeks(date, 1);
    case 'day':
      return subDays(date, 1);
  }
}

export function getNextDate(date: Date, view: 'month' | 'week' | 'day'): Date {
  switch (view) {
    case 'month':
      return addMonths(date, 1);
    case 'week':
      return addWeeks(date, 1);
    case 'day':
      return addDays(date, 1);
  }
}