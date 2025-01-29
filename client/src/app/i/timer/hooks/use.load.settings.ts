import { useGetProfile } from '@/hooks/use.get.profile';

export function useLoadSettings() {
  const { data } = useGetProfile();

  const workInterval = data?.user.workInterval ?? 50;
  const breakInterval = data?.user.breakInterval ?? 10;

  return { workInterval, breakInterval };
}
