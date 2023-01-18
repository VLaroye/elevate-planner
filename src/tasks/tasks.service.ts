import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAll(): string {
    return 'Retrieved tasks';
  }

  getById(id: string): string {
    return `Retrieved task with id: ${id}`;
  }
}
