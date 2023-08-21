import { Module } from '@nestjs/common';
import { UsersController } from 'src/controller/users.controller';
import { UsersService } from 'src/service/users.service';

@Module({
  // imports: [],
  // controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
