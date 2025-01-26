import { useGetProfile } from './use.get.profile';
import { useEffect } from 'react';
import type { UseFormReset } from 'react-hook-form';
import type { TypeUserForm } from '@/types/auth.types';

export const useSetInitialData = (reset: UseFormReset<TypeUserForm>) => {
  const { data, isSuccess } = useGetProfile();

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        email: data?.user.email,
        name: data?.user.name,
        breakInterval: data?.user.breakInterval,
        intervalsCount: data?.user.intervalsCount,
        workInterval: data?.user.workInterval,
      });
    }
  }, [isSuccess]);
};
