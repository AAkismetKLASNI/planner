'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Loader } from '@/components/ui/loaders/loader';
import { DASHBOARD_PAGES } from '@/config/page-url.config';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Home() {
  const { data, isLoading } = useGetProfile();

  if (isLoading) return <Loader />;

  const total = data?.statistics.find((item) => item.label === 'Total')?.value;

  return (
    <div className="grid grid-cols-5 gap-20 mt-8">
      <div className="p-layout aspect-square bg-gradient-to-br from-accent from-50% to-enhancer to-50% rounded-3xl flex justify-center flex-col gap-2 items-center text-center">
        <h1>
          {new Date().toLocaleString('en-En', {
            day: 'numeric',
            month: 'long',
          })}
        </h1>
        <span>Time to work</span>
      </div>

      <div className="p-layout col-span-2 bg-secondary rounded-3xl relative">
        <h1>{total ? total : 'You have not planned anything yet'}</h1>
        <Link
          href={DASHBOARD_PAGES.TASKS}
          className="absolute bottom-7 right-7 p-4 bg-accent flex justify-center items-center rounded-full cursor-pointer hover:bg-enhancer duration-100"
        >
          <Plus />
        </Link>
      </div>
    </div>
  );
}
