import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): string {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.tasksService.getById(id);
  }
}
