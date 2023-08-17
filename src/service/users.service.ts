import { Injectable } from '@nestjs/common';

import { Users } from 'src/entity/users.entity';
import { DataSource } from 'typeorm';
import {CreateUserDto} from "../dtos/user-dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource) {}

  async getUsers() {
    const users = await this.dataSource.manager.find(Users);
    return { message: 'All users', data: users };
  }

  public async signin(userDto:CreateUserDto){
    await this.dataSource.manager.getRepository(Users).find({where:{}})
  }

  
}
