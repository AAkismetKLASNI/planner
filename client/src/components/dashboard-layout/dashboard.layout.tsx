import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="grid h-screen 2xl:grid-cols-[1.1fr,_6fr] grid-cols-[1.2fr,_6fr]">
      <Sidebar />

      <main className="p-big-layout overflow-x-hidden max-h-screen relative">
        <Header />
        {children}
      </main>
    </div>
  );
}
