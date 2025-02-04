import { formatTime } from '../format-time';
import { ITimerState } from '../timer.types';
import { RefreshTimer } from './refresh.timer';

interface ITimer {
  secondsLeft: ITimerState['secondsLeft'];
  setIsRunning: ITimerState['setIsRunning'];
  setSecondsLeft: ITimerState['setSecondsLeft'];
  workInterval: number;
  id: string | undefined;
}

export function Timer({
  secondsLeft,
  id,
  setIsRunning,
  setSecondsLeft,
  workInterval,
}: ITimer) {
  return (
    <div className="relative border-primary border-4 aspect-square flex justify-center items-center rounded-full h-80 w-80 tabular-nums">
      <h1 className="absolute">{formatTime(secondsLeft)}</h1>

      <RefreshTimer
        id={id}
        setIsRunning={setIsRunning}
        setSecondsLeft={setSecondsLeft}
        workInterval={workInterval}
      />
    </div>
  );
}
