import { taskService } from '@/services/task.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ITaskResponse } from '@/types/task.types';

export const useGetTasks = () => {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getAllTasks(),
  });

  const [tasks, setTasks] = useState<ITaskResponse[] | undefined>(data?.data);

  useEffect(() => setTasks(data?.data), [data?.data]);

  return { tasks, setTasks };
};
