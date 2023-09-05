import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntrancesService } from 'src/service/entrances.service';


@ApiTags('Entrances')
@Controller('entrances')
export class EntrancesController {
    constructor(private readonly entranceService: EntrancesService) {}

    @ApiOperation({summary: "Yangi Yo'lak qo'shish"})
    @Post('/:building_id')
    addEntrance(@Param('building_id') building_id: number){
        return this.entranceService.addEntrance(building_id).then(response => {
            if(response){
                return {success: true, data:response, message: "Blok qo'shildi."}
            }
            else {
                return {success: false, message: "Blok qo'shilmadi."}
            }
        }).catch(error => {
            console.log(error.massage);
        })
    }

    @ApiOperation({summary: "Binoga tegishli barcha podyezdlarni ko'rish"})
    @Get('/all/:building_id')
    getEntranceOfBuilding(@Param('building_id') building_id: number) {
        return this.entranceService.getEntranceOfBuilding(building_id)
    }

    @ApiOperation({summary: "bo'sh podyezni o'chirish"})
    @Delete('/delete/:id')
    deleteEmptyEntrances(@Param('id') id: number) {
        return this.entranceService.deleteEmptyEnrances(id)
    }
}
