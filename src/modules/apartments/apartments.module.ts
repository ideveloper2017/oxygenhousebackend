import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartments } from '../../entity/apartments.entity';
import { ApartmentsService } from '../../service/apartments.service';
import { ApartmentsController } from '../../controller/apartments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apartments])],
  providers: [ApartmentsService],
  controllers: [ApartmentsController],
  exports: [TypeOrmModule],
})
export class ApartmentsModule {}
