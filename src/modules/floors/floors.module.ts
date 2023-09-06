import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Floor } from '../../entity/floor.entity';
import { FloorsController } from '../../controller/floors.controller';
import { FloorsService } from '../../service/floors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Floor])],
  controllers: [FloorsController],
  providers: [FloorsService],
  exports: [TypeOrmModule],
})
export class FloorsModule {}
