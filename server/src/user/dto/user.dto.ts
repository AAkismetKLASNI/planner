import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { PomodoroDto } from './pomodoro.dto';

export class UserDto extends PomodoroDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'Password must be at least 6 symbols long!' })
  password?: string;
}
