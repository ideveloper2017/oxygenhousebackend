import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currencies } from '../../entity/currencies.entity';
import { CurrenciesController } from '../../controller/currencies.controller';
import { CurrenciesService } from '../../service/currencies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Currencies])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  exports: [TypeOrmModule],
})
export class CurrenciesModule {}
