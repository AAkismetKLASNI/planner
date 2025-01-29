import { timeBlockService } from '@/services/time-block.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TypeTimeBlockFormState } from '@/types/time-block.types';

export function useUpdateTimeBlock() {
  const queryClient = useQueryClient();

  const { mutate: updateTimeBlock, isPending } = useMutation({
    mutationKey: ['update time-blocks'],
    mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
      timeBlockService.updateTimeBlock(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] }),
  });

  return { updateTimeBlock, isPending };
}
