import { IsNotEmpty, IsUUID } from 'class-validator';

export class User {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  username: string;
}
