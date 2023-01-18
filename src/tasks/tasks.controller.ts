import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'Retrieved tasks';
  }
}