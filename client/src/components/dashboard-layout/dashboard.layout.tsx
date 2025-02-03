import { Sidebar } from './sidebar';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="grid h-screen grid-cols-[0.9fr,_6fr]">
      <Sidebar />

      <main className="p-big-layout overflow-x-hidden max-h-screen relative">
        {children}
      </main>
    </div>
  );
}
