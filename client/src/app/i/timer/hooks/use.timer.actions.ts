import { ITimerState } from '../timer.types';
import { useLoadSettings } from './use.load.settings';
import { useUpdateRound } from './use.update.round';
import { useEffect, useRef } from 'react';
import { number } from 'yup';
import type { IPomodoroRoundResponse } from '@/types/pomodoro.types';

type TypeUseTimerActions = ITimerState & {
  rounds: IPomodoroRoundResponse[] | undefined;
};

export function useTimerActions({
  activeRound,
  setIsRunning,
  secondsLeft,
  rounds,
  setActiveRound,
  isRunning,
}: TypeUseTimerActions) {
  const { workInterval } = useLoadSettings();
  const { isUpdateRoundPending, updateRound } = useUpdateRound();

  const isRunningRef = useRef(isRunning);
  const activeRoundIdRef = useRef<string | undefined>(activeRound?.id);
  const secondLeftRef = useRef<number | undefined>(secondsLeft);

  useEffect(() => {
    activeRoundIdRef.current = activeRound?.id;
  }, [activeRound?.id]);

  useEffect(() => {
    secondLeftRef.current = secondsLeft;
  }, [secondsLeft]);

  const pauseHandler = () => {
    setIsRunning(false);
    isRunningRef.current = false;
    if (!activeRoundIdRef.current) return;

    updateRound({
      id: activeRoundIdRef.current,
      data: {
        totalSeconds: secondLeftRef.current,
        isCompleted: Math.floor(secondsLeft / 60) > workInterval,
      },
    });
  };

  const playHandler = () => {
    setIsRunning(true);
    isRunningRef.current = true;
  };

  const nextRoundHandler = () => {
    if (!activeRound || !activeRound.id) return;

    updateRound({
      id: activeRound.id,
      data: { isCompleted: true, totalSeconds: Math.floor(workInterval * 60) },
    });
  };

  const prevRoundHandler = () => {
    const lastCompletedRound = rounds?.findLast((round) => round.isCompleted);

    if (!lastCompletedRound || !lastCompletedRound.id) return;

    updateRound({
      id: lastCompletedRound.id,
      data: {
        isCompleted: false,
        totalSeconds: 0,
      },
    });

    setActiveRound(lastCompletedRound);
  };

  return {
    isRunningRef,
    isUpdateRoundPending,
    pauseHandler,
    playHandler,
    nextRoundHandler,
    prevRoundHandler,
  };
}
