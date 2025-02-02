import { TimeBlocking } from './time.blocking';
import type { Metadata } from 'next';
import { Heading } from '@/components/ui/heading/heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Time Blocks',
  ...NO_INDEX_PAGE,
};

export default function TimeBlocksPage() {
  return (
    <div>
      <Heading title="time-blocks" />
      <TimeBlocking />
    </div>
  );
}
