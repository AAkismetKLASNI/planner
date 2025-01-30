'use client';

import { FILTERS } from '../colums.data';
import { AddInput } from '../components/add.input';
import { Tasks } from '../components/tasks';
import { Droppable } from '@hello-pangea/dnd';
import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';
import styles from '../styles/list.view.module.scss';

interface IListRowParent {
  value: string;
  label: string;
  items: ITaskResponse[] | undefined;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListRowParent({
  items,
  label,
  setItems,
  value,
}: IListRowParent) {
  return (
    <Droppable droppableId={value}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div className={styles.colHeading}>
            <div className="w-full">{label}</div>
          </div>

          <Tasks items={items} value={value} setItems={setItems} view="list" />

          {provided.placeholder}

          <AddInput
            items={items}
            setItems={setItems}
            value={value}
            className="py-2 px-4"
            filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
          />
        </div>
      )}
    </Droppable>
  );
}
