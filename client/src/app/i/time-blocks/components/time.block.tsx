'use client';

import { useDeleteTimeBlock } from '../hooks/use.delete.time.block';
import { useTimeBlockSortable } from '../hooks/use.time.block.sortable';
import { Edit, GripVertical, Trash } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { Loader } from '@/components/ui/loaders/loader';
import {
  ITimeBlockResponse,
  TypeTimeBlockFormState,
} from '@/types/time-block.types';

export function TimeBlock({ item }: { item: ITimeBlockResponse }) {
  const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
    item.id,
  );

  const { reset } = useFormContext<TypeTimeBlockFormState>();

  const { deleteTimeBlock, isDeletePending } = useDeleteTimeBlock();

  return (
    <div
      ref={setNodeRef}
      className="rounded-lg mb-3 px-2 py-8 relative flex items-center justify-between gap-2"
      style={{
        ...style,
        backgroundColor: item.color || 'royalblue',
      }}
    >
      <i className="text-xs opacity-70 absolute top-2 left-2">
        ({item.duration} min.)
      </i>

      <div className="flex items-center gap-2">
        <button {...attributes} {...listeners} aria-describedby="time-block">
          <GripVertical className="opacity-25 transition-opacity hover:opacity-100 active:opacity-100 " />
        </button>

        <div className="break-all">{item.name}</div>
      </div>

      <div className="flex items-center gap-2">
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
          className="opacity-70 transition-opacity hover:opacity-100 mr-2"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => deleteTimeBlock(item.id)}
          className="opacity-70 transition-opacity hover:opacity-100"
        >
          {isDeletePending ? <Loader /> : <Trash size={16} />}
        </button>
      </div>
    </div>
  );
}
