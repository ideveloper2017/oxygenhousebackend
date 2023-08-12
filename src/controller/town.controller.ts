import { Body, Controller, Post } from '@nestjs/common';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { TownService } from 'src/service/town.service';

@Controller('town')
export class TownController {
    constructor(private readonly townService:TownService ) {}

    @Post()
    createTown(@Body() createTownDto: CreateTownDto){

        return this.townService.create(createTownDto)
    }

}
