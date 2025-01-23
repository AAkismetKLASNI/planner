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
import { TimeBlockService } from './time.block.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TimeBlockDto } from './dto/time.block.dto';
import { UpdateOrderDto } from './dto/update.order.dto';

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Get()
  @Auth()
  getAll(@CurrentUser('id') id: string) {
    return this.timeBlockService.getAll(id);
  }

  @Post()
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  create(@CurrentUser('id') userId: string, @Body() dto: TimeBlockDto) {
    return this.timeBlockService.create(dto, userId);
  }

  @Put('update-order')
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  updateOrder(@Body() dto: UpdateOrderDto) {
    return this.timeBlockService.updateOrder(dto.ids);
  }

  @Put(':id')
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  update(
    @CurrentUser('id') userId: string,
    @Body() dto: TimeBlockDto,
    @Param('id') timeBlockId: string,
  ) {
    return this.timeBlockService.update(dto, userId, timeBlockId);
  }

  @Delete(':id')
  @Auth()
  @HttpCode(200)
  delete(@CurrentUser('id') userId: string, @Param('id') timeBlockId: string) {
    return this.timeBlockService.delete(userId, timeBlockId);
  }
}
