'use client';

import { COLUMNS, EnumColums } from '../config/colums.data';
import { useGetTasks } from '../hooks/use.get.tasks';
import { useTaskDnd } from '../hooks/use.task.dnd';
import { filterTasks } from '../utils/filter.tasks';
import { KanbanColumnParent } from './kanban.column.parent';
import { DragDropContext } from '@hello-pangea/dnd';
import styles from '../styles/kanban.view.module.scss';

export function KanbanView() {
  const { tasks, setTasks } = useGetTasks();

  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        {COLUMNS.map(({ label, value }) => {
          const items = filterTasks(tasks, value);

          if (value === EnumColums.OVERDUE && !items?.length) {
            return;
          }

          return (
            <KanbanColumnParent
              key={value}
              value={value}
              label={label}
              items={items}
              setItems={setTasks}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
}
