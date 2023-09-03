import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async getUsers() {
    const users = await this.usersRepository.find({relations: ['roles', 'roles.permission']});
    return { status: 200, data: users, message: 'Success' };
  }

  public async signIn(username: string) {
    return await this.usersRepository.manager
      .getRepository(Users)
      .findOne({ where: { username: username },relations:['roles'] })
      .then((data) => {
        return data;
      });
  }

  public async createLogin(createUserDto: CreateUserDto) {
    try {
      const newUser = new Users()
      newUser.first_name = createUserDto.first_name
      newUser.last_name = createUserDto.last_name
      newUser.username = createUserDto.username
      newUser.password = createUserDto.password
      newUser.is_active = createUserDto.is_active
      newUser.role_id = createUserDto.role_id
      
      const user = this.usersRepository.save(newUser);
      return user
      
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
