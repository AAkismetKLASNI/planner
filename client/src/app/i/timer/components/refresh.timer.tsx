import { useDeleteSession } from '../hooks/use.delete.session';
import { ITimerState } from '../timer.types';
import { RefreshCcw } from 'lucide-react';

interface IRefreshTimer {
  setIsRunning: ITimerState['setIsRunning'];
  setSecondsLeft: ITimerState['setSecondsLeft'];
  workInterval: number;
  id: string | undefined;
}

export function RefreshTimer({
  setIsRunning,
  setSecondsLeft,
  workInterval,
  id,
}: IRefreshTimer) {
  const { deleteSession, isDeleteSessionPending } = useDeleteSession(() =>
    setSecondsLeft(workInterval * 60),
  );

  return (
    <button
      onClick={() => {
        setIsRunning(false);
        if (id) deleteSession(id);
      }}
      className="absolute top-0 right-0 opacity-40 hover:opacity-90 transition-opacity"
      disabled={isDeleteSessionPending}
    >
      <RefreshCcw size={20} />
    </button>
  );
}
