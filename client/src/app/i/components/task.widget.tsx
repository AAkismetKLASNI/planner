import { calculateDeadline } from '../helpers/calculate.deadline';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon/icon';
import { ITaskResponse } from '@/types/task.types';
import { DASHBOARD_PAGES } from '@/config/page-url.config';

interface Props {
  firstTask: ITaskResponse | undefined;
}

export function TaskWidget({ firstTask }: Props) {
  const deadline = calculateDeadline(firstTask?.createdAt);

  return (
    <div className="bg-secondary rounded-md py-4 px-2 space-y-4">
      <span className="bg-accent/60 text-xs py-1 px-2 rounded-full text-center">
        {new Date().toLocaleString('en-En', {
          day: 'numeric',
          month: 'long',
        })}
      </span>

      <Link
        href={DASHBOARD_PAGES.TASKS}
        className="block space-y-2 bg-bg/80 p-2 rounded-md col-span-2 cursor-pointer transition-transform hover:scale-95 group"
      >
        <div className="flex justify-between">
          <code className="text-white/20 transition-colors">{deadline}</code>
          <code className="text-white/20 transition-colors">
            {firstTask?.priority || 'None'}
          </code>
        </div>

        {firstTask ? (
          <div className="line-clamp-2 break-words">{firstTask?.name}</div>
        ) : (
          <Icon
            Icon={Plus}
            extra="block mx-auto"
            className="group-hover:opacity-100"
          />
        )}
      </Link>
    </div>
  );
}
