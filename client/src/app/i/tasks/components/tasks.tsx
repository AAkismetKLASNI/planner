import { KanbanCard } from '../kanban-view/kanban.card';
import { ListRow } from '../list-view/list.row';
import { TypeView } from '../tasks.view';
import { filterTasks } from '../utils/filter.tasks';
import { Draggable } from '@hello-pangea/dnd';
import { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';

interface ITask {
  items: ITaskResponse[] | undefined;
  value: string;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
  view: TypeView;
}

export function Tasks({ items, value, setItems, view }: ITask) {
  return (
    <>
      {filterTasks(items, value)?.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {view === 'list' ? (
                <ListRow item={item} setItems={setItems} />
              ) : (
                <KanbanCard item={item} setItems={setItems} />
              )}
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
}
