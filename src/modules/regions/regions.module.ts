import { Global, Module } from '@nestjs/common';
import { RegionsService } from '../../services/regions/regions.service';
import { RegionsController } from '../../controllers/regions/regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {District, Regions} from '../../entity';
import {DistrictsService} from "../../services/regions/districts.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Regions,District])],
  controllers: [RegionsController],
  providers: [RegionsService,DistrictsService],
  exports: [TypeOrmModule],
})
export class RegionsModule {
  constructor(private regionService: RegionsService) {}
}
