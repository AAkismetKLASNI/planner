import { IOption } from '@/components/ui/single-select/single-select';
import { TaskPriority } from '@/types/task.types';

export interface IPriorityOption extends IOption {
  label: TaskPriority;
}

export const PRIORITY: IPriorityOption[] = [
  {
    label: 'high',
    value: '156, 43, 43',
  },
  {
    label: 'medium',
    value: '255, 128, 0',
  },
  {
    label: 'low',
    value: '0, 128, 255',
  },
];
