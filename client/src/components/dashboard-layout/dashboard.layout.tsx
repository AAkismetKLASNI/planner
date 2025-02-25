import { Sidebar } from './sidebar';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="fixed justify-between h-screen bottom-0 left-0 right-0 flex flex-col lg:flex-row lg:justify-normal">
      <Sidebar />

      <main className="-order-1 lg:order-1 p-2 lg:p-big-layout overflow-x-hidden max-h-screen relative w-full">
        {children}
      </main>
    </div>
  );
}
