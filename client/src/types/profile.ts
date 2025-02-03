import type { IUser } from './auth.types';

export interface IProfileResponse {
  user: IUser;
  statistics: [{ label: string; value: number }];
}
