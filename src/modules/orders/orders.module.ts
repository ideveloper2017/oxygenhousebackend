import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from 'src/controller/orders.controller';
import { Orders } from 'src/entity/orders.entity';
import { OrdersService } from 'src/service/orders.service';

@Module({
    imports: [TypeOrmModule.forFeature([Orders])],
    controllers: [OrdersController],
    providers: [OrdersService],
    exports: [TypeOrmModule]
})
export class OrdersModule {}
