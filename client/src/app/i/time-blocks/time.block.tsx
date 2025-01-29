'use client';

import { useDeleteTimeBlock } from './hooks/use.delete.time.block';
import { useTimeBlockSortable } from './hooks/use.time.block.sortable';
import { Edit, GripVertical, Trash } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { Loader } from '@/components/ui/loader/loader';
import {
  ITimeBlockResponse,
  TypeTimeBlockFormState,
} from '@/types/time-block.types';
import styles from './time.blocks.module.scss';

export function TimeBlock({ item }: { item: ITimeBlockResponse }) {
  const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
    item.id,
  );

  const { reset } = useFormContext<TypeTimeBlockFormState>();

  const { deleteTimeBlock, isDeletePending } = useDeleteTimeBlock();

  return (
    <div ref={setNodeRef} style={style}>
      <div
        className={styles.block}
        style={{
          backgroundColor: item.color || 'lightgray',
          height: `${item.duration}px`,
        }}
      >
        <div className="flex items-center">
          <button {...attributes} {...listeners} aria-describedby="time-block">
            <GripVertical className={styles.grip} />
          </button>
          <div>
            {item.name}{' '}
            <i className="text-xs opacity-50">({item.duration} min.)</i>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => {
              reset({
                id: item.id,
                color: item.color,
                duration: item.duration,
                name: item.name,
                order: item.order,
              });
            }}
            className="opacity-50 transition-opacity hover:opacity-100 mr-2"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => deleteTimeBlock(item.id)}
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            {isDeletePending ? <Loader /> : <Trash size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
