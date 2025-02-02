import { useTaskDebounce } from './use.task.debounce';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';

export function useFormItem(item: ITaskResponse) {
  const { register, watch, control, setFocus } = useForm<TypeTaskFormState>({
    defaultValues: {
      name: item.name,
      createdAt: item.createdAt,
      isCompleted: item.isCompleted,
      priority: item.priority,
    },
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  useTaskDebounce({ watch, itemId: item.id });

  return { register, control };
}
