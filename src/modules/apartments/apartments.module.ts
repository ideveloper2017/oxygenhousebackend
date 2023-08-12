import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentsController } from 'src/controller/apartments.controller';
import { Apartments } from 'src/entity/apartments.entity';
import { ApartmentsService } from 'src/service/apartments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apartments])],
  providers: [ApartmentsService],
  controllers: [ApartmentsController],
  exports: [TypeOrmModule],
})
export class ApartmentsModule {}
