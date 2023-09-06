import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buildings } from '../../entity/buildings.entity';
import { Apartments } from '../../entity/apartments.entity';
import { BuildingsController } from '../../controller/buildings.controller';
import { BuildingsService } from '../../service/buildings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Buildings, Apartments])],
  controllers: [BuildingsController],
  providers: [BuildingsService],
  exports: [TypeOrmModule],
})
export class BuildingsModule {}
