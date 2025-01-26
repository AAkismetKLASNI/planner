'use client';

import { LogoutButton } from './logout.button';
import { MENU } from './menu.data';
import { MenuItem } from './menu.item';
import { SquareChartGantt } from 'lucide-react';
import Link from 'next/link';
import { COLORS } from '@/constants/color.constants';
import { SITE_NAME } from '@/constants/seo.constants';

export function Sidebar() {
  return (
    <aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-between">
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 p-layout border-b border-r-border"
        >
          <SquareChartGantt size={38} color={COLORS.primary} />
          <span className="text-2xl font-bold relative">Reflection</span>
        </Link>
        <div className="p-3 relative">
          <LogoutButton />
          <ul className="mt-6">
            {MENU.map((item) => (
              <MenuItem item={item} key={item.name} />
            ))}
          </ul>
        </div>
      </div>
      <footer className="text-center p-layout opacity-50">
        2025 &copy; kismetkismet
      </footer>
    </aside>
  );
}
