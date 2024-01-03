import { IsNotEmpty, IsUUID } from 'class-validator';

export class Todo {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  text: string;

  completed: boolean;
}
