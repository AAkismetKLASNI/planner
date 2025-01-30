import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export const useGetProfile = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
  });

  console.log('123', data?.statistics);

  return { data, isLoading, isSuccess };
};
