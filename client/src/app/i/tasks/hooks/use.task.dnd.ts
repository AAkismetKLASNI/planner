import { EnumColums, FILTERS } from '../colums.data';
import { useUpdateTask } from './use.update.task';
import { DropResult } from '@hello-pangea/dnd';

export const useTaskDnd = () => {
  const { updateTask } = useUpdateTask();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const destinationColumnId = result.destination.droppableId;

    if (destinationColumnId === result.source.droppableId) return;

    if (destinationColumnId === EnumColums.COMPLETED) {
      updateTask({ id: result.draggableId, data: { isCompleted: true } });

      return;
    }

    const newCreatedAt = FILTERS[destinationColumnId].format();

    updateTask({
      id: result.draggableId,
      data: { createdAt: newCreatedAt, isCompleted: false },
    });
  };

  return { onDragEnd };
};
