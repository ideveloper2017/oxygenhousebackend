import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FloorsController } from 'src/controller/floors.controller';
import { Floor } from 'src/entity/floor.entity';
import { FloorsService } from 'src/service/floors.service';

@Module({
    imports: [TypeOrmModule.forFeature([Floor])],
    controllers: [FloorsController],
    providers: [FloorsService],
    exports: [TypeOrmModule],
})
export class FloorsModule {}
