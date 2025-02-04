import cn from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IPomodoroRoundResponse } from '@/types/pomodoro.types';
import styles from './rounds.module.scss';

interface IRounds {
  rounds: IPomodoroRoundResponse[] | undefined;
  activeRound: IPomodoroRoundResponse | undefined;
  nextRoundHandler: () => void;
  prevRoundHandler: () => void;
}

export function Rounds({
  activeRound,
  nextRoundHandler,
  prevRoundHandler,
  rounds,
}: IRounds) {
  const isCanPrevRound = rounds
    ? rounds?.some((round) => round.isCompleted)
    : false;
  const isCanNextRound = rounds
    ? !rounds[rounds.length - 1].isCompleted
    : false;

  return (
    <div className="flex items-center gap-2">
      <button
        className={styles.button}
        disabled={!isCanPrevRound}
        onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
      >
        <ChevronLeft size={20} />
      </button>
      <div className={styles.roundsContainer}>
        {rounds &&
          rounds.map((round) => (
            <div
              key={round.id}
              className={cn(styles.round, {
                [styles.completed]: round.isCompleted,
                [styles.active]:
                  round.id === activeRound?.id && !round.isCompleted,
              })}
            />
          ))}
      </div>
      <button
        className={styles.button}
        disabled={!isCanNextRound}
        onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
