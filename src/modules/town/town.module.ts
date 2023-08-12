import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownController } from 'src/controller/town.controller';
import { Towns } from 'src/entity/town.entity';
import { TownService } from 'src/service/town.service';

@Module({
  imports: [TypeOrmModule.forFeature([Towns])],
  providers: [TownService],
  controllers: [TownController],
  exports: [TypeOrmModule],
})
export class TownModule {}
