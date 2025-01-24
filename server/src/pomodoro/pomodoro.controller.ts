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
import { PomodoroService } from './pomodoro.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { PomodoroSessionDto } from './dto/pomodoro.session.dto';
import { PomodoroRoundDto } from './dto/pomodoro.round.dto';

@Controller('user/timer')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Get('today')
  @Auth()
  getTodaySession(@CurrentUser('id') userId: string) {
    return this.pomodoroService.getTodaySession(userId);
  }

  @Post()
  @Auth()
  @HttpCode(200)
  create(@CurrentUser('id') userId: string) {
    return this.pomodoroService.create(userId);
  }

  @Put('/round/:id')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  updateRound(@Param('id') roundId: string, @Body() dto: PomodoroRoundDto) {
    return this.pomodoroService.updateRound(dto, roundId);
  }

  @Put(':id')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  update(
    @CurrentUser('id') userId: string,
    @Param('id') pomodoroId: string,
    @Body() dto: PomodoroSessionDto,
  ) {
    return this.pomodoroService.update(dto, userId, pomodoroId);
  }

  @Delete(':id')
  @Auth()
  @HttpCode(200)
  deleteSession(
    @Param('id') pomodoroId: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.pomodoroService.deleteSession(pomodoroId, userId);
  }
}
