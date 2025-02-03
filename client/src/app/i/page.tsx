import { Home } from './home';
import type { Metadata } from 'next';
import { Heading } from '@/components/ui/heading/heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Home',
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div>
      <Heading title="home" />
      <Home />
    </div>
  );
}
