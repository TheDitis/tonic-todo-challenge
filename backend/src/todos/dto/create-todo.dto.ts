import { PickType } from '@nestjs/mapped-types';
import { Todo } from '../entities/todo.entity';

export class CreateTodoDto extends PickType(Todo, ['text'] as const) {}
