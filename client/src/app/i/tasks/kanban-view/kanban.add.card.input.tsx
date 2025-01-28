import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';

interface IListAddRowInput {
  filterDate?: string;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function KanbanAddCardInput({ setItems, filterDate }: IListAddRowInput) {
  const addCard = () => {
    setItems((prev) => {
      if (!prev) return;

      return [
        ...prev,
        { id: 'mock', name: '', isCompleted: false, createdAt: filterDate },
      ];
    });
  };

  return (
    <div className="mt-5 pb-5">
      <button onClick={addCard} className="italic opacity-40 text-sm">
        Add task...
      </button>
    </div>
  );
}
