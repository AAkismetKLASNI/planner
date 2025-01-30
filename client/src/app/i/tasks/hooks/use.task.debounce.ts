import { useCreateTask } from './use.create.task';
import { useUpdateTask } from './use.update.task';
import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { TypeTaskFormState } from '@/types/task.types';

interface IUseTaskDebounce {
  watch: UseFormWatch<TypeTaskFormState>;
  itemId: string;
}

export const useTaskDebounce = ({ watch, itemId }: IUseTaskDebounce) => {
  const { createTask } = useCreateTask();
  const { updateTask } = useUpdateTask();

  const debounceCreateTask = useCallback(
    debounce((formData: TypeTaskFormState) => {
      createTask(formData);
    }, 400),
    [],
  );

  const debounceUpdateTask = useCallback(
    debounce(
      (formData: TypeTaskFormState) =>
        updateTask({ id: itemId, data: formData }),
      400,
    ),
    [],
  );

  useEffect(() => {
    const { unsubscribe } = watch((formData) => {
      const name = formData.name?.trim();

      if (itemId !== 'mock' && name) {
        debounceUpdateTask({
          ...formData,
          name,
          priority: formData.priority || undefined,
        });
      } else if (name) {
        debounceCreateTask({ ...formData, name });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [debounceCreateTask, debounceUpdateTask, watch]);
};
