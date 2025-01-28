import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';
import styles from './list.view.module.scss';

interface IListAddRowInput {
  filterDate?: string;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
  const addRow = () => {
    setItems((prev) => {
      if (!prev) return;

      return [
        ...prev,
        { id: 'mock', name: '', isCompleted: false, createdAt: filterDate },
      ];
    });
  };

  return (
    <div className={styles.addRow}>
      <button
        onClick={addRow}
        className="italic opacity-40 text-sm w-full text-left"
      >
        Add task...
      </button>
    </div>
  );
}
