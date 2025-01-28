import { EnumColums, FILTERS } from './colums.data';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { ITaskResponse } from '@/types/task.types';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const filterTasks = (
  tasks: ITaskResponse[] | undefined,
  value: string,
) => {
  switch (value) {
    case EnumColums.TODAY:
      return tasks?.filter(
        (task) =>
          dayjs(task.createdAt).isSame(FILTERS.today, 'day') &&
          !task.isCompleted,
      );
    case EnumColums.TOMORROW:
      return tasks?.filter(
        (task) =>
          dayjs(task.createdAt).isSame(FILTERS.tomorrow, 'day') &&
          !task.isCompleted,
      );
    case EnumColums.ON_THIS_WEEK:
      return tasks?.filter(
        (task) =>
          dayjs(task.createdAt).isAfter(FILTERS.today, 'day') &&
          dayjs(task.createdAt).isAfter(FILTERS.tomorrow, 'day') &&
          dayjs(task.createdAt).isSameOrBefore(FILTERS['on-this-week']) &&
          !task.isCompleted,
      );
    case EnumColums.ON_NEXT_WEEK:
      return tasks?.filter(
        (task) =>
          dayjs(task.createdAt).isAfter(FILTERS['on-this-week']) &&
          dayjs(task.createdAt).isSameOrBefore(FILTERS['on-next-week']) &&
          !task.isCompleted,
      );
    case EnumColums.LATER:
      return tasks?.filter(
        (task) =>
          (dayjs(task.createdAt).isAfter(FILTERS['on-next-week']) ||
            !task.createdAt) &&
          !task.isCompleted,
      );
    case EnumColums.COMPLETED:
      return tasks?.filter((task) => task.isCompleted);

    default:
      return [];
  }
};
