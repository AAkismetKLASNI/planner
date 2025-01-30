'use client';

import { Loader } from '@/components/ui/loader/loader';
import { useGetProfile } from '@/hooks/use.get.profile';

export function Statistics() {
  const { data, isLoading } = useGetProfile();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-4 gap-20 mt-8">
      {data?.statistics.map(({ label, value }) => (
        <div
          key={label}
          className="border-4 border-border bg-[#000]/10 text-center aspect-square flex justify-center items-center flex-col gap-2 rounded-full hover:-translate-y-3 transition-transform"
        >
          <div className="text-xl">{label}</div>
          <div className="text-4xl">{value}</div>
        </div>
      ))}
    </div>
  );
}
