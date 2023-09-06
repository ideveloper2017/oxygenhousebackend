import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from '../../entity/region.entity';
import { RegionsController } from '../../controller/regions.controller';
import { RegionsService } from '../../service/regions.service';
import { DistrictsService } from '../../service/districts.service';
import { District } from '../../entity/district.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Regions, District])],
  controllers: [RegionsController],
  providers: [RegionsService, DistrictsService],
  exports: [TypeOrmModule, RegionsService, DistrictsService],
})
export class RegionsModule {
  constructor(private regionService: RegionsService) {}
}
