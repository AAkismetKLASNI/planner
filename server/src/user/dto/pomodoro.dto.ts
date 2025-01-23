import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PomodoroDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  workInterval?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  breakInterval?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(10)
  intervalsCount?: number;
}
