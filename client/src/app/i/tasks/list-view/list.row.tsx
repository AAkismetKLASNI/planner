'use client';

import { useDeleteTask } from '../hooks/use.delete.task';
import { useTaskDebounce } from '../hooks/use.task.debounce';
import cn from 'clsx';
import { GripVertical, Trash } from 'lucide-react';
import { type Dispatch, type SetStateAction, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from '@/components/ui/checkbox';
import { TransparentField } from '@/components/ui/fields/transperent';
import { Loader } from '@/components/ui/loader/loader';
import { DatePicker } from '@/components/ui/task-edit/date-picker/date-picker';
import { SingleSelect } from '@/components/ui/task-edit/single-select';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import styles from '../styles/list.view.module.scss';

interface IListRow {
  item: ITaskResponse;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListRow({ item, setItems }: IListRow) {
  const { register, watch, control, setFocus } = useForm<TypeTaskFormState>({
    defaultValues: {
      name: item.name,
      createdAt: item.createdAt,
      isCompleted: item.isCompleted,
      priority: item.priority,
    },
  });
  useTaskDebounce({ watch, itemId: item.id });

  const { deleteTask, isDeletePending } = useDeleteTask();

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <div
      className={cn(
        styles.row,
        watch('isCompleted') ? styles.completed : '',
        'animation-opacity',
      )}
    >
      <div>
        <span className="inline-flex items-center gap-2.5 w-full">
          <button aria-describedby="todo-item">
            <GripVertical className={styles.grip} />
          </button>

          <Controller
            control={control}
            name="isCompleted"
            render={({ field: { value, onChange } }) => (
              <Checkbox checked={value} onChange={onChange} />
            )}
          />

          <TransparentField {...register('name')} />
        </span>
      </div>
      <div>
        <Controller
          control={control}
          name="createdAt"
          render={({ field: { value, onChange } }) => (
            <DatePicker value={value || ''} onChange={onChange} />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="priority"
          render={({ field: { value, onChange } }) => (
            <SingleSelect
              data={['high', 'medium', 'low'].map((item) => ({
                value: item,
                label: item,
              }))}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </div>
      <div>
        <button
          className="opacity-50 transition-opacity hover:opacity-100"
          onClick={() =>
            item.id !== 'mock'
              ? deleteTask(item.id)
              : setItems((prev) => prev?.slice(0, -1))
          }
        >
          {isDeletePending ? <Loader /> : <Trash size={17} />}
        </button>
      </div>
    </div>
  );
}
