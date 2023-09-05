import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrancesController } from 'src/controller/entrances.controller';
import { Entrance } from 'src/entity/entrance.entity';
import { EntrancesService } from 'src/service/entrances.service';

@Module({
    imports: [TypeOrmModule.forFeature([Entrance])],
    controllers: [EntrancesController],
    providers: [EntrancesService],
    exports: [TypeOrmModule],
})
export class EntrancesModule {
}
