'use client';

import { Loader } from '@/components/ui/loaders/loader';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Profile() {
  const { data, isLoading } = useGetProfile();

  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center flex-col gap-4 p-layout">
          <div className="h-12 w-12 rounded-full bg-white/5 flex justify-center items-center">
            {data?.user.name?.charAt(0) || 'X'}
          </div>
          <div className="w-40">
            <p className="font-bold text-center overflow-hidden overflow-ellipsis">
              {data?.user.name}
            </p>
            <p className="text-sm opacity-40 text-center overflow-hidden overflow-ellipsis">
              {data?.user.email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
