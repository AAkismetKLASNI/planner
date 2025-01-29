import { timeBlockService } from '@/services/time-block.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ITimeBlockResponse } from '@/types/time-block.types';

export function useGetTimeBlocks() {
  const { data, isLoading } = useQuery({
    queryKey: ['time-blocks'],
    queryFn: () => timeBlockService.getAllTimeBlocks(),
  });

  const [items, setItems] = useState<ITimeBlockResponse[] | undefined>(
    data?.data,
  );

  useEffect(() => {
    setItems(data?.data);
  }, [data?.data]);

  return { items, setItems, isLoading };
}
