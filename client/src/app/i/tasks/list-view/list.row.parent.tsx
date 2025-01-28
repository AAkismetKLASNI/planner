'use client';

import { EnumColums, FILTERS } from '../colums.data';
import { filterTasks } from '../filter.tasks';
import { ListAddRowInput } from './list.add.row.input';
import { ListRow } from './list.row';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';
import styles from './list.view.module.scss';

interface IListRowParent {
  value: string;
  label: string;
  items: ITaskResponse[];
  setItems: Dispatch<SetStateAction<ITaskResponse[]>>;
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

          {items &&
            filterTasks(items, value).map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListRow item={item} setItems={setItems} />
                    </div>
                  )}
                </Draggable>
              );
            })}

          {provided.placeholder}

          {value !== EnumColums.COMPLETED &&
            !items?.some((item) => item.id === 'mock') && (
              <ListAddRowInput
                setItems={setItems}
                filterDate={
                  FILTERS[value] ? FILTERS[value].format() : undefined
                }
              />
            )}
        </div>
      )}
    </Droppable>
  );
}
