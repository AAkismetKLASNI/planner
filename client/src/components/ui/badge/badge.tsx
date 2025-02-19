import type { PropsWithChildren } from 'react';

interface IBadge {
  color: string | undefined;
  onClick?: () => void;
}

// fix: решить что-то с RGB

export function Badge({ children, color, onClick }: PropsWithChildren<IBadge>) {
  return (
    <span
      onClick={onClick}
      style={{ backgroundColor: `rgba(${color}, 0.2)` }}
      className={`rounded-lg w-max py-1 px-2 font-semibold text-sm transition cursor-pointer`}
    >
      {children}
    </span>
  );
}
