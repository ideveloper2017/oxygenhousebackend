import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownController } from 'src/controller/town.controller';
import { Towns } from 'src/entity/town.entity';
import { TownService } from 'src/service/town.service';
import { RolesModule } from '../roles/roles.module';
import { PermissionsModule } from '../premissions/premissions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Towns]), RolesModule, PermissionsModule],
  providers: [TownService],
  controllers: [TownController],
  exports: [TypeOrmModule],
})
export class TownModule {}
