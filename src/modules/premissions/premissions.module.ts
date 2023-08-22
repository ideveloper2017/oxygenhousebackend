import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from '../../entity/permissions.entity';
import { PremissionsService } from '../../service/premissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permissions])],
  controllers: [],
  providers: [PremissionsService],
  exports: [TypeOrmModule],
})
export class PremissionsModule {}
