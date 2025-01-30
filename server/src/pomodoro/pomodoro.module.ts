import { Module } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { PomodoroController } from './pomodoro.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { TaskService } from 'src/task/task.service';

@Module({
  controllers: [PomodoroController],
  providers: [PomodoroService, PrismaService, UserService, TaskService],
})
export class PomodoroModule {}
