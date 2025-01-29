import { Pomodoro } from './pomodoro';
import type { Metadata } from 'next';
import { Heading } from '@/components/ui/heading/heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Pomodoro',
  ...NO_INDEX_PAGE,
};

export default function PomodoroPage() {
  return (
    <div>
      <Heading title="Pomodoro timer" />
      <Pomodoro />
    </div>
  );
}
