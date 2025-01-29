import { timeBlockService } from '@/services/time-block.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TypeTimeBlockFormState } from '@/types/time-block.types';

export function useCreateTimeBlock() {
  const queryClient = useQueryClient();

  const { mutate: createTimeBlock, isPending } = useMutation({
    mutationKey: ['create time-blocks'],
    mutationFn: (data: TypeTimeBlockFormState) =>
      timeBlockService.createTimeBlock(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] }),
  });

  return { createTimeBlock, isPending };
}
