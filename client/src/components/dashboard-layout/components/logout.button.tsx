'use client';

import { authService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const { push } = useRouter();

  const { mutate: onLogOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => push('/'),
  });

  return (
    <div className="absolute top-2 right-2">
      <button
        className="opacity-20 hover:opacity-100 transition-opacity"
        onClick={() => onLogOut()}
      >
        <LogOut size={20} />
      </button>
    </div>
  );
}
