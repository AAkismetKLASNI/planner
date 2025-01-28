import type { IBase } from './root.types';

export interface ITaskResponse extends IBase {
  name: string;
  isCompleted: boolean;
  priority?: Priority;
}

enum Priority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type TypeTaskFormState = Partial<
  Omit<ITaskResponse, 'id' | 'updatedAt'>
>;
