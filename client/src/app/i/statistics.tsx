'use client';

import { useGetProfile } from '@/hooks/use.get.profile';

export function Statistics() {
  const { data, isLoading } = useGetProfile();

  return (
    <div className="grid grid-cols-4 gap-20 mt-8">
      {isLoading
        ? [1, 2, 3, 4].map((id) => {
            return (
              <div
                key={id}
                className="bg-border/5 text-center rounded-lg p-layout animate-pulse"
              >
                <div className="h-6 bg-border/10 rounded mb-6"></div>
                <div className="h-8 bg-border/10 rounded"></div>
              </div>
            );
          })
        : data?.statistics.map(({ label, value }) => (
            <div
              key={label}
              className="bg-border/5 text-center rounded-lg p-layout hover:-translate-y-3 transition-transform"
            >
              <div className="text-xl">{label}</div>
              <div className="text-3xl">{value}</div>
            </div>
          ))}
    </div>
  );
}
