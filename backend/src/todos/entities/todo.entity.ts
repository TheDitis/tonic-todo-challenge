import { IsNotEmpty, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class Todo {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  text: string;

  completed: boolean;

  @IsUUID()
  userId: string;

  constructor(partial: Pick<Todo, 'userId' | 'text'>) {
    Object.assign(this, partial);
    if (!this.completed) {
      this.completed = false;
    }
    this.id = uuid();
  }
}
