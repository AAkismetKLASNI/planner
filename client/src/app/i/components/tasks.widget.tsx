import { IProfileResponse } from '@/types/profile';

interface ITasksWidget {
  statistics?: IProfileResponse['statistics'];
}

export function TasksWidget({ statistics }: ITasksWidget) {
  return (
    <div className="bg-secondary col-span-1 rounded-3xl aspect-video p-layout flex flex-col justify-center">
      {statistics?.map(({ label, value }) => (
        <div className="flex gap-4 items-center tabular-nums" key={label}>
          <h2>{value}</h2>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
