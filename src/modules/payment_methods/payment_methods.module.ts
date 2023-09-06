import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethods } from '../../entity/payment_methods.entity';
import { PaymentMethodsController } from '../../controller/payment_methods.controller';
import { PaymentMethodsService } from '../../service/payment_methods.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethods])],
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
  exports: [TypeOrmModule],
})
export class PaymentMethodsModule {}
