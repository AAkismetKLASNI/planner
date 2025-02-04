'use client';

import { CreateTimerSession } from './components/create.timer.session';
import { Rounds } from './components/rounds/rounds';
import { Timer } from './components/timer';
import { ToggleTimer } from './components/toggle.timer';
import { useGetTodaySession } from './hooks/use.get.today.session';
import { useTimer } from './hooks/use.timer';
import { useTimerActions } from './hooks/use.timer.actions';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Loader } from '@/components/ui/loaders/loader';

export function Pomodoro() {
  const timerState = useTimer();
  const { sessionReponse, isLoading, workInterval } =
    useGetTodaySession(timerState);

  const rounds = sessionReponse?.data.rounds;
  const actions = useTimerActions({ ...timerState, rounds });

  useEffect(() => {
    return () => {
      if (actions.isRunningRef.current) {
        toast.warning('Timer has been stopped');
        actions.pauseHandler();
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20">
      {!isLoading && (
        <Timer
          id={sessionReponse?.data.id}
          setIsRunning={timerState.setIsRunning}
          setSecondsLeft={timerState.setSecondsLeft}
          workInterval={workInterval}
          secondsLeft={timerState.secondsLeft}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : sessionReponse?.data ? (
        <>
          <Rounds
            rounds={rounds}
            nextRoundHandler={actions.nextRoundHandler}
            prevRoundHandler={actions.prevRoundHandler}
            activeRound={timerState.activeRound}
          />
          <ToggleTimer
            isRunning={timerState.isRunning}
            isUpdateRoundPending={actions.isUpdateRoundPending}
            pauseHandler={actions.pauseHandler}
            playHandler={actions.playHandler}
          />
        </>
      ) : (
        <CreateTimerSession />
      )}
    </div>
  );
}
