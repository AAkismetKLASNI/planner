'use client';

import { COLUMNS, EnumColums } from '../colums.data';
import { useGetTasks } from '../hooks/use.get.tasks';
import { useTaskDnd } from '../hooks/use.task.dnd';
import { filterTasks } from '../utils/filter.tasks';
import { ListRowParent } from './list.row.parent';
import { DragDropContext } from '@hello-pangea/dnd';
import styles from '../styles/list.view.module.scss';

export function ListView() {
  const { tasks, setTasks } = useGetTasks();

  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.table}>
        <div className={styles.header}>
          <div>Task name</div>
          <div>Due date</div>
          <div>Priority</div>
        </div>

        <div className={styles.parentsWrapper}>
          {COLUMNS.map(({ label, value }) => {
            const items = filterTasks(tasks, value);

            if (value === EnumColums.OVERDUE && !items?.length) {
              return;
            }

            return (
              <ListRowParent
                key={label}
                items={items}
                label={label}
                value={value}
                setItems={setTasks}
              />
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
