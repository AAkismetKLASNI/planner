import type { ITimerState } from '../timer.types';
import { useLoadSettings } from './use.load.settings';
import { pomodoroService } from '@/services/pomodoro.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useGetTodaySession({
  setActiveRound,
  setSecondsLeft,
}: ITimerState) {
  const { workInterval } = useLoadSettings();

  const {
    data: sessionReponse,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['get today session'],
    queryFn: () => pomodoroService.getTodaySession(),
  });

  const rounds = sessionReponse?.data.rounds;

  useEffect(() => {
    if (isSuccess && rounds) {
      const activeRound = rounds.find((round) => !round.isCompleted);
      setActiveRound(activeRound);

      if (activeRound && activeRound.totalSeconds !== 0) {
        setSecondsLeft(activeRound.totalSeconds);
      }
    }
  }, [isSuccess, rounds]);

  return { sessionReponse, isLoading, workInterval };
}
