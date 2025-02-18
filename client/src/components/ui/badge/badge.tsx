import type { PropsWithChildren } from 'react';

// fix: удалить если что
// import { tv } from 'tailwind-variants';

interface IBadge {
  color: string | undefined;
  onClick?: () => void;
}

export function Badge({ children, color, onClick }: PropsWithChildren<IBadge>) {
  return (
    <span
      onClick={onClick}
      className={`rounded-lg ${color} w-max py-1 px-2 font-semibold text-sm text-white transition cursor-pointer`}
    >
      {children}
    </span>
  );
}
