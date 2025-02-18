import type { IBase } from './root.types';

export interface ITaskResponse extends IBase {
  name: string;
  isCompleted: boolean;
  priority?: TaskPriority;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const taskPriority = {
  low: 'low',
  medium: 'medium',
  high: 'high',
} as const;

export type TaskPriority = (typeof taskPriority)[keyof typeof taskPriority];

export type TypeTaskFormState = Partial<
  Omit<ITaskResponse, 'id' | 'updatedAt'>
>;
