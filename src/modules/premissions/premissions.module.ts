import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from '../../entity/permissions.entity';
import { PermissionsService } from 'src/service/permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permissions])],
  controllers: [],
  providers: [PermissionsService],
  exports: [TypeOrmModule, PermissionsService],
})
export class PermissionsModule {}
