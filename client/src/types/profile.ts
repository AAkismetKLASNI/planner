import type { IUser } from './auth.types';
import { ITaskResponse } from './task.types';

export interface IProfileResponse {
  user: IUser;
  widgets: {
    firstTask: ITaskResponse;
    statistics: [{ label: string; value: number }];
  };
}
