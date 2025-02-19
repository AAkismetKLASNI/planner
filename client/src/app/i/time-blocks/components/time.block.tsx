'use client';

// feat: к слову, не знаю как, но для мобильных версий можно будет сделеть возможный свап влево блоков, чтобы удалить или изменить их как в ТГ с чатами
import { useDeleteTimeBlock } from '../hooks/use.delete.time.block';
import { useTimeBlockSortable } from '../hooks/use.time.block.sortable';
import { Edit, GripVertical, Trash } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { Icon } from '@/components/ui/icon/icon';
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
      style={{
        ...style,
        borderColor: `rgb(${item.color})`,
        backgroundColor: `rgba(${item.color}, 0.2)`,
      }}
      className={`border-l-4 backdrop-blur-lg rounded-lg mb-3 px-2 py-8 relative flex items-center justify-between gap-2`}
    >
      <i className="text-xs opacity-70 absolute top-2 left-2">
        ({item.duration} min.)
      </i>

      <div className="flex items-center gap-2">
        <Icon
          Icon={GripVertical}
          {...attributes}
          {...listeners}
          aria-describedby="time-block"
        />

        <div className="break-all">{item.name}</div>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          Icon={Edit}
          size="16"
          onClick={() => {
            reset({
              id: item.id,
              color: item.color,
              duration: item.duration,
              name: item.name,
              order: item.order,
            });
          }}
        />

        {isDeletePending ? (
          <Loader />
        ) : (
          <Icon
            Icon={Trash}
            size="16"
            onClick={() => deleteTimeBlock(item.id)}
          />
        )}
      </div>
    </div>
  );
}
