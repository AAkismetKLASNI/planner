import { PropsWithChildren } from 'react';

export const Error = ({ children }: PropsWithChildren) => {
  return <span className="text-horizonRed-500">{children}</span>;
};
