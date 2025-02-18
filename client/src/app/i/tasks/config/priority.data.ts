import { IOption } from '@/components/ui/single-select/single-select';
import { TaskPriority } from '@/types/task.types';

export interface IPriorityOption extends IOption {
  label: TaskPriority;
}

export const PRIORITY: IPriorityOption[] = [
  {
    label: 'high',
    value: 'bg-[#c71d1c]',
  },
  {
    label: 'medium',
    value: 'bg-[#dd992b]',
  },
  {
    label: 'low',
    value: 'bg-[#0048ab]',
  },
];
