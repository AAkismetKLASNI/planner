'use client';

import { MENU } from './components/menu.data';
import { MenuItem } from './components/menu.item';
import { Profile } from './components/profile/profile';

export function Sidebar() {
  return (
    <aside className="bg-black/20 backdrop-blur-md flex flex-col gap-2 rounded-lg lg:m-4">
      <Profile />

      <div className="lg:py-2 lg:p-3 relative">
        <ul className="grid grid-cols-5 lg:block lg:mt-6">
          {MENU.map((item) => (
            <MenuItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
