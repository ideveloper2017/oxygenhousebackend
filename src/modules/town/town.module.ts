import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Towns } from '../../entity/town.entity';
import { TownService } from '../../service/town.service';
import { TownController } from '../../controller/town.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Towns])],
  providers: [TownService],
  controllers: [TownController],
  exports: [TypeOrmModule],
})
export class TownModule {}
