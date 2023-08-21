import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrenciesController } from 'src/controller/currencies.controller';
import { Currencies } from 'src/entity/currencies.entity';
import { CurrenciesService } from 'src/service/currencies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Currencies])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  exports: [TypeOrmModule],
})
export class CurrenciesModule {}
