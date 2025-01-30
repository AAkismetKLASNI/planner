'use client';

import { FILTERS } from '../colums.data';
import { AddInput } from '../components/add.input';
import { Tasks } from '../components/tasks';
import { Droppable } from '@hello-pangea/dnd';
import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';
import styles from '../styles/kanban.view.module.scss';

interface IKanbanColumnParent {
  value: string;
  label: string;
  items: ITaskResponse[] | undefined;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function KanbanColumnParent({
  items,
  label,
  setItems,
  value,
}: IKanbanColumnParent) {
  return (
    <Droppable droppableId={value}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div className={styles.column}>
            <div className={styles.columnHeading}>{label}</div>

            <Tasks
              items={items}
              setItems={setItems}
              value={value}
              view="kanban"
            />

            {provided.placeholder}

            <AddInput
              items={items}
              setItems={setItems}
              value={value}
              className="mt-5 pb-5"
              filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
            />
          </div>
        </div>
      )}
    </Droppable>
  );
}
