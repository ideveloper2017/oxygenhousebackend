import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';
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
    return this.townService.createTown(createTownDto).then(data => {
      
    })
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
          message: 'No data found',
        });
      }
    }).catch(error => console.log(error));
  }

  @ApiOperation({ summary: 'Turar-joyni tahrirlash' })
  @Patch('/edit/:id')
  updateTown(@Param('id') id: number, @Body() updateTownDto: UpdateTownDto) {
    return this.townService.updateTown(id, updateTownDto).then(data => {
      if (data.affected == 0) {
        return { success: false, message: 'Turar-joy topilmadi!' };
      }
      return { success: true, message: 'Turar-joy tahrirlandi!' };
    
    }).catch(error => console.log(error));
  }

  @ApiOperation({ summary: "Turar-joyni o'chirish" })
  @Delete('/delete/:id')
  deleteTown(@Param('id') id: number) {
    return this.townService.deleteTown(id).then(data => {
      if (data.affected == 0) {
        return { success: false, message: 'Turar-joy topilmadi! ' };
      }
      return { success: true, message: "Turar-joy o'chirildi!" };
    
    })
  }

  @ApiOperation({ summary: `EHTIYOT BO'LAMIZ ⛔⛔⛔ BU REQUEST BAZANI TOZALAB YUBORADI `})
  @Delete('/clear-database')
  truncateDatabase() {
    return this.townService.clearDatabase().then(data => {
      if (data){
        return {success: true, message: "Database tozalandi ✅"}
      }else {
        return {success: false, message: "Database tozalashda xatolik ❌"}
      }
    })
  }}
