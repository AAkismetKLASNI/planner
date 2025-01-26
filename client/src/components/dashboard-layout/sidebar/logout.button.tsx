'use client';

import { authService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => push('/auth'),
  });

  return (
    <div className="absolute top-2 right-2">
      <button
        className="opacity-20 hover:opacity-100 transition-opacity"
        onClick={() => mutate()}
      >
        <LogOut size={20} />
      </button>
    </div>
  );
}
