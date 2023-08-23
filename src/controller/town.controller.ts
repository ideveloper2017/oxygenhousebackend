import { Body, Controller, Delete, Get, Param, Patch, Post, Response } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { UpdateTownDto } from 'src/dtos/town-dto/update-town.dto';
import { TownService } from 'src/service/town.service';

@ApiTags('Towns')
@Controller('town')
export class TownController {
  constructor(private readonly townService: TownService) {}

  @ApiOperation({
    summary: 'Yangi turar-joy yaratish',
    description: "ya'ni onyekt yaratish",
  })
  @Post('/add')
  createTown(@Body() createTownDto: CreateTownDto) {
    return this.townService.createTown(createTownDto);
  }

  @ApiOperation({ summary: "mavjud turar-joylarni ro'yxatini olish" })
  @Get('/all')
  getAllTowns(@Response() res) {
    return this.townService.findAllTowns().then((data) => {
      if (data.length != 0) {
        return res.send({
          success: true,
          data: data,
          message: 'Fetch All Records!',
        });
      } else {
        return res.send({
          success: false,
          data: null,
          message: 'not file records!',
        });
      }
    });
  }

  @Patch('/edit/:id')
  updateTown(@Param('id') id:number, @Body() updateTownDto: UpdateTownDto ){

    return this.townService.updateTown(id, updateTownDto)
  }

  @Delete('/delete/:id')
  deleteTown(@Param('id') id:number ) {
    return this.townService.deleteTown(id)
  }
}
