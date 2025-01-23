import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TaskDto } from './dto/task.dto';

@Controller('user/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @Auth()
  getAll(@CurrentUser('id') id: string) {
    return this.taskService.getAll(id);
  }

  @Post()
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
    return this.taskService.create(dto, userId);
  }

  @Put(':id')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  update(
    @Body() dto: TaskDto,
    @CurrentUser('id') userId: string,
    @Param('id') taskId: string,
  ) {
    return this.taskService.update(dto, userId, taskId);
  }

  @Delete(':id')
  @Auth()
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
