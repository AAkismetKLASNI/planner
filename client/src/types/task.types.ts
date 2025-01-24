import { IBase } from './root.types';

export interface ITask extends IBase {
  name: string;
  isCompleted: boolean;
  priority?: Priority;
}

enum Priority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type TypeTaskFormState = Partial<Omit<ITask, 'id' | 'updatedAt'>>;
