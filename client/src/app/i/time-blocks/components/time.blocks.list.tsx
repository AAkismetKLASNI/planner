// import { calcHoursLeft } from '../calc-hours-left';
import { useGetTimeBlocks } from '../hooks/use.get.time.blocks';
import { useTimeBlockDnd } from '../hooks/use.time.block.dnd';
import { TimeBlock } from './time.block';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Loader } from '@/components/ui/loaders/loader';

export function TimeBlockingList() {
  const { items, setItems, isLoading } = useGetTimeBlocks();
  const { handleDragEnd, sensors } = useTimeBlockDnd({ items, setItems });

  if (isLoading) return <Loader />;

  // const { hoursLeft } = calcHoursLeft(items);

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div>
          <SortableContext
            items={items || []}
            strategy={verticalListSortingStrategy}
          >
            {items?.length ? (
              items?.map((item) => <TimeBlock key={item.id} item={item} />)
            ) : (
              <div>Add the first time-block on the right form</div>
            )}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}
