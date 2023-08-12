import { Injectable } from '@nestjs/common';

import { Users } from 'src/entity/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource,) {}

  async getUsers() {
    const users = await this.dataSource.manager.find(Users);
    return { message: 'All users', data: users };
  }

  
}
