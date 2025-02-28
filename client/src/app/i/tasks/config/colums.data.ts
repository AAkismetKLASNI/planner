import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export enum EnumColums {
  'OVERDUE' = 'overdue',
  'TODAY' = 'today',
  'TOMORROW' = 'tomorrow',
  'ON_THIS_WEEK' = 'on-this-week',
  'ON_NEXT_WEEK' = 'on-next-week',
  'LATER' = 'later',
  'COMPLETED' = 'completed',
}

export const FILTERS = {
  overdue: dayjs().subtract(1, 'day').endOf('day'),
  today: dayjs().startOf('day'),
  tomorrow: dayjs().add(1, 'day').startOf('day'),
  'on-this-week': dayjs().endOf('isoWeek'),
  'on-next-week': dayjs().add(1, 'week').startOf('day'),
  later: dayjs().add(2, 'week').startOf('day'),
};

export const COLUMNS = [
  { label: 'Overdue', value: EnumColums.OVERDUE },
  { label: 'Today', value: EnumColums.TODAY },
  { label: 'Tomorrow', value: EnumColums.TOMORROW },
  { label: 'On this week', value: EnumColums.ON_THIS_WEEK },
  { label: 'On next week', value: EnumColums.ON_NEXT_WEEK },
  { label: 'Later', value: EnumColums.LATER },
  { label: 'Completed', value: EnumColums.COMPLETED },
];
