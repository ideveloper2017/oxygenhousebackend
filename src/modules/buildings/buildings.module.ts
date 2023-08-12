import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsController } from 'src/controller/buildings.controller';
import { Apartments } from 'src/entity/apartments.entity';
import { Buildings } from 'src/entity/buildings.entity';
import { BuildingsService } from 'src/service/buildings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Buildings,Apartments]),],
  controllers: [BuildingsController],
  providers: [BuildingsService],
  exports: [TypeOrmModule],
})
export class BuildingsModule {}
