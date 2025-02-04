import { ITimerState } from '../timer.types';
import { Pause, Play } from 'lucide-react';

interface IToggleTimer {
  isRunning: ITimerState['isRunning'];
  pauseHandler: () => void;
  playHandler: () => void;
  isUpdateRoundPending: boolean;
}

export function ToggleTimer({
  isRunning,
  pauseHandler,
  playHandler,
  isUpdateRoundPending,
}: IToggleTimer) {
  return (
    <button
      className="mt-6 opacity-80 hover:opacity-100 transition-opacity"
      onClick={isRunning ? pauseHandler : playHandler}
      disabled={isUpdateRoundPending}
    >
      {isRunning ? <Pause size={30} /> : <Play size={30} />}
    </button>
  );
}
