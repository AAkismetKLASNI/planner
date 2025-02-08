'use client';

import { LogoutButton } from './components/logout.button';
import { MENU } from './components/menu.data';
import { MenuItem } from './components/menu.item';
import { Profile } from './components/profile/profile';

export function Sidebar() {
  return (
    <aside className="m-4 bg-secondary flex flex-col gap-2 rounded-lg">
      <Profile />

      <div className="p-3 relative">
        <LogoutButton />
        <ul className="mt-6">
          {MENU.map((item) => (
            <MenuItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
