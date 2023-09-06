import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FloorsService } from 'src/service/floors.service';


@ApiTags('Floors')
@Controller('floors')
export class FloorsController {
    constructor(private readonly floorService: FloorsService){}

    @ApiOperation({summary: "Blokga qavat qo'shish"})
    @Post('/:entrance_id')

    addFloor(@Param('entrance_id') entrance_id: number) {
        return this.floorService.addFloor(entrance_id).then(data => {
            if(data){
                return {success: true, message:"Qavat qo'shildi", data}
            }else {
                return {success: false, message:"xatolik!!"}
            }
        }).catch(error => {
            console.log(error);
        })
    }

    @ApiOperation({summary: "Podyezdga tegishli barcha qavatlarni ko'rish"})
    @Get('/all/:entrance_id')
    getFloorsOfEntrance(@Param('entrance_id') entrance_id: number){
        return this.floorService.getFloorOfEntrance(entrance_id)
    }

    @ApiOperation({summary: "bo'sh podyezni o'chirish"})
    @Delete('/delete/:id')
    deleteEmptyEntrances(@Param('id') id: number) {
        return this.floorService.deleteFloor(id)
    }
}
