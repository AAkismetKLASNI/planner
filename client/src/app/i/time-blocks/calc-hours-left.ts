import { ITimeBlockResponse } from '@/types/time-block.types';

export const calcHoursLeft = (items: ITimeBlockResponse[] | undefined) => {
  const totalMinutes =
    (items && items.reduce((acc, item) => item.duration + acc, 0)) || 0;
  const totalHours = Math.floor(totalMinutes / 60);
  const hoursLeft = 24 - totalHours;

  return { hoursLeft };
};
