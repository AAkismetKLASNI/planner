import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './dto/task.dto';
import {
  startOfDay,
  endOfDay,
  subDays,
  endOfWeek,
  startOfWeek,
} from 'date-fns';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getAll(userId: string) {
    return this.prisma.task.findMany({ where: { userId } });
  }

  create(dto: TaskDto, userId: string) {
    return this.prisma.task.create({
      data: { ...dto, user: { connect: { id: userId } } },
    });
  }

  update(dto: Partial<TaskDto>, userId: string, taskId: string) {
    return this.prisma.task.update({
      where: { id: taskId, userId },
      data: dto,
    });
  }

  delete(taskId: string) {
    return this.prisma.task.delete({
      where: { id: taskId },
    });
  }

  getCompletedTasks(userId: string) {
    return this.prisma.task.findMany({
      where: { userId, isCompleted: true },
    });
  }

  getTodayTasks(userId: string) {
    const todayStart = startOfDay(new Date());
    const todayEnd = endOfDay(new Date());

    return this.prisma.task.findMany({
      where: {
        userId,
        createdAt: {
          gte: todayStart.toISOString(),
          lte: todayEnd.toISOString(),
        },
        isCompleted: false,
      },
    });
  }

  getWeekTasks(userId: string) {
    const weekStart = startOfWeek(new Date());
    const weekEnd = endOfWeek(new Date());

    return this.prisma.task.findMany({
      where: {
        userId,
        createdAt: {
          gte: weekStart.toISOString(),
          lte: weekEnd.toISOString(),
        },
        isCompleted: false,
      },
    });
  }

  getFirstTask(userId: string) {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    date.toString();

    return this.prisma.task.findFirst({
      where: {
        userId,
        isCompleted: false,
        createdAt: { gte: date },
      },
    });
  }
}
