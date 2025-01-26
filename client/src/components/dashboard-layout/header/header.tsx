'use client';

import { GlobalLoader } from './profile/global.loader';
import { Profile } from './profile/profile';

export function Header() {
  return (
    <header>
      <GlobalLoader />
      <Profile />
    </header>
  );
}
