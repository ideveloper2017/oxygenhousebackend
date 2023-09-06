import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrance } from '../../entity/entrance.entity';
import { EntrancesController } from '../../controller/entrances.controller';
import { EntrancesService } from '../../service/entrances.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entrance])],
  controllers: [EntrancesController],
  providers: [EntrancesService],
  exports: [TypeOrmModule],
})
export class EntrancesModule {}
