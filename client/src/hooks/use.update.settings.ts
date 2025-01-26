import { userService } from '@/services/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TypeUserForm } from '@/types/auth.types';

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['update user'],
    mutationFn: (data: TypeUserForm) => userService.updateProfile(data),
    onSuccess: async () => {
      const { toast } = await import('sonner');
      toast.success('Successfully update user!');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });

  return { mutate, isPending };
};
