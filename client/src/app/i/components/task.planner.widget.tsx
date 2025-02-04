import '../../../types/root.types';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { IProfileResponse } from '@/types/profile';
import { DASHBOARD_PAGES } from '@/config/page-url.config';

interface ITaskPlannerWidget {
  statistics?: IProfileResponse['statistics'];
}

export function TaskPlannerWidget({ statistics }: ITaskPlannerWidget) {
  const total =
    statistics?.length &&
    statistics.find((item) => item.label === 'Total')?.value;

  const calculatePercentTasks = (total: number) => {
    const completedTasks =
      statistics?.find((item) => item.label === 'Completed tasks')?.value || 0;

    return `${Math.floor((completedTasks / total) * 100)}%`;
  };

  return (
    <div className="p-layout col-span-2 bg-secondary rounded-3xl relative text-balance flex flex-col justify-between">
      {total ? (
        <>
          <div>
            <h2>{calculatePercentTasks(total)}</h2>
            <div>of tasks completed</div>
          </div>
          <div>
            <h2>{calculatePercentTasks(total)}</h2>
            <div>of tasks completed</div>
          </div>
        </>
      ) : (
        <h3>You have not planned anything yet</h3>
      )}
      <Link
        href={DASHBOARD_PAGES.TASKS}
        className="absolute bottom-7 right-7 p-4 bg-accent flex justify-center items-center rounded-full cursor-pointer hover:bg-enhancer duration-100"
      >
        <Plus />
      </Link>
    </div>
  );
}
