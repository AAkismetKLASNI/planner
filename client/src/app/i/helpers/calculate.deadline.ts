import { FILTERS } from '../tasks/config/colums.data';
import dayjs from 'dayjs';

export const calculateDeadline = (date: string | undefined) => {
  if (!date) return 'No date';

  const deadline =
    (dayjs(date).isSame(FILTERS.today) && 'Today') ||
    (dayjs(date).isSame(FILTERS.tomorrow) && 'Tomorrow') ||
    (dayjs(date).isSame(FILTERS['on-this-week']) && 'On this week') ||
    (dayjs(date).isSame(FILTERS['on-next-week']) && 'On next week') ||
    (dayjs(date).isSame(FILTERS.later) && 'Later');

  return deadline;
};
