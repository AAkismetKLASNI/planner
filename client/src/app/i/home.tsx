'use client';

import { MainWidget } from './components/main.widget';
import { Loader } from '@/components/ui/loaders/loader';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Home() {
  const { data, isLoading } = useGetProfile();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      <MainWidget firstTask={data?.widgets?.firstTask} />
    </div>
  );
}
