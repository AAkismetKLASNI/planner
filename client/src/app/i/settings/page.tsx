import { Settings } from './settings';
import type { Metadata } from 'next';
import { Heading } from '@/components/ui/heading/heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE,
};

export default function SettingsPage() {
  return (
    <div>
      <Heading title="settings" />
      <Settings />
    </div>
  );
}
