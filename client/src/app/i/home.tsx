'use client';

import { DateWidget } from './components/date.widget';
import { NotesWidget } from './components/notes.widget';
import { TaskPlannerWidget } from './components/task.planner.widget';
import { TasksWidget } from './components/tasks.widget';
import { Loader } from '@/components/ui/loaders/loader';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Home() {
  const { data, isLoading } = useGetProfile();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-5 gap-16">
      <DateWidget />
      <TaskPlannerWidget statistics={data?.statistics} />
      <NotesWidget />
      <TasksWidget statistics={data?.statistics} />
    </div>
  );
}
