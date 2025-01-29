import { ITimerState } from '../timer.types';
import { useLoadSettings } from './use.load.settings';
import { useUpdateRound } from './use.update.round';
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
}: TypeUseTimerActions) {
  const { workInterval } = useLoadSettings();
  const { isUpdateRoundPending, updateRound } = useUpdateRound();

  const pauseHandler = () => {
    setIsRunning(false);
    if (!activeRound?.id) return;

    console.log(workInterval);

    updateRound({
      id: activeRound.id,
      data: {
        totalSeconds: secondsLeft,
        isCompleted: Math.floor(secondsLeft / 60) > workInterval,
      },
    });
  };

  const playHandler = () => {
    setIsRunning(true);
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
    isUpdateRoundPending,
    pauseHandler,
    playHandler,
    nextRoundHandler,
    prevRoundHandler,
  };
}
