import { authService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { UseFormReset } from 'react-hook-form';
import type { IAuthForm } from '@/types/auth.types';
import { DASHBOARD_PAGES } from '@/config/page-url.config';

export function useAuth(reset: UseFormReset<IAuthForm>) {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const { mutate, isPending, error } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLogin ? 'login' : 'register', data),
    onSuccess: async () => {
      const { toast } = await import('sonner');
      toast.success('Successfully login!');
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
    onError: (error: string) => error,
  });

  return { mutate, isPending, error, setIsLogin };
}
