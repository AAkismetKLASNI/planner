'use client';

import { formatTime } from './format-time';
import { useCreateSession } from './hooks/use.create.session';
import { useDeleteSession } from './hooks/use.delete.session';
import { useGetTodaySession } from './hooks/use.get.today.session';
import { useTimer } from './hooks/use.timer';
import { useTimerActions } from './hooks/use.timer.actions';
import { Rounds } from './rounds/rounds';
import { Pause, Play, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';
import { Loader } from '@/components/ui/loader/loader';

export function Pomodoro() {
  const timerState = useTimer();
  const { sessionReponse, isLoading, workInterval } =
    useGetTodaySession(timerState);

  const rounds = sessionReponse?.data.rounds;
  const actions = useTimerActions({ ...timerState, rounds });

  const { deleteSession, isDeleteSessionPending } = useDeleteSession(() =>
    timerState.setSecondsLeft(workInterval * 60),
  );
  const { createSession, isCreateSessionPending } = useCreateSession();

  return (
    <div className="relative w-80 text-center">
      {!isLoading && (
        <div className="text-7xl font-semibold">
          {formatTime(timerState.secondsLeft)}
        </div>
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
          <button
            className="mt-6 opacity-80 hover:opacity-100 transition-opacity"
            onClick={
              timerState.isRunning ? actions.pauseHandler : actions.playHandler
            }
            disabled={actions.isUpdateRoundPending}
          >
            {timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
          </button>
          <button
            onClick={() => {
              timerState.setIsRunning(false);
              deleteSession(sessionReponse.data.id);
            }}
            className="absolute top-0 right-0 opacity-40 hover:opacity-90 transition-opacity"
            disabled={isDeleteSessionPending}
          >
            <RefreshCcw size={20} />
          </button>
        </>
      ) : (
        <Button
          onClick={() => createSession()}
          disabled={isCreateSessionPending}
          className="mt-1"
        >
          Create session
        </Button>
      )}
    </div>
  );
}
