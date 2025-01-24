import { IBase } from './root.types';

export interface IPomodoroSession extends IBase {
  isCompleted?: boolean;
  rounds?: IPomodoroRound[];
}

export interface IPomodoroRound extends IBase {
  isCompleted?: boolean;
  totalSeconds: number;
}

export type TypePomodoroSessionState = Partial<
  Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>;

export type TypePomodoroRoundState = Partial<
  Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>;
