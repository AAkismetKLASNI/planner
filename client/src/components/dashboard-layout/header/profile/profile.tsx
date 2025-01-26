'use client';

import { GlobalLoader } from './global.loader';
import { Loader } from '@/components/ui/loader/loader';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Profile() {
  const { data, isLoading } = useGetProfile();

  return (
    <div className="absolute top-big-layout right-big-layout">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-bold">{data?.user.name}</p>
            <p className="text-sm opacity-40">{data?.user.email}</p>
          </div>
          <div className="h-10 w-10 rounded bg-white/20 flex justify-center items-center">
            {data?.user.name?.charAt(0) || 'X'}
          </div>
        </div>
      )}
    </div>
  );
}
