import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from 'src/controller/clients.controller';
import { Clients } from 'src/entity/clients.entity';
import { ClientsService } from 'src/service/clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Clients])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [TypeOrmModule],
})
export class ClientsModule {}
