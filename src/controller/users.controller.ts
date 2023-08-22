import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/service/users.service';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/list')
  findAll() {
    return this.usersService.getUsers();
  }

  @Post('/save')
  public async createLogin(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createLogin(createUserDto);
  }

  @Put('/update')
  update(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.signIn(createUserDto);
  }

  @Patch('/delete')
  edit(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.signIn(createUserDto);
  }
}
