import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

  async getUsers() {
    const users = await this.usersRepository.find()
    return {status: 200, data: users, message: 'Success'}
  }

  
}
