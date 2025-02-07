import { Injectable } from '@nestjs/common';
import { User } from './entity/user';

const users: User[] = [
  {
    userId: 1,
    username: 'john',
    password: 'password',
  },
  {
    userId: 2,
    username: 'chris',
    password: 'secret',
  },
];

@Injectable()
export class UsersService {
  async findByUserName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }

  async findById(userId: number): Promise<User | undefined> {
    return users.find((user) => user.userId === userId);
  }
}
