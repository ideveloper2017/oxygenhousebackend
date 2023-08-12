import { Module } from '@nestjs/common';
import { UsersController } from 'src/controller/users.controller';
import { UsersService } from 'src/service/users.service';

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
