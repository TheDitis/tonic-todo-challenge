import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    { id: '4845adf3-0220-469f-ace0-e8a441fdb8a5', username: 'john' },
    { id: '850f77ac-21b8-4b40-9e64-0eeb35613415', username: 'maria' },
    { id: 'b9846239-9386-4009-829a-8230fded33b2', username: 'samantha' },
  ];

  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: uuid(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOneByUsername(userName: string) {
    return this.users.find((user) => user.username === userName);
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
