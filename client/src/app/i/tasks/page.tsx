import { TasksView } from './tasks.view';
import type { Metadata } from 'next';
import { Heading } from '@/components/ui/heading/heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Tasks',
  ...NO_INDEX_PAGE,
};

export default function TasksPage() {
  return (
    <div>
      <Heading title="tasks" />
      <TasksView />
    </div>
  );
}
