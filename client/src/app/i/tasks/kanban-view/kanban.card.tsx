'use client';

import { EnumColums } from '../colums.data';
import { useDeleteTask } from '../hooks/use.delete.task';
import { useFormItem } from '../hooks/use.form.item';
import cn from 'clsx';
import { GripVertical, Trash } from 'lucide-react';
import { type Dispatch, type SetStateAction } from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from '@/components/ui/checkbox';
import { TransparentField } from '@/components/ui/fields/transperent';
import { Loader } from '@/components/ui/loader/loader';
import { DatePicker } from '@/components/ui/task-edit/date-picker/date-picker';
import { SingleSelect } from '@/components/ui/task-edit/single-select';
import type { ITaskResponse } from '@/types/task.types';
import stylesKanban from '../styles/kanban.view.module.scss';
import stylesItem from '../styles/task.view.module.scss';

interface IKanbanCard {
  item: ITaskResponse;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
  value: string;
}

export function KanbanCard({ item, setItems, value }: IKanbanCard) {
  const { control, register } = useFormItem(item);
  const { deleteTask, isDeletePending } = useDeleteTask();

  return (
    <div
      className={cn(
        stylesKanban.card,
        value === EnumColums.COMPLETED ? stylesItem.completed : '',
        value === EnumColums.OVERDUE ? stylesItem.overdue : '',
        'animation-opacity',
      )}
    >
      <div className={stylesKanban.cardHeader}>
        <button aria-describedby="todo-item">
          <GripVertical className={stylesKanban.grip} />
        </button>

        <Controller
          control={control}
          name="isCompleted"
          render={({ field: { value, onChange } }) => (
            <Checkbox onChange={onChange} checked={value} />
          )}
        />

        <TransparentField {...register('name')} />
      </div>

      <div className={stylesKanban.cardBody}>
        <Controller
          control={control}
          name="createdAt"
          render={({ field: { value, onChange } }) => (
            <DatePicker
              onChange={onChange}
              value={value || ''}
              position="left"
            />
          )}
        />

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

      <div className={stylesKanban.cardActions}>
        <button
          onClick={() =>
            item.id !== 'mock'
              ? deleteTask(item.id)
              : setItems((prev) => prev?.slice(0, -1))
          }
          className="opacity-50 transition-opacity hover:opacity-100"
        >
          {isDeletePending ? <Loader /> : <Trash size={15} />}
        </button>
      </div>
    </div>
  );
}
