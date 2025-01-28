'use client';

import { COLUMNS } from '../colums.data';
import { useGetTasks } from '../hooks/use.get.tasks';
import { useTaskDnd } from '../hooks/use.task.dnd';
import { KanbanColumnParent } from './kanban.column.parent';
import { DragDropContext } from '@hello-pangea/dnd';
import styles from './kanban.view.module.scss';

export function KanbanView() {
  const { tasks, setTasks } = useGetTasks();

  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        {COLUMNS.map((column) => (
          <KanbanColumnParent
            key={column.value}
            value={column.value}
            label={column.label}
            items={tasks}
            setItems={setTasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
