import { timeBlockService } from '@/services/time-block.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteTimeBlock() {
  const queryClient = useQueryClient();

  const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete time-block'],
    mutationFn: (id: string) => timeBlockService.deleteTimeBlock(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] }),
  });

  return { deleteTimeBlock, isDeletePending };
}
