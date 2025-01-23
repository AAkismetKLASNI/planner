import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TimeBlockDto } from './dto/time.block.dto';

@Injectable()
export class TimeBlockService {
  constructor(private prisma: PrismaService) {}

  getAll(userId: string) {
    return this.prisma.timeBlock.findMany({
      where: { userId },
      orderBy: { order: 'asc' },
    });
  }

  create(dto: TimeBlockDto, userId: string) {
    return this.prisma.timeBlock.create({
      data: { ...dto, user: { connect: { id: userId } } },
    });
  }

  update(dto: Partial<TimeBlockDto>, userId: string, timeBlockId: string) {
    return this.prisma.timeBlock.update({
      where: { id: timeBlockId, userId },
      data: dto,
    });
  }

  delete(userId: string, timeBlockId: string) {
    return this.prisma.timeBlock.delete({
      where: { id: timeBlockId, userId },
    });
  }

  updateOrder(ids: string[]) {
    return this.prisma.$transaction(
      ids.map((id, order) =>
        this.prisma.timeBlock.update({ where: { id }, data: { order } }),
      ),
    );
  }
}
