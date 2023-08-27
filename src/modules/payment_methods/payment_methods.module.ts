import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodsController } from 'src/controller/payment_methods.controller';
import { PaymentMethods } from 'src/entity/payment_methods.entity';
import { PaymentMethodsService } from 'src/service/payment_methods.service';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentMethods])],
    controllers: [PaymentMethodsController],
    providers: [PaymentMethodsService],
    exports: [TypeOrmModule]
})
export class PaymentMethodsModule {}
