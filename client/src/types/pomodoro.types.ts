import { IBase } from './root.types';

export interface IPomodoroSessionResponse extends IBase {
  isCompleted?: boolean;
  rounds?: IPomodoroRound[];
}

export interface IPomodoroRoundResponse extends IBase {
  isCompleted?: boolean;
  totalSeconds: number;
}

export type TypePomodoroSessionState = Partial<
  Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>;

export type TypePomodoroRoundState = Partial<
  Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>;
