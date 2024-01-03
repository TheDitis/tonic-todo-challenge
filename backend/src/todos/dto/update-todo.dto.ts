import { PickType } from '@nestjs/mapped-types';
import { Todo } from '../entities/todo.entity';

export class UpdateTodoDto extends PickType(Todo, [
  'text',
  'completed',
] as const) {}
