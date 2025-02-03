'use client';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';

export function GlobalLoader() {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();

  return (
    <div
      className={`${isMutating || isFetching ? 'animate-pulse' : null} flex gap-2`}
    >
      <div className="w-4 h-4 bg-white/10 rounded-full"></div>
      <div className="w-4 h-4 bg-white/10 rounded-full"></div>
      <div className="w-4 h-4 bg-white/10 rounded-full"></div>
    </div>
  );
}
