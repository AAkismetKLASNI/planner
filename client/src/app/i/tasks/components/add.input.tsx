import { EnumColums } from '../colums.data';
import type { Dispatch, SetStateAction } from 'react';
import type { ITaskResponse } from '@/types/task.types';

interface IAddInput {
  filterDate?: string;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
  items: ITaskResponse[] | undefined;
  value: string;
  className: string;
}

export function AddInput({
  setItems,
  filterDate,
  value,
  items,
  className = '',
}: IAddInput) {
  const addInput = () => {
    setItems((prev) => {
      if (!prev) return;

      return [
        ...prev,
        { id: 'mock', name: '', isCompleted: false, createdAt: filterDate },
      ];
    });
  };

  return (
    <>
      {value !== EnumColums.COMPLETED &&
        value !== EnumColums.OVERDUE &&
        !items?.some((item) => item.id === 'mock') && (
          <div className={className}>
            <button
              onClick={addInput}
              className="italic opacity-40 text-sm w-full text-left"
            >
              Add task...
            </button>
          </div>
        )}
    </>
  );
}
